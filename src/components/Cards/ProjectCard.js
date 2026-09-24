import React, { useState } from 'react'
import '../../assets/styles/project-card.css'

const ProjectCard = ({ project, setModal, index }) => {
    const [open, setOpen] = useState(false);
    const { name, img, liveLink, description, iosLink, androidLink } = project;
    return (
        <div
            className={`h-[300px] project-card hover:shadow-lg border-[1px] border-accent rounded-2xl ${open ? "is-open" : ""}`}
            data-aos="fade-up"
            data-aos-delay={`${((index) % 2) * 100 + 100}`}
            onClick={() => setOpen(o => !o)}
        >
            <img src={require(`../../assets/images/projects/${img}`)} alt={name} className='h-full w-full object-contain p-3' />

            <div className='project-card-content' onClick={(e) => e.stopPropagation()}>
                <button
                    className="absolute right-3 top-3 z-30 h-8 w-8 rounded-full bg-black/40 text-white hover:bg-black/70"
                    onClick={() => setOpen(false)}
                    aria-label={`Close ${name} details`}
                >✕</button>
                <div className='m-7'>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p className='mt-3'>{description}</p>
                    <div className='flex gap-4 mt-12'>
                        {liveLink && <a href={liveLink} target="_blank" rel="noreferrer">
                            <button className='btn btn-sm text-sm normal-case rounded-full px-5 hover:btn-primary'>
                            Live Site
                            </button>
                        </a>}
                        {iosLink && <a href={iosLink} target="_blank" rel="noreferrer">
                            <button className='btn btn-sm text-sm normal-case rounded-full px-5 hover:btn-primary'>
                            Appstore
                            </button>
                        </a>}
                        {androidLink && <a href={androidLink} target="_blank" rel="noreferrer">
                            <button className='btn btn-sm text-sm normal-case rounded-full px-5 hover:btn-primary'>
                            Playstore
                            </button>
                        </a>}
                        <label htmlFor='project-modal' onClick={() => setModal(project)} className='btn btn-sm normal-case rounded-full px-7 hover:btn-primary'>
                            Details
                        </label>

                    </div>
                </div>
            </div>
            <div className='overlay'></div>
        </div>
    )
}

export default ProjectCard