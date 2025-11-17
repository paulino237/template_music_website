
import React from 'react';
import LazyImage from '@/common/LazyImage';

const AboutArea = () => {
  return (
    <>
      <div className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">

            <div className="col-12 col-md-6">
              <div className="about-us-thumbnail">
                <LazyImage src="https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Studio musique" />


                <div className="top-content">

                  <div className="clients-images">
                    <LazyImage src="https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Casque" />
                    <LazyImage src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Piano" />
                    <LazyImage src="https://images.pexels.com/photos/164696/pexels-photo-164696.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Vinyle" />
                    <LazyImage src="https://images.pexels.com/photos/164694/pexels-photo-164694.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Guitare" />
                  </div>
                  <h6 className="mb-0">2566+ Avis d’auditeurs à travers le monde</h6>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">Une expérience d’écoute de qualité</h2>
                </div>
                <p className="mb-0">Notre player met la musique au centre, avec des contrôles simples,
                  des visuels immersifs et des performances fluides. Écoutez sans interruption,
                  explorez des playlists et profitez d’un son net.</p>

                <ul className="ps-0 list-unstyled mb-0">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
                        fill="#FEFEFE" />
                    </svg>
                    Simplicité et fluidité d’utilisation</li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
                        fill="#FEFEFE" />
                    </svg>
                    Playlists et gestion des favoris</li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
                        fill="#FEFEFE" />
                    </svg>
                    Audio performant et fiable</li>
                </ul>

                <div>
                  <a href="#" className="btn btn-primary mt-1"><span>DÉCOUVRIR LE PLAYER</span><span>DÉCOUVRIR LE PLAYER</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>


        <div className="our-partners-wrapper">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-md-3">
                <h4 className="mb-0">
                  <span className="text-primary">2337+</span> {' '}
                  Labels & artistes partenaires</h4>
              </div>

              <div className="col-12 col-md-9">
                <div className="partners-slide ms-md-4 d-flex flex-wrap align-items-center justify-content-between">
                  <img src="https://dummyimage.com/120x40/1A1A1A/FEFEFE&text=Label" alt="Label" />
                  <img src="https://dummyimage.com/120x40/1A1A1A/FEFEFE&text=Music" alt="Music" />
                  <img src="https://dummyimage.com/120x40/1A1A1A/FEFEFE&text=Audio" alt="Audio" />
                  <img src="https://dummyimage.com/120x40/1A1A1A/FEFEFE&text=Beats" alt="Beats" />
                  <img src="https://dummyimage.com/120x40/1A1A1A/FEFEFE&text=Tracks" alt="Tracks" />
                  <img src="https://dummyimage.com/120x40/1A1A1A/FEFEFE&text=Waves" alt="Waves" />
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

export default AboutArea;