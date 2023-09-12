export default function ProjectCards({ projects }: { projects: any }) {
    return (
        <div>
            {
                projects.map((project:any) => {
                    return (
                        <div>
                            <h1>{project.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}