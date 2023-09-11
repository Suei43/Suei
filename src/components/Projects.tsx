export default function Projects() {
    const projects = [
        {
            name: "Cloud Wave",
            id: 1,
            description: "A cloud storage service that allows users to upload and download files from anywhere in the world.",
            tech: ["React", "Node", "Express", "MongoDB", "AWS S3"],
            link: "https://cloud-wave.herokuapp.com/",
            image: 'x.png'
        },
        {
            name: "Image Vision",
            id: 2,
            description: "A cloud storage service that allows users to upload and download files from anywhere in the world.",
            tech: ["React", "Node", "Express", "MongoDB", "AWS S3"],
            link: "https://cloud-wave.herokuapp.com/",
            image: 'x.png'
        },
        {
            name: "Raphaelly Editorial",
            id: 3,
            description: "A cloud storage service that allows users to upload and download files from anywhere in the world.",
            tech: ["React", "Node", "Express", "MongoDB", "AWS S3"],
            link: "https://cloud-wave.herokuapp.com/",
            image: 'x.png'
        }
    ]
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center gap-y-10">
            <h1 className="text-2xl font-bold text-white">Here are some projects I've worked on</h1>
            <div className="w-7/12 flex flex-col gap-y-10">
                {projects.map((item) => {
                    return <div className='p-4 w-full bg-white flex flex-row-reverse' key={item.id}>
                        <div className="w-7/12 p-4 flex flex-col gap-y-3">
                            <h2 className="text-secondary font-semibold text-xl">{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}