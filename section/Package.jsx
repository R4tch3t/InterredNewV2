import React, { useState } from "react";


const Package = () => {
    //switch
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
    };
    const switchClassName = isChecked ? 'switch checked' : 'switch';
    const otherElementClassName = isChecked ? 'other-element active' : 'other-element';

    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="text-center">
                            <h5 className="s2">Planes de internet</h5>
                            <h2>Escoge tu <span className="id-color">plan de internet</span> ahora</h2>
                            <div className="spacer-20"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <div className="switch-set">
                            <div>Normal</div>
                            <div>
                                {/* <input id="sw-1" className="switch" type="checkbox" /> */}
                                <input
                                  id="sw-1"
                                  className={switchClassName}
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={handleToggle}
                                />
                            </div>
                            <div>Simétrico</div>
                            <div className="spacer-20"></div>
                        </div>
                    </div>
                </div>
                <div className="row de_pricing-tables shadow-soft g-0">
                    {/* Starter Plan */}
                    <div className="col-xl-3 col-lg-6"> 
                        <div className={`de_pricing-table type-2 ${otherElementClassName}`}>
                            <div className="d-head">
                                <h3>Inicial</h3>
                                <p>Ideal para un internet de hogar.</p>
                            </div>
                            <div className="d-price">
                                <h4 className="opt-1">$300<span>/pesos</span></h4>
                                <h4 className="opt-2">$350<span>/pesos</span></h4>
                                <p className="opt-1" >Precio normal <s>$350</s></p>
                                <p className="opt-2" >Precio normal <s>$400</s></p>
                            </div>
                            <div className="d-action">
                                <a href="#" className="btn-main opt-1 w-100">Obtén tu internet normal</a>
                                <a href="#" className="btn-main opt-2 w-100">Obtén tu internet simétrico</a>
                                <p>Sólo sí pagas puntual tu mensualidad</p>
                            </div>
                            <div className="d-group">
                                <h4>Características principales</h4>
                                <ul className="d-list opt-1">
                                    <li>30 Megas de descarga</li>
                                    <li>20 Megas de subida</li>
                                </ul>
                                <ul className="d-list opt-2">
                                    <li>Internet simétrico descarga igual a subida</li>
                                    <li>40 Megas de descarga</li>
                                    <li>40 Megas de subida</li>
                                </ul>
                            </div>
                            {/*<div className="d-group">
                                <h4>Also Includes</h4>
                                <ul className="d-list">
                                    <li>Free Domain - 1 year</li>
                                    <li>Free CDN Included</li>
                                    <li>Free SSL for the 1st year</li>
                                </ul>
                            </div>*/}
                        </div>
                    </div>

                    {/* Plus Plan */}
                    <div className="col-xl-3 col-lg-6">
                        <div className={`de_pricing-table type-2 ${otherElementClassName}`}>
                            <div className="d-head">
                                <h3>Más</h3>
                                <p>Por Si necesitas un poco más velocidad de internet.</p>
                            </div>
                            <div className="d-price">
                                <h4 className="opt-1">$500<span>/pesos</span></h4>
                                <h4 className="opt-2">$550<span>/pesos</span></h4>
                                <p className="opt-1">Precio normal <s>$500</s></p>
                                <p className="opt-2">Precio normal <s>$600</s></p>
                            </div>
                            <div className="d-action">
                                <a href="#" className="btn-main opt-1 w-100">Obtén tu internet normal</a>
                                <a href="#" className="btn-main opt-2 w-100">Obtén tu internet simétrico</a>
                                <p>Sólo sí pagas puntual tu mensualidad</p>
                            </div>
                            <div className="d-group">
                                <h4>Características principales</h4>
                                <ul className="d-list opt-1">
                                    <li>50 megas de descarga</li>
                                    <li>20 megas de subida</li>
                                </ul>
                                <ul className="d-list opt-2">
                                    <li>Internet simétrico descarga igual a subida</li>
                                    <li>60 megas de descarga</li>
                                    <li>60 megas de subida</li>
                                </ul>
                            </div>
                            {/*<div className="d-group">
                                <h4>Also Includes</h4>
                                <ul className="d-list">
                                    <li>Free Domain - 1 year</li>
                                    <li>Free CDN Included</li>
                                    <li>Free SSL Certificate</li>
                                </ul>
                            </div>*/}
                        </div>
                    </div>

                    {/* Deluxe Plan */}
                    <div className="col-xl-3 col-lg-6">
                        <div className={`de_pricing-table type-2 ${otherElementClassName}`}>
                            <div className="d-recommend">Recomendado</div>
                            <div className="d-head">
                                <h3>De lujo</h3>
                                <p>Si necesitas un internet decente y de alta velocidad.</p>
                            </div>
                            <div className="d-price">
                                <h4 className="opt-1">$600<span>/pesos</span></h4>
                                <h4 className="opt-2">$650<span>/pesos</span></h4>
                                <p className="opt-1">Pago normal <s>$650</s></p>
                                <p className="opt-2">Pago normal <s>$700</s></p>
                            </div>
                            <div className="d-action">
                                <a href="#" className="btn-main opt-1 w-100">Obtén tu internet normal</a>
                                <a href="#" className="btn-main opt-2 w-100">Obtén tu internet simétrico</a>
                                <p>Sólo sí pagas puntual tu mensualidad</p>
                            </div>
                            <div className="d-group">
                                <h4>Características</h4>
                                <ul className="d-list opt-1">
                                    <li>100 megas de descarga</li>
                                    <li>30 megas de subida</li>
                                </ul>
                                <ul className="d-list opt-2">
                                    <li>Internet simétrico descarga igual a subida</li>
                                    <li>100 megas de descarga</li>
                                    <li>100 megas de subida</li>
                                </ul>
                            </div>
                            {/*<div className="d-group">
                                <h4>Also Includes</h4>
                                <ul className="d-list">
                                    <li>Free Domain - 1 year</li>
                                    <li>Free CDN Included</li>
                                    <li>Free SSL Certificate</li>
                                    <li>Free Domain Privacy</li>
                                    <li>Free Automated Backup</li>
                                </ul>
                            </div>*/}
                        </div>
                    </div>

                    {/* Ultimate Plan */}
                    <div className="col-xl-3 col-lg-6">
                        <div className={`de_pricing-table type-2 ${otherElementClassName}`}>
                            <div className="d-head">
                                <h3>Instalación</h3>
                                <p>La instalación de fibra óptica hasta tu casa.</p>
                            </div>
                            <div className="d-price">
                                <h4 className="opt-1">$1600<span>/pesos</span></h4>
                                <h4 className="opt-2">$1600<span>/pesos</span></h4>
                                <p>Precio normal <s>$2000</s></p>
                            </div>
                            <div className="d-action">
                                <a href="#" className="btn-main opt-1 w-100">Checa la cobertura</a>
                                <a href="#" className="btn-main opt-2 w-100">Checa la cobertura</a>
                                {/*<p>Puede </p>*/}
                            </div>
                            <div className="d-group">
                                <h4>Características principales</h4>
                                <ul className="d-list">
                                    <li>Rápida instalación</li>
                                    <li>Instalación profesional</li>
                                    <li>Equipo de última generación</li>
                                    <li>Soporte gratis</li>
                                    <li>Cambio de equipo gratis</li>
                                </ul>
                            </div>
                            {/*<div className="d-group">
                                <h4>Also Includes</h4>
                                <ul className="d-list">
                                    <li>Free Domain - 1 year</li>
                                    <li>Free CDN Included</li>
                                    <li>Free SSL Certificate</li>
                                    <li>Free Domain Privacy</li>
                                    <li>Free Automated Backup</li>
                                    <li>Free Dedicated IP</li>
                                </ul>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>

      
    );
};

export default Package;
