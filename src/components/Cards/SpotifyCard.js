import React from 'react'
import { FaSpotify } from 'react-icons/fa'

const SpotifyCard = ({ track, index }) => {
    const { name, artist, album, image, url } = track
    return (
        <a
            href={url || '#spotify'}
            target={url ? '_blank' : undefined}
            rel={url ? 'noreferrer' : undefined}
            className='block group'
            data-aos="fade-up"
            data-aos-delay={`${(index % 6) * 100 + 100}`}
        >
            <div className='relative aspect-square rounded-2xl overflow-hidden border-[1px] border-accent group-hover:border-primary transition duration-300'>
                {image
                    ? <img src={image} alt={album || name} loading='lazy' className='h-full w-full object-cover' />
                    : <div className='h-full w-full flex items-center justify-center bg-[#2C3333]'>
                        <FaSpotify className='text-[40px] text-accent' />
                    </div>
                }
            </div>
            <h1 className='mt-4 text-sm truncate group-hover:text-primary transition duration-300'>{name}</h1>
            <p className='text-accent text-xs mt-1 truncate'>{artist || 'Unknown Artist'}</p>
            {album && <p className='text-accent text-xs mt-1 truncate'>{album}</p>}
        </a>
    )
}

export default SpotifyCard
