export default function ProjectCards() {
    const projects = [
        {
            name: "Raphaelly Editorials Services",
            id: 1,
            description: "The official website for Raphaelly Editorials.",
            tech: ["JavaScript", "Tailwind CSS", "Django", "PostgreSQL", "AWS S3"],
            link: "https://raphaellyeditorial.netlify.app/",
            git: "https://github.com/Suei43/raphaellyeditorials"
        },
        {
            name: "Uchegbu Family Tree",
            id: 2,
            description: "Edit and explore your family tree.",
            tech: ["JavaScript", "D3 JS", "Mongo DB", "Node JS"],
            link: "https://uchegbu-family-tree.onrender.com/",
            git: "https://github.com/Suei43/family-tree"
        },
        {
            name: "X profile",
            id: 3,
            description: "An X(twitter) profile card list.",
            tech: ["Next JS", "React", "FireBase", "PostgreSQL"],
            link: "https://x.hellofaizan.me/",
            git: "https://github.com/hellofaizan/xprofile"
        },
        {
            name: "Studera AI",
            id: 4,
            description: "A personalized exam preparation platform",
            tech: ["Angular", "Redis", "TypeScript", "MongoDB"],
            link: "https://studera.onrender.com",
            git: "https://github.com/Suei43/studera-AI"
        },
        {
            name: "My Portfolio v1",
            id: 5,
            description: "First version of my portfolio website",
            tech: ["TypeScript", "Next JS", "Tailwind CSS"],
            link: "https://suei.onrender.com",
            git: "https://github.com/Suei43/Suei"
        },
    ]

    return (
        <section className="w-full p-6 flex flex-row flex-wrap items-center justify-center gap-y-10 gap-x-10">
            {
                projects.map((project:any) => {
                    return (
                        <div className="w-60 h-60 h-fit border-2 rounded-lg border-primary p-4 box-border flex flex-col gap-y-4 proj-card">
                            <div className="flex flex-row items-center justify-end gap-x-3 w-full">
                                    <a href={project.git}>
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
                                    <a href={project.link}>
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
                            <h1>{project.name}</h1>
                            <p className="text-primary text-xs">{project.description}</p>
                            <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 justify-start">
                                    {project.tech.map((i:string) => {
                                        return (
                                            <p className="border text-primary cursor-pointer border-primary py-1 px-3 text-xs">{i}</p>
                                        )
                                    })}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}