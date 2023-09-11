export default function About() {
    const tech = ['JavaScript', 'Apollo-GraphQL', 'React & Redux', 'Fastify', 'NodeJS & Express', 'SQL & No-SQL']
    return (
        <section className="w-full h-screen flex items-center justify-center">
            <div className="w-6/12 text-primary flex flex-col justify-center p-6 gap-y-4">
                <p className="">I guess if youre reading this, you want to know more about me. Well, I'm a software engineer and quality assurance tester. I build accessible, inclusive digital products and create eccentric, unique and captivating web experiences.</p>
                <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 justify-center">
                        {tech.map((item, index) => {
                            return (
                                <p className="border text-white cursor-pointer border-primary py-1 px-3 text-xs">{item}</p>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}