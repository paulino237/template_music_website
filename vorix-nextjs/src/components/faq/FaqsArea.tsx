
import React from 'react';

const FaqsArea = () => {
  return (
    <>
      <div className="faq-page-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="faq-accordion service-details-faq">
                <div className="accordion" id="faqAccordion">

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
                        Quelle est votre vision pour l’avenir de MPlayer ?
                      </button>
                    </h2>
                    <div id="faqQuestion1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Offrir une expérience d’écoute fluide et immersive : un lecteur moderne, des playlists
                        soignées, et une découverte d’artistes centrée sur la communauté.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                        Proposez‑vous des ressources gratuites ?
                      </button>
                    </h2>
                    <div id="faqQuestion2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Oui. Des playlists publiques, articles, et conseils d’écoute sont disponibles gratuitement.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                        Aidez‑vous à trouver des partenaires ou labels ?
                      </button>
                    </h2>
                    <div id="faqQuestion3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Nous collaborons avec des artistes et labels. Contactez‑nous pour étudier les opportunités.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                        Offrez‑vous un accompagnement promotionnel ?
                      </button>
                    </h2>
                    <div id="faqQuestion4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Nous partageons les coups de cœur, publions des contenus et relayons les nouveautés.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion5" aria-expanded="false" aria-controls="faqQuestion5">
                        Quels services proposez‑vous ?
                      </button>
                    </h2>
                    <div id="faqQuestion5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Lecteur audio moderne, playlists thématiques, favoris, partage, découverte d’artistes et
                        contenus éditoriaux.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-8">
              <div className="section-heading text-center">
                <h2>Encore des questions ?</h2>
                <p>Besoin d’un conseil d’écoute ou d’une suggestion ? Parlons‑en.</p>
                <a href="/contact" className="btn btn-primary mt-5"><span>CONTACT</span><span>CONTACT</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default FaqsArea;