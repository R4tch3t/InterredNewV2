import React from "react";
import { useEffect } from "react";
import CountUpOnScroll from './Countmaster';
import Aos from 'aos';
import "aos/dist/aos.css";

const CounterSection = () => {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
    return (
        <>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" 
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <img className="img-fluid anim-up-down" src="../../images/misc/server.png" alt="Server" />
                        </div>
                        <div className="col-lg-6" 
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <div className="p-sm-30 pb-sm-0 mb-sm-0">
                                <h2>Instalación de internet por tan sólo  <span className="color-gradient">$1600</span></h2>
                                <p>Accede al internet más rápido ahora, con una rápida instalación.</p>
                                <div className="row">
                                    <div className="col-md-5">
                                        <ul className="ul-style-2">
                                            <li><h4>Incluye mes</h4></li>
                                            <li><h4>Mensualidades desde 300 pesos</h4></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5">
                                        <ul className="ul-style-2">
                                            <li><h4>Internet de baja latencia</h4></li>
                                            <li><h4>Internet simétrico</h4></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="spacer-half"></div>
                                <a className="btn-main" href="https://wa.me/+527566882095" target="_blank" >!Contrata ahora!</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <section className="no-bottom">
                    <div className="container">
                    <div className="row g-custom-x force-text-center">
                        <div className="col-md-3 col-sm-6 mb-sm-30">
                        <div className="de_count" 
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <h3 className="timer">
                            <CountUpOnScroll start={0} end={45} duration={3} />
                            </h3>
                            Canales de TV
                            <p className="d-small">Con más de 45 canales de televisión por cable con programación independiente en cada tv sin costo adicional.</p>
                        </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-sm-30">
                        <div className="de_count" data-aos="fade-up"
                            data-aos-delay="150"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <h3 className="timer">
                            <CountUpOnScroll start={0} end={100} duration={3} />
                            </h3>
                            Megas
                            <p className="d-small">Paquete de alta velocidad, hasta 100 megas simétricos.</p>
                        </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-sm-30">
                        <div className="de_count" data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <h3 className="timer">
                            <CountUpOnScroll start={0} end={3} duration={3} />
                            </h3>
                            Municipios
                            <p className="d-small">Es una red regional con cobertura en más ciudades.</p>
                        </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-sm-30">
                        <div className="de_count"
                            data-aos="fade-up"
                            data-aos-delay="350"
                            data-aos-duration="600"
                            data-aos-easing="ease">
                            <h3 className="timer">
                            <CountUpOnScroll start={0} end={8} duration={3} />
                            </h3>
                            Años de Experiencia
                            <p className="d-small">Con instalaciones profesionales y un equipo excelente listo para llegar a cualquier parte de la región.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
        </>
 
    );
}

export default CounterSection ;
