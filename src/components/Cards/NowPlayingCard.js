import React from 'react'
import { FaSpotify } from 'react-icons/fa'

const NowPlayingCard = ({ track }) => {
    const { name, artist, album, image, url, isPlaying } = track
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className='now-playing-card flex flex-col items-start gap-4 p-5 rounded-2xl bg-[#2C3333] mb-10 min-[400px]:flex-row min-[400px]:items-center min-[400px]:gap-5'
            data-aos="fade-up"
        >
            <div className='h-20 w-20 shrink-0 rounded-xl overflow-hidden min-[400px]:h-24 min-[400px]:w-24'>
                {image
                    ? <img src={image} alt={album || name} className='h-full w-full object-cover' />
                    : <div className='h-full w-full flex items-center justify-center bg-[#1f1f1f]'>
                        <FaSpotify className='text-[28px] text-accent' />
                    </div>
                }
            </div>
            <div className='min-w-0 w-full'>
                <div className='flex items-center gap-2'>
                    {isPlaying &&
                        <span className='eq flex items-end gap-[2px] h-3'>
                            <span className='eq-bar w-[3px] h-full bg-primary rounded-sm' />
                            <span className='eq-bar w-[3px] h-full bg-primary rounded-sm' />
                            <span className='eq-bar w-[3px] h-full bg-primary rounded-sm' />
                            <span className='eq-bar w-[3px] h-full bg-primary rounded-sm' />
                        </span>
                    }
                    <span className='text-xs uppercase tracking-widest text-primary'>{isPlaying ? 'Now Playing' : 'Paused'}</span>
                </div>
                <h1 className='mt-2 text-xl truncate'>{name}</h1>
                <p className='text-accent text-sm mt-1 truncate'>{artist || 'Unknown Artist'}</p>
                {album && <p className='text-accent text-xs mt-1 truncate'>{album}</p>}
            </div>
        </a>
    )
}

export default NowPlayingCard
