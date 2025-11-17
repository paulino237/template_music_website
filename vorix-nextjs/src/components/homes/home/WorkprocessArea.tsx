
import React from 'react';

const WorkprocessArea = () => {
  return (
    <>
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                
                <h2 className="mb-4">Votre expérience d’écoute</h2>
                <p className="mb-5">Découvrez des playlists, lancez la lecture en un clic,
                  ajoutez aux favoris et partagez avec vos amis. Un parcours simple pour une musique sans limites.</p>
                <a href="#" className="btn btn-primary"><span>DÉCOUVRIR</span><span>DÉCOUVRIR</span></a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">

                <div className="process-card">
                  <div className="number">1</div>
                  <div className="process-text">
                    <h4>Découvrir</h4>
                    <p className="mb-0">Parcourez les sélections et trouvez la playlist parfaite pour le moment.</p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number">2</div>
                  <div className="process-text">
                    <h4>Écouter</h4>
                    <p className="mb-0">Lancez la lecture, ajustez le volume et profitez d’un son de qualité.</p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number">3</div>
                  <div className="process-text">
                    <h4>Favoris</h4>
                    <p className="mb-0">Ajoutez vos morceaux aux favoris pour les retrouver en un instant.</p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number">4</div>
                  <div className="process-text">
                    <h4>Partager</h4>
                    <p className="mb-0">Diffusez vos playlists à vos amis et découvrez les leurs.</p>
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

export default WorkprocessArea;