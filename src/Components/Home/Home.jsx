import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css'


function Home() {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className='home-img' />

            <div className="home-content">
                <div className="home-data">
                    <h1 className='home-title'><span>I'm Himanshu.</span><br />
                        Web Developer</h1>
                    <p className='home-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur incidunt ipsam voluptatum repudiandae perspiciatis nulla porro optio aliquam animi! Debitis praesentium obcaecati eos fugit suscipit dolores, aliquid cum iste dicta!</p>
                    <Link to='/about' className='button'> More About Me
                        <span className='button-icon'><FaArrowRight /> </span></Link>

                </div>
            </div>

            <div className="color-block">

            </div>

        </section>
    )
}

export default Home
