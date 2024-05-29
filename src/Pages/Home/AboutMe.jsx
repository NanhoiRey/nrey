import Studies from "./Studies.jsx"

export default  function AboutMe(){
    return(
        <section id="AboutMe" className="about-section"> 

            <div className="about-section-box">
                <h2 className="section-heading">Sobre Mi</h2>

                <div className="about-section-content">         

                    <div className="desc-left">
                        <p className="p-about">Egresado del Instituto de Jazz EMU en Argentina y, tras años de ejercer como profesor y sesionista migré para el mundo de la Programación. <br />
                        Desde entonces disfruto creando experiencias web para los usuarios y estudiando nuevos lenguajes de programación. </p>
                    </div>

                    <div className="desc-right">
                        <p className="p-about">
                            Actualmente continúo mis estudios de programación en la Universidad Nacional de La Plata y realizando distintas Bootcamps.
                        </p>
                    </div>
        
                </div>

                <Studies/>

            </div>


            


        </section>


    );
};


