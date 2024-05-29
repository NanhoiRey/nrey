import React from 'react';
import Me from '../../Assets/me.png';
import Git from '../../Assets/git.png';
import Email from '../../Assets/gmail.png';
import Linkedin from '../../Assets/in.png';


export default function HeroSection() {
  return (
    <section id='heroSection' className="hero-section">
        
        <div className="hero-section-content-box">
            <div className="hero-section-content">
                <p className="section-title">Hola! Soy <span>Nicolas</span></p>
                <h1 className="hero-section-title">
                    <span className="hero-section-title-color">
                        Full Stack
                    </span>{""}
                    <br />
                    Developer
                </h1>

                <p className="hero-section-desc">
                    Soy Programador Web y busco poder ofrecer soluciones creativas en el mundo de la informática
                </p>
            </div>
            <div className="hero-redes">
                <button className='btn btn-primary'><img src={Email} alt="" />nanhoirey94@gmail.com</button>
                <button className='btn btn-primary'><img src={Git} alt="" />GitHub</button>
                <button className='btn btn-primary'><img src={Linkedin} alt="" />LinkedIn</button>
            </div>
        </div>

        <div className="hero-section-img">
            <img src={Me} alt="" />
        </div>
        
    </section>
 
  )
}
