"use client"
import cloudwave from '@/assets/cloudwave.png'
import cybtracy from '@/assets/cybtracy.png'
import raphaelly from '@/assets/raphaelly.png'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import ProjectCards from './ProjectCards'

export default function Projects() {
    const [viewMore, setViewMore] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1) 


    const handleViewMore = (e:any) => {
        e.preventDefault()
        setViewMore(!viewMore)
    }
    const projects = [
        {
            name: "Cloud Wave",
            id: 1,
            description: "A cloud storage web application where users can upload, share, preview and store files and media for free.",
            tech: ["React", "Node JS", "Mega JS", "Craco", "Million JS", "Docker"],
            link: "https://cloud-wave-x9iy.onrender.com/",
            image: cloudwave,
            git: "https://github.com/Suei43/cloudwave"
        },
        {
            name: "Image Vision API",
            id: 2,
            description: "An image classification API for recognizing and classifying objects in images at a large scale using artificial intelligence models.",
            tech: ["TypeScript", "Fastify", "TypeORM", "Tensorflow JS", "Mongo DB", "Swagger"],
            link: "https://image-vision-api.onrender.com/",
            image: '',
            git: "https://github.com/Suei43/imagevision"
        },
        {
            name: "Cybtracy",
            id: 3,
            description: "The official website for Cybtracy, a non-profit organization that aims to provide digital literacy to children in underserved communities.",
            tech: ["Next JS", "TypeScript", "Framer Motion"],
            link: "https://cybtracy.com/",
            image: cybtracy,
            git: "https://github.com/Cybtracy/webapp-frontend"
        },
        {
            name: "Raphaelly Editorials Services",
            id: 4,
            description: "The official website for Raphaelly Editorials, an organization focused on project research and marketing consultancy.",
            tech: ["JavaScript", "Tailwind CSS", "Django", "PostgreSQL", "AWS S3"],
            link: "https://raphaellyeditorial.netlify.app/",
            image: raphaelly,
            git: "https://github.com/Suei43/raphaellyeditorials"
        }
    ]
    return (
        <section className={`w-full h-fit flex flex-col items-center justify-center gap-y-10`}>
            <h1 className="text-2xl font-bold text-white flex flex-row items-center justify-center gap-x-2">
                <span>Here are some projects I've worked on</span>
                <svg 
                    width="30" 
                    height="30" 
                    viewBox="0 0 24.00 24.00" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="social-icon"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke='#8892b0' strokeWidth="1.32" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </h1>
            <div className="w-7/12 flex flex-col items-center gap-y-10">
                {projects.map((item) => {
                    return <div className={`p-4 rounded-lg ${ !item.image ? 'w-7/12' : 'w-fit' } border border-primary flex flex-row relative items-center`} key={item.id}>
                        { item.image && <Image src={item.image} alt={item.name} width={300} className=''/> }
                        <div className={`${ item.image && 'w-7/12' } p-4 flex flex-col gap-y-3`}>
                            <h2 className="text-secondary font-black text-xl flex flex-row justify-between items-center">
                                {item.name}
                                <div className="flex flex-row items-center justify-center gap-x-3">
                                    <a href={item.git}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke={ activeIndex === 0 ? '#0579C3' : '#8892b0' }
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="social-icon"
                                            onMouseEnter={() => setActiveIndex(0)}
                                            onMouseLeave={() => setActiveIndex(-1)}
                                        >
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href={item.link}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="21"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke={ activeIndex === 1 ? '#0579C3' : '#8892b0' }
                                            strokeWidth="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="social-icon"
                                            onMouseEnter={() => setActiveIndex(1)}
                                            onMouseLeave={() => setActiveIndex(-1)}
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </a>
                                </div>
                            </h2>
                            <p className="text-sm text-primary">{item.description}</p>
                            <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 justify-start">
                                    {item.tech.map((i) => {
                                        return (
                                            <p className="border text-white cursor-pointer border-primary py-1 px-3 text-xs">{i}</p>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                })}
            </div>
            { viewMore && 
            <div className='flex flex-row items-center w-10/12 justify-center gap-y-8'>
                <h3 className="text-white text-lg w-4/12 text-center">Here's a list of other projects I've worked on, including my open source contributions.</h3>
                <ProjectCards/> 
            </div>
            }
            <button className="py-2.5 rounded-sm px-14 border border-primary text-white main-btn" onClick={
                (e) => handleViewMore(e)
            }>
                View <span>{ viewMore ? 'Less' : 'More' }</span>
            </button>
        </section>
    )
}