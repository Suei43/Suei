import Link from 'next/link'

export default function About() {
    const tech = ['Java', 'TypeScript', 'Apollo-GraphQL', 'React & Redux', 'Angular', 'Fastify', 'NodeJS & Express', 'SQL & No-SQL Databases', 'Linux shell', 'Unit & Integration Testing','Azure', 'Material UI', 'Web Sockets', 'Redis']
    return (
        <section className=" w-screen md:w-full h-fit md:h-screen flex items-center justify-center">
            <div className=" w-9/12 md:w-6/12 text-primary flex flex-col justify-center p-6 gap-y-4 text-xs md:text-md">
                <h1 className="text-3xl font-bold text-white flex flex-row justify-center items-center gap-x-4">
                    <span>About Me</span>
                    <svg 
                        fill="#8892b0" 
                        width="22" 
                        height="22" 
                        viewBox="0 -0.06 33.834 33.834" 
                        xmlns="http://www.w3.org/2000/svg" 
                        stroke="#dae6e2" 
                        stroke-width="0.33834000000000003"
                        className="social-icon"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g transform="translate(-95.748 -577)"> 
                        <path d="M110.965,592.309a2.38,2.38,0,0,1,.489-1.434,9.29,9.29,0,0,1,1.443-1.482,10.139,10.139,0,0,0,1.321-1.372,1.985,1.985,0,0,0,.368-1.2,1.956,1.956,0,0,0-1.983-2,2.073,2.073,0,0,0-1.419.543,3.575,3.575,0,0,0-.954,1.582l-2.152-.939a5.029,5.029,0,0,1,1.724-2.656,4.626,4.626,0,0,1,2.9-.927,4.968,4.968,0,0,1,2.287.531,4.168,4.168,0,0,1,1.651,1.495,3.974,3.974,0,0,1,.612,2.175,3.688,3.688,0,0,1-.538,1.965,8.8,8.8,0,0,1-1.639,1.865,13.862,13.862,0,0,0-1.358,1.322,1.536,1.536,0,0,0-.379,1,2.85,2.85,0,0,0,.1.667h-2.2A2.737,2.737,0,0,1,110.965,592.309Zm1.467,6.968a1.851,1.851,0,0,1-1.357-.543,1.831,1.831,0,0,1-.551-1.359,1.875,1.875,0,0,1,.551-1.372,1.835,1.835,0,0,1,1.357-.556,1.87,1.87,0,0,1,1.909,1.928,1.834,1.834,0,0,1-.55,1.359A1.857,1.857,0,0,1,112.432,599.277Z"></path> 
                        <path d="M97.222,610.717a1.475,1.475,0,0,1-.626-.14,1.459,1.459,0,0,1-.848-1.333V580.572A3.576,3.576,0,0,1,99.32,577h26.69a3.576,3.576,0,0,1,3.572,3.572v20.416a3.576,3.576,0,0,1-3.572,3.571H106.038a2.555,2.555,0,0,0-1.637.594l-6.24,5.22A1.467,1.467,0,0,1,97.222,610.717ZM99.32,579a1.574,1.574,0,0,0-1.572,1.572V608.11l5.37-4.491a4.561,4.561,0,0,1,2.92-1.06H126.01a1.573,1.573,0,0,0,1.572-1.571V580.572A1.574,1.574,0,0,0,126.01,579Z"></path> 
                        </g> </g>
                    </svg>
                </h1>
                <p className="text-center">
                    Hello! My name is Folarin Raphael, also known as <span className="text-secondary">Suei</span>. I am a <span className='text-white font-medium'>FullStack Software developer</span>, <span className='text-white font-medium'>Quality Assurance Tester</span> and an <span className='text-white font-medium'>Open Source Enthusiast</span>. 
                </p>
                <p className="text-center">
                    I may or may not have written my first line of code in 2019. Since then, i have explored some of the most pronounced tech niches before realizing my passion for building web applications. I have had the privilege of working with some amazing teams and companies including <Link href={''}>a startup</Link>, <Link href={''}>an agri-tech company</Link> and <Link href={''}>a non-profit organization. </Link>
                </p>
                <p className="text-center">
                    I am a self-taught developer with a strong passion for learning and bringing ideas to life. When I am not writing code, I am either binging new Netflix series or endlessly scrolling through StackOverflow.
                </p>
                <h3 className='text-secondary text-center'>Here's a list of some of the technologies I use,</h3>
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