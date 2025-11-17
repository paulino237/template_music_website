"use client"
import React from 'react';

import { useState } from 'react';
const TeamDetailsArea = () => {
  const [bioExpanded, setBioExpanded] = useState(false);
  return (
    <>
      <div className="team-member-details">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-12 col-lg-6">
              <div className="team-details-img pe-xl-5">
                <img src="https://myportfolio-tan-zeta.vercel.app/images/projects/pp-2.png" alt="MIGUEL FOSSO" />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="team-details-content">
                <h2 className="team-member-title mb-3">MIGUEL FOSSO</h2>
                <p className="h5 mb-4 font-normal">LEAD DEVELOPER EXPERT</p>

                <div className={bioExpanded ? "bio-expanded" : "bio-collapsed"}>
                  <p className="mb-4">Développeur Full Stack passionné avec plus de 4 ans d'expérience, je conçois et
                    développe des applications web, mobiles et backend robustes, performantes et bien structurées. Mes
                    principales compétences incluent Flutter pour le développement mobile et web, .NET (ASP.NET Core)
                    pour les services backend, React.js pour les interfaces web dynamiques et Node.js pour les API
                    rapides, légères et modulaires.</p>
                  <p className="mb-4">J'ai eu l'occasion de travailler sur un large éventail de projets : applications
                    médicales sécurisées, systèmes de réservation, plateformes éducatives, CRM, places de marché et
                    tableaux de bord d'administration. Ces expériences m'ont permis de maîtriser l'architecture propre,
                    la gestion sécurisée des utilisateurs (authentification, autorisation), l'intégration de services
                    externes (CinetPay, Stripe, Firebase) et le déploiement sur des serveurs VPS à l'aide de NGINX,
                    Docker ou PM2.</p>
                  <p className="mb-4">Je privilégie toujours la qualité du code, la maintenabilité et l'expérience
                    utilisateur. Je suis à l'aise aussi bien sur le front-end (interface utilisateur réactive,
                    interactions fluides) que sur le back-end (logique métier, bases de données SQL/NoSQL, API REST
                    sécurisées). J'utilise des outils modernes tels que Git, GitHub, Prisma, EF Core, Postman, Swagger
                    et CI/CD pour automatiser et garantir des livraisons fiables. Mon approche est axée sur les
                    solutions : je m'implique dans la compréhension des besoins commerciaux, la conception technique, le
                    développement, les tests, la documentation et le déploiement final.</p>
                </div>
                <button className="btn btn-link p-0" onClick={() => setBioExpanded(!bioExpanded)} aria-expanded={bioExpanded}>
                  {bioExpanded ? "Voir moins" : "Voir plus"}
                </button>

                <div className="mt-3">
                  <a href="https://myportfolio-tan-zeta.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">
                    <span>PORTFOLIO</span><span>PORTFOLIO</span>
                  </a>
                </div>

                {/* <h5 className="font-semibold"><a href="https://myportfolio-tan-zeta.vercel.app/" target="_blank" rel="noreferrer">Portfolio personnel</a></h5> */}
                <h5 className="font-semibold">Yaoundé, Cameroun</h5>


                <div className="social-nav">
                  <a href="https://www.facebook.com/me/" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-facebook" viewBox="0 0 16 16">
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/miguel-fosso/" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  <a href="https://github.com/paulino237" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>


      <div className="team-member-skill-wrap">

        <div className="container">

          <div className="team-progress-bar">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>


          <div className="team-skill-wrap">
            <div className="row g-4 g-xl-5">


              <div className="col-12 col-md-6 col-lg-4">
                <div className="team-skill-card">
                  <p className="date">Septembre 2025 - Présent</p>
                  <h4 className="mb-1">Lead Developer</h4>
                  <p className="mb-0 institution">Escrutin, Cameroun</p>
                </div>
              </div>


              <div className="col-12 col-md-6 col-lg-4">
                <div className="team-skill-card">
                  <p className="date">Janvier 2025 - Septembre 2025</p>
                  <h4 className="mb-1">Développeur Web et Mobile</h4>
                  <p className="mb-0 institution">Sosan, Cameroun</p>
                </div>
              </div>


              <div className="col-12 col-md-6 col-lg-4">
                <div className="team-skill-card">
                  <p className="date">Décembre 2021 - Novembre 2024</p>
                  <h4 className="mb-1">Développeur Web et Mobile</h4>
                  <p className="mb-0 institution">Niovar Technologies, Québec, Canada</p>
                </div>
              </div>


              

            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>


      <div className="contact-form-wrap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="contact-form bg-secondary m-0 mt-0">
                <div className="section-heading text-center">
                  <h2>Have Questions? <br />Contact us!</h2>
                </div>

                <div className="divider-sm"></div>


                <form onClick={(e) => e.preventDefault()}>
                  <div className="row g-4 g-xl-5">
                    <div className="col-12 col-lg-6">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input type="email" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input type="text" className="form-control" placeholder="Your Phone" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <select className="form-control">
                        <option value="">Select Subject</option>
                        <option value="">Help &amp; Support</option>
                        <option value="">Features Inquiry</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows={20} cols={30}
                        placeholder="Type your message"></textarea>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary rounded-pill"><span>SEND
                          MESSAGE</span><span>SEND MESSAGE</span></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default TeamDetailsArea;