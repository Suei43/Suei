"use client"

export default function Intro(){

    const handleResumeClick = () => {}

    return (
        <div className="md:absolute bottom-0 left-16 p-20 h-4/6 flex flex-col gap-y-4 w-10/12 text-primary box-border">
            <h1 className="text-4xl md:text-7xl text-white font-black ">Folarin Raphael.</h1>
            <h2 className="text-secondary text-sm md:text-md">SOFTWARE DEVELOPER && QA TESTER</h2>
            <p className="w-8/12 text-xs md:text-md">I excel at creating software solutions that prioritize user-eccentric digital experiences. <span className="md:block hidden">Additionally, I have a talent for diagnosing and improving systems.</span></p>
            <div className="relative w-fit h-fit mt-5 rounded-lg">
                <button onClick={handleResumeClick} className="text-secondary border-2 border-secondary rounded-md py-3 w-40 main-btn text-xs md:text-md">
                    Résumé
                </button>
            </div>
        </div>
    )
}