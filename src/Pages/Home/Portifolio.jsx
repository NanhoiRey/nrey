import data from "../../data/index.json";
import { FaArrowAltCircleUp } from "react-icons/fa";


export default function MyPortfolio () {
    return(

        <section className="portfolio-section" id="MyPortfolio">
            <div className="portfolio-container-box">
                <div className="portfolio-container">
                    <p className="sub-title">
                        Últimos proyectos
                    </p>
                    <h2 className="section-heading">
                        Mi Portfolio
                    </h2>
                </div>
            </div>

            <div className="portfolio-section-container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio-section-card">
                        <div className="portfolio-section-img">
                            <img src={item.src} alt="Placeholder" />

                            <h3 className="portfolio-section-title">
                                    {item.title}
                            </h3>
                            
                            <div className="portfolio-section-card-content">
                                <p className="text-md">
                                    {item.desc}
                                </p>
                            </div>
                            <p className="text-sm portfolio-link">
                                <button className="portfolio-button">
                                    <a href={item.link} target="_blanck"> 
                                        Acceder
                                        <FaArrowAltCircleUp  className="flecha"/>
                                    </a>
                                </button>
                            </p>
                        </div>
                    </div>
                )

                )};
            </div>

        </section>

    );

};