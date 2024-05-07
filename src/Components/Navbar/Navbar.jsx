import React from 'react'
import './navbar.css'
import insta from '../../assets/instagram.png'
import linkdn from '../../assets/linkedin_logo_icon_187302.png'
import git from '../../assets/download.png'



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand logo me-5" href="#">Himanshu's</a>
                <button className="navbar-toggler  btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="skills">Skills</a>
                        </li> <li className="nav-item">
                            <a className="nav-link" href="projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Contact</a>
                        </li>

                    </ul>
                    <div className="socials">
                        <a href="https://www.instagram.com/himanshu_thakur2512/" target='_blank'><img className='social-icons p-1 mx-1' src={insta} alt="" /></a>
                        <a href="https://www.linkedin.com/in/himanshu-singh-478082218/" target='_blank'><img className='mx-1 social-icons p-1' src={linkdn} alt="" /></a>
                        <a href="https://github.com/him-2512/Websites" target='_blank'><img className='social-icons p-1 mx-1' src={git} alt="" /></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
