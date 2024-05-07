import React from 'react'
import './projectcard.css'

export default function ProjectCard({ imgUrl, name, description, btnSrc }) {
    return (
        <div className="projectCards">
            <div className="card">
                <div className='image'>
                    <img src={imgUrl} alt="" />
                </div>
                <div className="text">
                    <h4 className='text-left'>{name}</h4>
                    <div className='textarea'>
                        <p>{description}</p>
                        <button type="button" class="btn btn-secondary"><a href={btnSrc} target='_blank'>Github Link</a></button>
                    </div>
                </div>
            </div>
        </div>

    )
}