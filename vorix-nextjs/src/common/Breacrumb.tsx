
import Link from 'next/link';
import { title } from 'node:process';
import React from 'react';

const Breacrumb = ({title, subtitle}: any) => {
  return (
    <>
         <div className="breadcrumb-wrapper bg-img jarallax bg-overlay" data-jarallax="" data-speed="0.6"
      style={{backgroundImage: "url(https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg)", backgroundAttachment: "fixed"}}>
      <div className="container h-100">
         <div className="breadcrumb-content h-100">
            <h2 className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">{title}</h2>
            <ul className="list-unstyled wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1000ms">
               <li><Link href="/">Accueil</Link></li>
               <li>{subtitle}</li>
            </ul>
         </div>
      </div>
   </div>
    </>
  );
};

export default Breacrumb;