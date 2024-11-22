import React from 'react';
import Link from 'next/link';

const Topbar = () => {
    return(
        <div id="topbar">
            <div className="container">
                <div className="topbar-left xs-hide">
                    <span className="topbar-widget">
                        <a href="https://wa.me/+527566882095" target="_blank" >¡Obten tu orden de instalación y obten acceso a internet ahora!</a>
                    </span>
                </div>
            
                <div className="topbar-right">
                    <div className="topbar-widget">
                        <Link href="/#"><i className="fa fa-phone"></i>+52 756 688 2095</Link>
                    </div>
                    <div className="topbar-widget">
                        <Link href="/#"><i className="fa fa-envelope"></i>interredtelecom@gmail.com</Link>
                    </div>
                </div>  
                <div className="clearfix"></div>
            </div>
        </div>
    );
}

export default Topbar;