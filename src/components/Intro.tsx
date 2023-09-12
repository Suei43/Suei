"use client"

export default function Intro(){

    const handleResumeClick = () => {}

    return (
        <div className="absolute bottom-0 left-16 p-20 h-4/6 flex flex-col gap-y-4 w-10/12 text-primary">
            <h1 className="text-7xl text-white font-black ">Folarin Raphael.</h1>
            <h2 className="text-secondary">SOFTWARE DEVELOPER && QA TESTER</h2>
            <p className="w-8/12">I excel at creating software solutions that prioritize user-eccentric digital experiences. Additionally, I have a talent for diagnosing and improving systems.</p>
            <div className="relative w-fit h-fit mt-5 rounded-lg">
                <button onClick={handleResumeClick} className="text-secondary border-2 border-secondary rounded-md py-3 w-40 main-btn">
                    Résumé
                </button>
            </div>
        </div>
    )
}