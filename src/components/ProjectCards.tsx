export default function ProjectCards({ projects, className }: { projects?: any, className?: string }) {
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