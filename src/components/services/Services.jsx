import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>  
            <BiCheck className="service__list-icon"/>
            <p>UI/UX Design For Product</p>
            </li>
            <li>  
            <BiCheck className="service__list-icon"/>
            <p>Graphic Designing</p>
            </li>
            <li>  
            <BiCheck className="service__list-icon"/>
            <p>Front End Development</p>
            </li>
           
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>  
            <BiCheck className="service__list-icon"/>
            <p>Full stack Web Development</p>
            </li>
            <li>  
            <BiCheck className="service__list-icon"/>
            <p>Backend Development</p>
            </li>
            <li>  
            <BiCheck className="service__list-icon"/>
            <p>Game Development</p>
            </li>
            <li>  
            <BiCheck className="service__list-icon"/>
            <p>Android App Development</p>
            </li>
            
          </ul>
        </article>
        {/* END OF WEBDEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Promotion</h3>
          </div>
          <ul className="service__list">
            <li>  
            <BiCheck className="service__list-icon"/>
            <p>SEO SMM</p>
            </li>
            <li>  
            <BiCheck className="service__list-icon"/>
            <p>Content Writing</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION  */}
      </div>
    </section>
  )
}

export default Services