
import React from 'react';
import LazyImage from '@/common/LazyImage';

const AwardsArea = () => {
  return (
    <>
      <div className="awards-honors-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7">
              <div className="section-heading">
                <h2 className="mb-0">Récompenses &amp; Distinctions musicales</h2>
              </div>
            </div>
          </div>

          <div className="divider-sm"></div>

          <div className="award-card-container">

            <div className="award-card">
              <div className="award-name-description">
                <h3>Meilleure Playlist Chill</h3>
                <p>Distinction pour la qualité des sélections et l’expérience d’écoute.</p>
              </div>
              <div className="award-image">
                <LazyImage src="https://images.pexels.com/photos/169789/pexels-photo-169789.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Trophée musique" />
              </div>
              <div className="awarded-year">
                <h2>2024</h2>
              </div>
            </div>


            <div className="award-card">
              <div className="award-name-description">
                <h3>Prix de la Communauté</h3>
                <p>Récompense basée sur les avis des auditeurs et l’engagement.</p>
              </div>
              <div className="award-image">
                <LazyImage src="https://images.pexels.com/photos/204611/pexels-photo-204611.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Scène" />
              </div>
              <div className="awarded-year">
                <h2>2022</h2>
              </div>
            </div>


            <div className="award-card">
              <div className="award-name-description">
                <h3>Innovation Audio</h3>
                <p>Reconnaissance pour les contrôles intuitifs et les visuels immersifs.</p>
              </div>
              <div className="award-image">
                <LazyImage src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Console" />
              </div>
              <div className="awarded-year">
                <h2>2020</h2>
              </div>
            </div>


            <div className="award-card">
              <div className="award-name-description">
                <h3>Éditeur de l’année</h3>
                <p>Distinction pour la curation de playlists et la découverte d’artistes.</p>
              </div>
              <div className="award-image">
                <LazyImage src="https://images.pexels.com/photos/159211/headphones-music-ipod-technology-159211.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Casque" />
              </div>
              <div className="awarded-year">
                <h2>2018</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default AwardsArea;