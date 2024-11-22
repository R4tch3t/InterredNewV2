import React from 'react';

const home = () => {
    return(
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1><span className="color-gradient">interred</span> {/*or <span className="color-gradient">large</span>*/}</h1>
                            <p className="lead">Servicio de telecomunicaciones, instalación de fibra óptica y acceso a internet</p>
                            <form action='#' className="row" data-wow-delay="1.25s" id='form_sb' method="post" name="form_sb">
                                <div className="col">
                                    <div className="spacer-10"></div>
                                    <input className="form-control" id='domain_name' name='domain_name' placeholder="introduce tu número de celular" type='text' /> 
                                    <a id="btn-submit" href="https://wa.me/+527566882095" target='_blank' >
                                        <i className="arrow_right"></i>
                                    </a>
                                    <div className="clearfix"></div>
                                    <div className="spacer-10"></div>
                                    <p className="d-small">*Pide tu instalación ahora.</p>
                                    <div className="domain-ext pos-left">
                                        <div className="ext">
                                            <h4 className="id-color">40 Megas</h4>
                                            $350/mes
                                        </div>
                                        <div className="ext">
                                            <h4 className="id-color">60 Megas</h4>
                                            $550/mes
                                        </div>
                                        <div className="ext">
                                            <h4 className="id-color">100 Megas</h4>
                                            $650/mes
                                        </div>
                                        {/*<div className="ext">
                                            <h4 className="id-color">.info</h4>
                                            $3.90/year
                                        </div>
                                        <div className="ext">
                                            <h4 className="id-color">.biz</h4>
                                            $5.99/year
                                        </div>*/}
                                    </div>
                                </div>
                            </form>
                            <div className="spacer-double"></div>
                        </div>
                        <div className="col-md-6 xs-hide" >
                            <img src="./images/misc/server-2.png" className="lazy img-fluid anim-up-down" alt=""/>
                        </div>
                    </div>
                </div>
    );
}

export default home;