import React, { useEffect, useState } from 'react'
import './home.css'
import banner from '../../assets/header-img.svg'

function Home() {
    const openResume = () => {
        const path = '../../../Resume.pdf';
        window.open(path, '_blank');
    };

    const [loopNo, setLoopNo] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "UX/UI Designer", "JAVA Developer"];
    const [text, setText] = useState(' ');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text, delta])

    const tick = () => {
        let i = loopNo % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);


        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNo(loopNo + 1);
            setDelta(500);

        }
    }
    return (
        <div className='main'>
            <div className="banner">
                <div className='text-area'>
                    <h1>Hi! I am Himanshu,</h1>
                    <h1>{text}</h1>
                    <p > I have discovered a genuine passion for development, finding that my current skill
                        set equips me to be a valuable asset in these domains. I thrive in collaborative
                        environments, enjoying the camaraderie of like-minded individuals and
                        contributing as a dedicated team player. Recognizing that the challenges inherent
                        in this position can be substantial, I am confident that with the support of an
                        expert team, I can confidently tackle them head-on.<br></br>
                        Additionally, I have qualified GATE 2024 and I am committed to continuous growth
                        and excellence in my field</p>

                    <button type="button" className="btn btn-dark mx-4 my-2 p-2.5 ms-0">Let's Connect <i className="ri-arrow-right-circle-line"></i></button>
                    <button type="button lower" className="btn btn-dark mx-4 my-2 p-2.5 ms-0" onClick={openResume}>My Resume <i className="ri-arrow-right-circle-line"></i></button>
                </div>
                <div className='banner-img'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home