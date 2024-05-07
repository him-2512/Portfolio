import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import insta from '../../assets/instagram.png'
import linkdn from '../../assets/linkedin_logo_icon_187302.png'
import git from '../../assets/download.png'
import './contact.css'

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_07nuggo', 'template_9ba1nqa', form.current, {
                publicKey: 'fQTt-MbW4HyFU1UR6x',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='contact'>
            <h1>Contact Me</h1>
            <span>Please fill out the form below to discuss any work opputunity</span>
            <form ref={form} onSubmit={sendEmail} className='contactForm'>
                <input type="text" className='name' placeholder='Your Name' name='your_name' />
                <input type="email" className='email' placeholder='Your Email' name='your_email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button className="btn btn-primary submitBtn" type='submit' value='Send'>Submit</button>

            </form>
            <div className="socials">
                <a href="https://www.instagram.com/himanshu_thakur2512/" target='_blank'><img className='social-icons p-1 mx-1' src={insta} alt="" /></a>
                <a href="https://www.linkedin.com/in/himanshu-singh-478082218/" target='_blank'><img className='mx-1 social-icons p-1' src={linkdn} alt="" /></a>
                <a href="https://github.com/him-2512/Websites" target='_blank'><img className='social-icons p-1 mx-1' src={git} alt="" /></a>
            </div>
        </div>
    )
}

export default Contact
