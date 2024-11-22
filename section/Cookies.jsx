import React, { useState, useEffect } from 'react';

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const handleAccept = (e) => {
        e.preventDefault(); 
        setFadeOut(true); 
    };

    useEffect(() => {
        if (fadeOut) {
            const timeout = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [fadeOut]);

    return (   
            <div id="cookit" className={fadeOut ? 'fade-out' : ''}>
                <div id="cookit-container">
                    <p className="cookit-message">
                        Este sitio web utiliza <b>cookies</b> Para garantizar que obtenga la mejor experiencia en nuestro sitio web.
                    </p>
                    <a className="cookit-link" href="#" target="_blank">Leer más</a>
                    <a className="cookit-button" href="#" onClick={handleAccept}>Aceptar</a>
                </div>
            </div>
    );
}

export default Cookies;
