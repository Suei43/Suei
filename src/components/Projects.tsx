"use client"
import cloudwave from '@/assets/cloudwave.png'
import raphaelly from '@/assets/raphaelly.png'
import Image from 'next/image'

export default function Projects() {

    const handleViewMore = (e:any) => {
        e.preventDefault()
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
            description: "An Image recognition API powered by TensorflowJS pre-trained models.",
            tech: ["TypeScript", "Fastify", "TypeORM", "Tensorflow JS", "Mongo DB", "Swagger"],
            link: "https://image-vision-api.onrender.com/",
            image: cloudwave,
            git: "https://github.com/Suei43/imagevision"
        },
        {
            name: "Raphaelly Editorials Services",
            id: 3,
            description: "The official website for Raphaelly Editorials, an organization focused on project, research and marketing consultancy.",
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
                    <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#dae6e2" strokeWidth="1.32" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </h1>
            <div className="w-7/12 flex flex-col gap-y-10">
                {projects.map((item) => {
                    return <div className='p-4 w-full border border-primary flex flex-row relative items-center' key={item.id}>
                        <Image src={item.image} alt={item.name} width={300} className=''/>
                        <div className="w-7/12 p-4 flex flex-col gap-y-3">
                            <h2 className="text-secondary font-semibold text-xl flex flex-row justify-between items-center">
                                {item.name}
                                <div className="flex flex-row items-center justify-center gap-x-3">
                                    <a href={item.git}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#8892b0"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="social-icon"
                                        >
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href={item.link}>
                                        <svg 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 24 24" 
                                            version="1.1" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            xmlnsXlink="http://www.w3.org/1999/xlink" 
                                            fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier"> <title></title> 
                                            <g fill="none" fill-rule="evenodd" id="页面-1" strokeWidth="1.8"> 
                                            <g id="导航图标" stroke="#8892b0" strokeWidth="1.8" transform="translate(-177.000000, -334.000000)"> 
                                            <g id="官方网站" transform="translate(177.000000, 334.000000)"> 
                                            <g id="编组" transform="translate(3.000000, 4.000000)"> 
                                            <rect height="4.5" id="矩形" strokeLinecap="round" strokeLinejoin="round" width="5" x="7" y="12"></rect> 
                                            <rect height="12" id="矩形" rx="1" width="19" x="0" y="0"></rect> 
                                            <line id="路径" strokeLinecap="round" strokeLinejoin="round" x1="8.5" x2="10.5" y1="9.5" y2="9.5"></line> 
                                            <line id="路径" strokeLinecap="round" strokeLinejoin="round" x1="4.5" x2="14.5" y1="16.5" y2="16.5"></line> 
                                            </g> </g> </g> </g> </g>
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
            <button className="py-2.5 rounded-sm px-14 border border-primary mt-2 text-white" onClick={
                (e) => handleViewMore(e)
            }>
                View More
            </button>
        </section>
    )
}