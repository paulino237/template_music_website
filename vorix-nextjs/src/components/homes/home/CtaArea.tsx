
import React from 'react';
import LazyImage from '@/common/LazyImage';

const CtaArea = () => {
  return (
    <>
      <div className="cta-wrap jarallax" data-jarallax="" data-speed="0.6"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513863326356-0a6091e854b2?q=80&w=1600&auto=format&fit=crop)", backgroundAttachment: "fixed" }}>
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-end">
            <div className="col-12 col-sm-11 col-md-10 col-lg-7 col-xl-6 col-xxl-5">
              <div className="cta-card">

                <div className="total-clients-wrap">
                  <div className="total-number">
                    <h3>50k+</h3>
                    <p className="mb-0">Auditeurs satisfaits</p>
                  </div>


                  <div className="clients-images">
                    <LazyImage src="https://images.pexels.com/photos/159211/headphones-music-ipod-technology-159211.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Casque audio" />
                    <LazyImage src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Mix console" />
                    <LazyImage src="https://images.pexels.com/photos/164694/pexels-photo-164694.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Guitare" />
                    <LazyImage src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Vinyle" />
                  </div>
                </div>


                <div className="cta-stats">
                  <div>
                    <h2>1k+</h2>
                    <p className="mb-0">Playlists créées</p>
                  </div>

                  <div>
                    <h2>500+</h2>
                    <p className="mb-0">Artistes suivis</p>
                  </div>

                  <div>
                    <h2>10+</h2>
                    <p className="mb-0">Années d’expérience musicale</p>
                  </div>

                  <div>
                    <h2>25k+</h2>
                    <p className="mb-0">Morceaux joués</p>
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

export default CtaArea;