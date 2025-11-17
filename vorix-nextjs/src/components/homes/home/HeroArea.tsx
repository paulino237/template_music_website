
import React from 'react';

const HeroArea = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-content">
                <h2 className="mb-0 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">Lecteur de Musique</h2>
                <h2 className="mb-0 d-md-flex align-items-center wow fadeInUp" data-wow-duration="1000ms"
                  data-wow-delay="800ms">
                  Moderne
                  <span className="hero-subtitle mt-3 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    Découvrez, écoutez et gérez vos morceaux favoris dans une interface élégante.
                    Playlists, contrôles avancés et visuels immersifs au même endroit.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </section>
    </>
  );
};

export default HeroArea;