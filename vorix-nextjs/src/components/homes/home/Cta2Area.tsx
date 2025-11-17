
import React from 'react';

const Cta2Area = () => {
  return (
    <>
      <div className="cta-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6">
              <h2 className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">Rejoignez la communauté musicale</h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="900ms">Playlists, découvertes et coups de cœur : écoutez, partagez et trouvez la musique idéale pour chaque moment.</p>
              <a href="#" className="btn btn-primary wow fadeInUp" data-wow-duration="1000ms"
                data-wow-delay="1100ms"><span>COMMENCER L’ÉCOUTE</span><span>COMMENCER L’ÉCOUTE</span></a>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default Cta2Area;