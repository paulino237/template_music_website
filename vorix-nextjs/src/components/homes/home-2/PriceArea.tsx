
import React from 'react';

const PriceArea = ({style_2}: any) => {
  return (
    <>
      <div className={` price-table-wrapper ${style_2 ? "" : "bg-secondary"}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="section-heading text-center">
                <h2 className="mb-0">Abonnements musique</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <div className="row g-4 justify-content-center">


            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card">
                <div className="price-info">
                  <h6>Découverte</h6>
                  <h3 className="price">$5 <span>/mo</span></h3>
                  <p className="mb-0">Écoutez sans limites et explorez des playlists sélectionnées.</p>
                </div>

                <ul className="price-description list-unstyled">
                  <li><span className="material-symbols-outlined">check</span> Lecteur audio</li>
                  <li><span className="material-symbols-outlined">check</span> Playlists de base</li>
                  <li><span className="material-symbols-outlined">check</span> Favoris</li>
                  <li><span className="material-symbols-outlined">check</span> Partage</li>
                  <li><span className="material-symbols-outlined">check</span> Support standard</li>
                </ul>

                <div className="choose-plan">
                  <a href="#" className="btn btn-dark w-100"><span>Choisir ce plan</span><span>Choisir ce plan</span></a>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card">
                <div className="price-info">
                  <h6>Premium</h6>
                  <h3 className="price">$9 <span>/mo</span></h3>
                  <p className="mb-0">Playlists étendues, visuels HD et réglages avancés.</p>
                </div>

                <ul className="price-description list-unstyled">
                  <li><span className="material-symbols-outlined">check</span> Playlists avancées</li>
                  <li><span className="material-symbols-outlined">check</span> Visuels de pochettes HD</li>
                  <li><span className="material-symbols-outlined">check</span> Volume précis</li>
                  <li><span className="material-symbols-outlined">check</span> Mode sans interruption</li>
                  <li><span className="material-symbols-outlined">check</span> Support prioritaire</li>
                </ul>

                <div className="choose-plan">
                  <a href="#" className="btn btn-primary w-100"><span>Choisir ce plan</span><span>Choisir ce plan</span></a>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card">
                <div className="price-info">
                  <h6>Exclusive</h6>
                  <h3 className="price">$14 <span>/mo</span></h3>
                  <p className="mb-0">Téléchargement hors ligne et découvertes personnalisées.</p>
                </div>

                <ul className="price-description list-unstyled">
                  <li><span className="material-symbols-outlined">check</span> Mode hors connexion</li>
                  <li><span className="material-symbols-outlined">check</span> Découvertes personnalisées</li>
                  <li><span className="material-symbols-outlined">check</span> Partage étendu</li>
                  <li><span className="material-symbols-outlined">check</span> Sans publicité</li>
                  <li><span className="material-symbols-outlined">check</span> Support premium</li>
                </ul>

                <div className="choose-plan">
                  <a href="#" className="btn btn-dark w-100"><span>Choisir ce plan</span><span>Choisir ce plan</span></a>
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

export default PriceArea;