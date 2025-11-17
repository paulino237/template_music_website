
import React from 'react';
import LazyImage from '@/common/LazyImage';

const FaqArea = ({ style_2 }: any) => {
  return (
    <>
      <div className={`faq-wrapper ${style_2 ? 'bg-secondary' : ''}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="section-heading">
                <h2 className="mb-0">Questions fréquentes</h2>
              </div>

              <div className="divider-sm"></div>


              <div className="faq-image">
                <LazyImage src="https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Casque" />


                <div className="faq-info d-flex align-items-center">
                  <h2 className="mb-0">10k+</h2>
                  {/* <p className="mb-0">Avis </p> */}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="faq-accordion ps-lg-4">
                <div className="accordion" id="faqAccordion">

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
                        Quel est notre projet pour l’avenir ?
                      </button>
                    </h2>
                    <div id="faqQuestion1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0">
                        Une plateforme centrée sur la musique, les playlists personnalisées et la découverte d’artistes.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                        Proposez-vous des contenus gratuits ?
                      </button>
                    </h2>
                    <div id="faqQuestion2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0">
                        Oui, certaines playlists et fonctionnalités sont accessibles sans abonnement.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                        Peut-on écouter hors connexion ?
                      </button>
                    </h2>
                    <div id="faqQuestion3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0">
                        Avec l’offre Exclusive, vous pouvez télécharger des morceaux pour une écoute hors ligne.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                        Comment partager des playlists ?
                      </button>
                    </h2>
                    <div id="faqQuestion4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0">
                        Le partage se fait en un clic depuis la page Playlist vers vos amis.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion5" aria-expanded="false" aria-controls="faqQuestion5">
                        Quelles sont les fonctionnalités incluses ?
                      </button>
                    </h2>
                    <div id="faqQuestion5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0">
                        Lecteur audio, favoris, playlists, contrôle du volume, partage et mode hors connexion (selon l’offre).
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

export default FaqArea;