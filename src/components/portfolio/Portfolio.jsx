import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/classesforgermanlanguage.in.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title:'React Portfolio Website | Prateeksahu.me',
    github:'https://github.com/prateeksahu-me/React-Portfolio-Website-1',
    demo: 'https://prateeksahu.me'
  },
  {
    id:2,
    image: IMG2,
    title:'Classes for German Language | German courses',
    github:'#',
    demo: 'https://www.classesforgermanlanguage.in/'
  }
  
  
]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title}></img>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>  
          </article>
          )
          })
        }
      
      </div>
    </section>
  )
}

export default Portfolio