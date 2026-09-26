import React, { useCallback, useEffect, useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import SectionTitle from '../../../components/Typography/SectionTitle'
import SpotifyCard from '../../../components/Cards/SpotifyCard'
import NowPlayingCard from '../../../components/Cards/NowPlayingCard'
import useOnlineStatus from '../../../hooks/useOnlineStatus'
import './spotify.css'

const API = process.env.REACT_APP_SPOTIFY_API || 'https://spotify-api.vercel.app'
const ENDPOINT = `${API.replace(/\/+$/, '')}/api/spotify`
const REFRESH_INTERVAL = 300000
const SKELETON_COUNT = 5

const pickList = (payload) => {
    if (Array.isArray(payload)) return payload
    const list = payload?.items || payload?.tracks || payload?.data
    return Array.isArray(list) ? list : []
}

const pickImage = (track) => {
    const images = track?.album?.images || track?.album?.image || track?.image || track?.albumArt
    if (Array.isArray(images)) return images[0]?.url || images[0]?.src || ''
    return images?.url || images?.src || (typeof images === 'string' ? images : '')
}

const normaliseTracks = (payload) => {
    const seen = new Set()
    return pickList(payload).reduce((acc, entry) => {
        const track = entry?.track || entry?.item?.track || entry
        if (!track?.name) return acc
        const artists = Array.isArray(track.artists)
            ? track.artists.map(a => a?.name).filter(Boolean).join(', ')
            : track.artists?.name || ''
        const id = track.id || `${track.name}-${artists}`
        if (seen.has(id)) return acc
        seen.add(id)
        acc.push({
            id,
            name: track.name,
            artist: artists,
            album: track.album?.name || '',
            image: pickImage(track),
            url: track.external_urls?.spotify || track.url || '',
            playedAt: entry?.played_at || track.played_at || null
        })
        return acc
    }, [])
}

const Spotify = () => {
    const isOnline = useOnlineStatus()
    const [tracks, setTracks] = useState([])
    const [nowPlaying, setNowPlaying] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchTracks = useCallback(async () => {
        if (!navigator.onLine) {
            setLoading(false)
            return
        }
        try {
            const res = await fetch(ENDPOINT)
            if (!res.ok) throw new Error(`spotify ${res.status} ${JSON.stringify(await res.json().catch(() => ({})))}`)
            const data = await res.json()
            setTracks(normaliseTracks(data))
            const current = data?.nowPlaying ? normaliseTracks({ items: [data.nowPlaying] })[0] : null
            setNowPlaying(current ? { ...current, isPlaying: !!data.nowPlaying.is_playing } : null)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchTracks()
        const timer = setInterval(fetchTracks, REFRESH_INTERVAL)
        return () => clearInterval(timer)
    }, [fetchTracks])

    useEffect(() => {
        if (isOnline) {
            setLoading(true)
            fetchTracks()
        }
    }, [isOnline, fetchTracks])

    const offline = !loading && (!isOnline || tracks.length === 0)
    const title = { icon: FaSpotify, text: 'SPOTIFY' }

    return (
        <section id='spotify' className='mb-32'>
            <SectionTitle props={title} />

            {nowPlaying && <NowPlayingCard track={nowPlaying} />}

            <div className='flex flex-wrap items-center gap-3 mb-8'>
                <h2 className='lg:text-3xl md:text-2xl text-xl'>Recently <span className='text-primary'>Played</span></h2>
                {offline
                    ? <span className='px-3 py-1 text-xs border-[1px] border-error text-error rounded-full'>[OFFLINE]</span>
                    : <span className='px-3 py-1 text-xs border-[1px] border-primary text-primary rounded-full'>LIVE</span>
                }
                {offline &&
                    <button onClick={fetchTracks} className='btn btn-xs normal-case rounded-full hover:btn-primary'>
                        Retry
                    </button>
                }
            </div>

            {loading &&
                <div className='spotify-skeleton'>
                    {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                        <div key={index}>
                            <div className='aspect-square rounded-2xl bg-[#2C3333] animate-pulse' />
                            <div className='h-3 w-3/4 mt-4 rounded bg-[#2C3333] animate-pulse' />
                            <div className='h-3 w-1/2 mt-2 rounded bg-[#2C3333] animate-pulse' />
                        </div>
                    ))}
                </div>
            }

            {!loading && tracks.length > 0 &&
                <div className='spotify-row'>
                    {tracks.map((track, index) => <SpotifyCard key={track.id} track={track} index={index} />)}
                </div>
            }

            {!loading && tracks.length === 0 &&
                <p className='text-accent text-sm'>No recent tracks available right now.</p>
            }
        </section>
    )
}

export default Spotify
