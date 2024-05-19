import React from 'react'
import { portfolio } from '../../data'
import PortfolioItem from './PortfolioItem'
import './portfolio.css'

function Portfolio() {
    return (
        <section className="portfolio section">
            <h2 className='section-title'>
                My <span>Portfolio</span>
            </h2>

            <div className="portfolio-container container grid">
                {portfolio.map((item) => {
                    return (
                        <PortfolioItem key={item.id} {...item} />
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio;
