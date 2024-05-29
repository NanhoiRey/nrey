import data from "../../data/index.json";

export default function Studies (){
    return (

        <div className="studies" id="Studies">
            {data?.estudios?.map((item,index) => (
    
                <div className="studies-box">

                     <div className="studies-box-img">
                         <img src={item.src} alt="Placeholder" />
                      </div>

                     <p className="studies-p">
                         <b>{item.title}</b> <br />
                         {item.desc}
                    </p>

                    <button className="btn-primary2"><a href={item.link} target="blanck">Certificado</a></button>

                </div>
            )
            )}

        </div>

    )
}