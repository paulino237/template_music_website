
import React from 'react';
import LazyImage from '@/common/LazyImage';

const HeroArea = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-8 col-xl-9">
              <div className="hero-content home2">
                <h2 className="mb-0 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">Lecteur de musique moderne</h2>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-4 col-xl-3">
              <div className="hero-content home2">
                <div className="d-flex align-items-center gap-3 wow fadeInUp" data-wow-duration="1000ms"
                  data-wow-delay="900ms">
                  <div className="imgs-group">
                    <LazyImage src="https://images.pexels.com/photos/164716/pexels-photo-164716.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Vinyle" />
                    <LazyImage src="https://images.pexels.com/photos/159211/headphones-music-ipod-technology-159211.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Casque" />
                    <div><span className="counter">10</span>k</div>
                  </div>
                  <h6 className="mb-0">Plus de 10k+ <br />
                    auditeurs conquis</h6>
                </div>
                <p className="my-5 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1100ms">Écoutez, découvrez et partagez vos morceaux favoris.
                  Des playlists soignées et un player fluide pour chaque moment.</p>
                <a href="#" className="btn btn-primary wow fadeInUp" data-wow-duration="1000ms"
                  data-wow-delay="1200ms"><span>COMMENCER L’ÉCOUTE</span><span>COMMENCER L’ÉCOUTE</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="divider"></div>
      </section>
    </>
  );
};

export default HeroArea;