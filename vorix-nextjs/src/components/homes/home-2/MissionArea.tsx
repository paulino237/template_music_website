"use client" 
import React, { useEffect } from 'react';
import LazyImage from '@/common/LazyImage';

const MissionArea = () => {
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

 


  return (
    <>
      <div className="mission-vision-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">

            <div className="col-12 col-lg-6">
              <div className="mission-vision-img-container">
                <LazyImage src="https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Studio" />

                <div className="experience">
                  <h3 className="mb-0">10+</h3>
                  {/* <span>Années d’expérience musicale</span> */}
                </div>
              </div>
            </div>


            <div className="col-12 col-lg-6">
              <div className="mission-vision-content">
                <h2>La musique, simplement</h2>
                <p className="mb-4">Playlists soignées, découverte d’artistes et un lecteur audio moderne.
                  Une expérience pensée pour l’écoute fluide et la simplicité.</p>

                <div className="mission-vision-accordion">
                  <div className="accordion" id="missionVision">

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Notre mission
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show"
                        data-bs-parent="#missionVision">
                        <div className="accordion-body">
                          Offrir une écoute sans interruption, des sélections adaptées et une découverte
                          musicale agréable au quotidien.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Notre vision
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#missionVision">
                        <div className="accordion-body">
                          Une plateforme centrée sur la musique et la communauté, où l’on partage
                          ses favoris et découvre de nouveaux talents.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default MissionArea;