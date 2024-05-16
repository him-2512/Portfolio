import React, { useState } from 'react'
import Close from '../../assets/close.svg'
import './portfolio.css'

function PortfolioItem({ img, title, details }) {

    const [modal, setModal] = useState(false);


    const toogleModal = () => {
        setModal(!modal);
    }

    return (
        <div>
            <div className="portfolio-item">
                <img className='portfolio-img' src={img} alt="" />

                <div className="portfolio-hover" onClick={toogleModal}>
                    <h3 className="portfolio-title">
                        {title}
                    </h3>
                </div>



                {modal && (
                    <div className='portfolio-modal'>
                        <div className="portfolio-modal-content">
                            <img className='modal-close' src={Close} alt="" />

                            <h3 className="modal-title">{title}</h3>

                            <ul className="modal-list-grid">
                                {details.map(({ icon, title, desc }, index) => {
                                    return (

                                        <li className="modal-item" key={index}>
                                            <span className="item-icon">
                                                {icon}
                                            </span>

                                            <div>
                                                <span className="item-title">{title}</span>
                                                <span className="item-details">{desc}</span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                            <img className='modal-img' src={img} alt="" />
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default PortfolioItem;
