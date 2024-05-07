import React from 'react'
import ProjectCard from '../ProjecCard/ProjectCard'

import cafe from '../../assets/projects/cafe.png'
import myntra from '../../assets/projects/myntra.png'
import page from '../../assets/projects/page.png'
import page2 from '../../assets/projects/page2.png'
import ttt from '../../assets/projects/ttt.png'
import weather from '../../assets/projects/weather.png'
import gemini from '../../assets/projects/gemini.png'
import chatgpt from '../../assets/projects/chtgpt.png'
import yt from '../../assets/projects/youtube.png'

import './projects.css'
function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className="cards">
                <ProjectCard imgUrl={gemini} name='geminiAI' description='This is a GeminiAI clone made using ReactJS.' btnSrc="https://github.com/him-2512/Websites/tree/main/React%20JS/GeminiApp" />
                <ProjectCard imgUrl={chatgpt} name='chatgpt ai clone' description='This is a ChatGPT clone made using ReactJS.' btnSrc="https://github.com/him-2512/Websites/tree/main/React%20JS/ChatGPT" />
                <ProjectCard imgUrl={yt} name='youtube clone' description='This is a YouTube clone made using ReactJS.' btnSrc="https://github.com/him-2512/Websites/tree/main/React%20JS/Youtube" />
                <ProjectCard imgUrl={myntra} name='MYNTRA clone' description='This is a Myntra clone made using html, css, Javascript.' btnSrc="https://github.com/him-2512/Websites/tree/main/Websites%20design/Cafe" />
                <ProjectCard imgUrl={ttt} name='tic tac toe game' description='This is a Tic Tac Toe Game clone made using ReactJS.' btnSrc="https://github.com/him-2512/Websites/tree/main/React%20JS/Tic%20Tac%20Toe" />
                <ProjectCard imgUrl={weather} name='weather app' description='This is a Weather App made using html, css, Javascript.' btnSrc="https://github.com/him-2512/Websites/tree/main/Websites%20design/Cafe" />
                <ProjectCard imgUrl={page} name='landing page' description='This is a Myntra clone made using html, css.' btnSrc="https://github.com/him-2512/Websites/tree/main/Websites%20design/Cafe" />
                <ProjectCard imgUrl={page2} name='landing page' description='This is a Myntra clone made using html, css.' btnSrc="https://github.com/him-2512/Websites/tree/main/Websites%20design/Cafe" />


            </div>
        </div>
    )
}

export default Projects
