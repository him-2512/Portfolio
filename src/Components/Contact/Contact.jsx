import React from 'react'
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css';




function Contact() {
    return (
        <section className="contact section">
            <h2 className="section-title">
                Get In <span>Touch</span>
            </h2>

            <div className="contact-container container grid">

                <div className="contact-data">
                    <h3 className="contact-title">Don't be Shy !</h3>


                    <p className='contact-desc'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas and opputunities to be part of your vision.</p>


                    <div className="contact-info">

                        <div className="info-item">
                            <FaEnvelopeOpen className="info-icon" />

                            <div>
                                <span className="info-title">Mail me</span>
                                <h4 className="info-desc">himanshusingh0909@gmail.com</h4>
                            </div>

                        </div>

                        <div className="info-item">
                            <FaPhoneSquareAlt className="info-icon" />

                            <div>
                                <span className="info-title">Call me</span>
                                <h4 className="info-desc">+91 9759186222</h4>
                            </div>

                        </div>


                    </div>

                    <div className="contact-socials">
                        <a target='__blank' href="https://www.linkedin.com/in/himanshu-478082218/" className="contact-social-link">
                            <FaLinkedin />
                        </a>

                        <a target='__blank' href="https://github.com/him-2512/Websites" className="contact-social-link">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-input-group">
                        <div className="form-input-div">
                            <input type="text" className='form-control' placeholder='Your Name' />
                        </div>


                        <div className="form-input-div">
                            <input type="email" className='form-control' placeholder='Your Email' />
                        </div>

                        <div className="form-input-div">
                            <input type="text" className='form-control' placeholder='Your Subject' />
                        </div>
                    </div>

                    <div className="form-input-div">
                        <textarea placeholder='Your Message' className="textarea form-control"></textarea>
                    </div>

                    <button className="button">
                        Send Message
                        <span className='button-icon contact-button-icon'>
                            <FiSend />
                        </span>
                    </button>

                </form>
            </div>
        </section>
    )
}

export default Contact
