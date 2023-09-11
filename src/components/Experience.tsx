"use client"
import { useState } from "react";

export default function Experience () {

    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState(null);

    const experience = [
        {
            id: 1,
            company: "Circle-Dodge Systems",
            title: "Backend Developer",
            range: "Feb 2023 - Aug 2023",
            url: "https://circle-dodge.com"
        }
    ]

    return (
        <section>
            <div className="inner">
                <div role="tablist" aria-label="Job tabs" 
                // onKeyDown={e => onkeydown(e)}
                >
                {experience &&
                    experience.map(( item ) => {
                    return (
                        <button
                        key={item.id}
                        // isActive={activeTabId === i}
                        // onClick={() => setActiveTabId(i)}
                        // ref={el => (tabs.current[i] = el)}
                        // id={`tab-${i}`}
                        role="tab"
                        // tabIndex={activeTabId === i ? '0' : '-1'}
                        // aria-selected={activeTabId === i ? true : false}
                        // aria-controls={`panel-${i}`}
                        >
                        <span>{item.company}</span>
                        </button>
                    );
                    })}
            </div>

        <div>
          {experience &&
            experience.map((item) => {
              return (
                  <div
                    // id={`panel-${i}`}
                    role="tabpanel"
                    // tabIndex={activeTabId === i ? '0' : '-1'}
                    // aria-labelledby={`tab-${i}`}
                    // aria-hidden={activeTabId !== i}
                    // hidden={activeTabId !== i}
                    key={item.id}
                    >
                    <h3>
                      <span>{item.title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={item.url} className="inline-link">
                          {item.company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{item.range}</p>

                    {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
                  </div>)
            })}
        </div>
      </div>
        </section>
    )
}