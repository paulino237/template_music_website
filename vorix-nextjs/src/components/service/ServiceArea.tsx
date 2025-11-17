"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const services = [
  { icon: "queue_music", title: "Lecteur audio", description: "Écoutez vos morceaux avec un lecteur moderne et fluide." },
  { icon: "playlist_add", title: "Playlists", description: "Créez et gérez des playlists thématiques adaptées à vos envies." },
  { icon: "favorite", title: "Favoris & Partage", description: "Ajoutez en favoris et partagez facilement vos titres et playlists." },
  { icon: "library_music", title: "Découverte d’artistes", description: "Explorez de nouveaux talents et suivez vos artistes préférés." },
  { icon: "equalizer", title: "Streaming", description: "Écoute continue et stable, pensée pour les longues sessions." },
  { icon: "design_services", title: "UI/UX musical", description: "Interface soignée et immersive pour une meilleure expérience d’écoute." },
];

const ServiceArea = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <>
         <div className="service-wrapper">
      <div className="divider"></div>

      <div className="container">
         <div className="row g-4 g-lg-5">
          {services.map((item, i) => (
             <div key={i} className="col-12 col-md-6 col-xl-4">
             <Link href="/service-details">
                <div onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`service-slide-card  ${activeIndex === i ? "active" : ""}`}>
                   <span className="material-symbols-outlined">{item.icon}</span>
                   <h2 style={{ bottom: `${activeIndex === i ? '140px' : ''}` }}>{item.title}</h2>
                    <p className="mb-0" style={{ bottom: `${activeIndex === i ? '45px' : ''}` }}>
                      {item.description}
                    </p>
                </div>
             </Link>
          </div>

          ))} 

         </div>
      </div>

      <div className="divider"></div>
   </div>
    </>
  );
};

export default ServiceArea;