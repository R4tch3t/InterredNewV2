import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Topbar from '../layout/Topbar';
import Navbar from '../layout/Navbar';
import Hometop from '../section/Home';
import Cookies from '../section/Cookies';
import Footer from '../section/Footer';
import Counter from '../section/Counter';
import Package from '../section/Package';
import Manage from '../section/Manage';
import Server from '../section/Server';
import Refund from '../section/Refund';
import Question from '../section/Question';
import Logo from '../section/Logo';
import Testimonial from '../section/Testimonial';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="./images/background/1.jpg";

const GlobalStyles = createGlobalStyle`
  
`;

export default function Home() {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 1500)
      }
    }, []);

  /* elements div for loader */
  const divs = Array.from({ length: 8 });

  return (
    <>
    <Head>
      <title>interred - Servicio de telecomunicaciones</title>
    </Head>

    <GlobalStyles/>

    {/* loader */}
    <div id='mainpreloader'>
        <div id="de-loader" className="fadeOut">
          <div className="lds-roller">
            {divs.map((_, index) => (
            <div key={index} />
            ))}
          </div>
        </div>
    </div>

    {/* menu */}
    <div className="maincontent">
      <header id="header-wrap">
        <Topbar/>
        <Navbar />
      </header>

      {/* home */}
      <section id="home" className="p-0">
        <Parallax bgImage={image1} strength={300}>  
          <Hometop/>
        </Parallax>
      </section>

     {/* counter */}
     <section id="counter" className="no-top">
       <Counter/>
     </section>

     {/* package */}
     <section id="section-pricing" className="p-0">
      <Parallax bgImage={image1} strength={50}>  
        <Package/>
      </Parallax>
     </section>

     {/* manage 
     <section id="manage" className="no-bottom">
       <Manage/>
     </section>
     */}

     {/* server 
     <section id="server" className="no-bottom">
      <Parallax bgImage={image1} strength={50}>  
        <Server/>
       </Parallax>
     </section>
     */}
     
      {/* testimonial 
      <section id="testimonial" className="p-0">
       <Testimonial/>
     </section>
      */}

     {/* refund 
     <section id="refund" className="p-0">
       <Refund/>
     </section>
     */}


      {/* question 
      <section id="question">
       <Question/>
     </section>
     */}

     {/* logos 
     <section id="logos" className="no-top">
       <Logo/>
     </section>
     */}
     

      {/* footer */}
      <section id="footer" className="p-0">
        <Footer/>
      </section>

      <Cookies/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}
