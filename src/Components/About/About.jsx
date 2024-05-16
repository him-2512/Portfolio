import React from 'react'
import Info from './Info'
import Stats from './Stats'
import { FaDownload } from 'react-icons/fa'
import Resume from '../../assets/Himanshu.pdf'
import Skills from './Skills'
import './about.css'
function About() {
    return (
        <main className="section container">
            <section className="about">
                <h2 className='section-title'>
                    About <span>Me</span>
                </h2>

                <div className="about-container grid">
                    <div className="about-info">
                        <h3 className="section-subtitle">
                            Personal Info
                        </h3>

                        <ul className="info-list grid">
                            <Info />
                        </ul>
                        <a href={Resume} download='' className="button">
                            Download Resume
                            <span className="button-icon">
                                <FaDownload />
                            </span></a>
                    </div>

                    {/* <div className="stats grid">
                        <Stats />
                    </div> */}
                </div>
            </section>

            <div className="seperator"></div>

            <section className="skills">
                <h3 className="section-subtitle subtitle-center">My Skills</h3>

                <div className="skills-container grid">
                    <Skills />
                </div>
            </section>

            <div className="seperator"></div>



        </main>
    )
}

export default About
