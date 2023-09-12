"use client"
import { useState } from "react";

export default function Experience () {
    const [active, setActive] = useState(1);

    const experience = [
        {
            id: 1,
            company: "Circle-Dodge Systems",
            title: "Back-end Developer",
            range: "Feb 2023 - Aug 2023",
            url: "https://circle-dodge.com",
            btn: 1,
            description: [
              "Worked collaboratively with a team to devlop the backend infastructure for a restaurant management system",
              "Code review and testing",
              "Implemented SOLID principles to ensure code quality and maintainability"
            ]
        },
        {
          id: 2,
          company: "Oluadepe Farms Ltd",
          title: "Software Tester Intern",
          range: "Feb 2023 - Aug 2023",
          url: "https://circle-dodge.com",
          btn: 2,
          description: [
            "Tested and ensured efficient code quality and maintainability",
            "Promoted Test Driven Development (TDD) and pair programming",
          ]
      },
      {
        id: 3,
        company: "A2SV Hackathon Finalist",
        title: "Backend Developer",
        range: "Feb 2023 - Aug 2023",
        url: "https://circle-dodge.com",
        btn: 3,
        description: [
          "Led a team of 4 to develop an application that assists students in exam preparation",
          "Pitched the idea to a panel of judges and investors"
        ]
      },
    ]

    return (
        <section className="w-full min-h-screen flex flex-col gap-20 items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-white flex flex-row gap-x-3 items-center">
            <span>My Experience</span>
            <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" stroke="#8892b0" stroke-width="1.32" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
          </h1>
            <main className="w-9/12 flex flex-row justify-center items-center gap-x-10 text-primary">
              <div className="flex flex-col gap-y-10">
                {experience.map((item) => {
                  return (
                    <button key={item.id} className={`w-4 h-4 border border-primary kite ${ active === item.id && 'bg-primary' }`}>
                    </button>
                  )
                })}
              </div>
              <div>
                {experience.map((item) => {
                  return(
                    <div key={item.id} className={`border border-primary p-4 relative flex flex-col gap-y-3 ${active === item.id ? 'block' : 'hidden'}`}>
                      <h1 className="text-secondary text-xl font-semibold">{item.title}</h1>
                      <h3 className="text-sm">{item.company}</h3>
                      <p className="absolute right-4 top-4 text-sm">{item.range.toUpperCase()}</p>
                      { item.description.map((i) => {
                        return (
                          <p className="text-sm">{i}</p>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </main>
        </section>
    )
}