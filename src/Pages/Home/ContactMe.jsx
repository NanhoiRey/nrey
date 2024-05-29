import React, { useRef, useState } from 'react';
import {useForm} from "react-hook-form";

import emailjs from '@emailjs/browser';




const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) =>{
      e.preventDefault();

      emailjs
      .sendForm(
        'service_kx453bz', 
        'template_p4e18bk', 
        formRef.current, {
        publicKey: '2_9GP7_92cteO53vn',
      })
      .then(
        () => {
          e.target.reset();
          console.log('SUCCESS!');
          setDone(true);

         
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    }

  return (


    <section id="ContactMe" className="c-section"> 

                <p className="c-p">
                    Escribime
                </p>

                <h1 className="hero-section-title">
                    Contacto
                </h1>

                <div className='c'>

                    <form ref= {formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name='message'></textarea>
                        <button className='c-button'>Submit</button>
                    </form>

                </div>
    </section>        

  )
}

export default Contact