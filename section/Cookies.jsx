import React, { useState, useEffect } from 'react';
import CookiesJS from 'js-cookie';

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    
    const handleAccept = (e) => {
        e.preventDefault(); 
        CookiesJS.set('Accepted', 'true');
        setFadeOut(true); 
    };

    useEffect(() => {
        if (fadeOut) {
            const timeout = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [fadeOut]);
    
    useEffect(()=>{
        setIsVisible(CookiesJS.get('Accepted') !== "true")
    },[])
    
    return (<>   
            <div id="cookit" className={fadeOut ? 'fade-out' : ''} style={isVisible?{}:{'display':'none'}} >                
                <div id="cookit-container">
                    <p className="cookit-message">
                        Este sitio web utiliza <b>cookies</b> Para garantizar que obtenga la mejor experiencia en nuestro sitio web.
                    </p>
                    <a className="cookit-link" href="#" target="_blank">Leer más</a>
                    <a className="cookit-button" href="#" onClick={handleAccept}>Aceptar</a>
                </div>
            
            </div>
            </>
    );
}

export default Cookies;
