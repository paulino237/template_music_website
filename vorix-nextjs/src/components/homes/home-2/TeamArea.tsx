
import Link from 'next/link';
import React from 'react';
import LazyImage from '@/common/LazyImage';

const TeamArea = () => {
  return (
    <>
      <div className="team-member-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <div className="section-heading">
                <h2 className="mb-4">Artistes & Éditeurs</h2>
                <Link href="/team" className="btn-link">VOIR TOUS LES MEMBRES <svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L16.2 7.8M17 17V7H7" stroke="#6D28D9" strokeWidth="2" strokeLinecap="square" />
                </svg></Link>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="row g-4">


                <div className="col-12 col-sm-6">
                  <Link href="/team-details">
                    <div className="team-card">
                      <LazyImage src="https://images.pexels.com/photos/164694/pexels-photo-164694.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Guitare" />

                      <div className="team-info">
                        <h4>Daniyel Karlos</h4>
                        <p className="mb-0">Artiste</p>
                      </div>
                    </div>
                  </Link>
                </div>


                <div className="col-12 col-sm-6">
                  <Link href="/team-details">
                    <div className="team-card">
                      <LazyImage src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Chanteur" />

                      <div className="team-info">
                        <h4>Reece Bronson</h4>
                        <p className="mb-0">Curateur</p>
                      </div>
                    </div>
                  </Link>
                </div>


                <div className="col-12 col-sm-6">
                  <Link href="/team-details">
                    <div className="team-card">
                      <LazyImage src="https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Casque" />

                      <div className="team-info">
                        <h4>Steve Liddle</h4>
                        <p className="mb-0">DJ</p>
                      </div>
                    </div>
                  </Link>
                </div>


                <div className="col-12 col-sm-6">
                  <Link href="/team-details">
                    <div className="team-card">
                      <LazyImage src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Console" />

                      <div className="team-info">
                        <h4>Ryan Williams</h4>
                        <p className="mb-0">Éditeur</p>
                      </div>
                    </div>
                  </Link>
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

export default TeamArea;