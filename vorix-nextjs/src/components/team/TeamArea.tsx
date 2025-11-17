
import Link from 'next/link';
import React from 'react';

const TeamArea = () => {
  return (
    <>
      <div className="team-member-wrap">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-lg-5">


            <div className="col-12 col-sm-6 col-lg-4">
              <Link href="/team-details">
                <div className="team-card">
                  <div className="avatar-icon"><span className="material-symbols-outlined">person</span></div>
                  <div className="team-info">
                    <h4>MIGUEL FOSSO</h4>
                    <p className="mb-0">LEAD DEVELOPER EXPERT</p>
                  </div>
                </div>
              </Link>
            </div>


            <div className="col-12 col-sm-6 col-lg-4">
              <Link href="/team-details">
                <div className="team-card">
                  <div className="avatar-icon"><span className="material-symbols-outlined">mic</span></div>
                  <div className="team-info">
                    <h4>Reece Bronson</h4>
                    <p className="mb-0">Curateur</p>
                  </div>
                </div>
              </Link>
            </div>


            <div className="col-12 col-sm-6 col-lg-4">
              <Link href="/team-details">
                <div className="team-card">
                  <div className="avatar-icon"><span className="material-symbols-outlined">headphones</span></div>
                  <div className="team-info">
                    <h4>Steve Liddle</h4>
                    <p className="mb-0">DJ</p>
                  </div>
                </div>
              </Link>
            </div>


            <div className="col-12 col-sm-6 col-lg-4">
              <Link href="/team-details">
                <div className="team-card">
                  <div className="avatar-icon"><span className="material-symbols-outlined">tune</span></div>
                  <div className="team-info">
                    <h4>Ryan Williams</h4>
                    <p className="mb-0">Éditeur</p>
                  </div>
                </div>
              </Link>
            </div>


            <div className="col-12 col-sm-6 col-lg-4">
              <Link href="/team-details">
                <div className="team-card">
                  <div className="avatar-icon"><span className="material-symbols-outlined">music_note</span></div>
                  <div className="team-info">
                    <h4>Steven A. Urenda</h4>
                    <p className="mb-0">Artiste</p>
                  </div>
                </div>
              </Link>
            </div>


            <div className="col-12 col-sm-6 col-lg-4">
              <Link href="/team-details">
                <div className="team-card">
                  <div className="avatar-icon"><span className="material-symbols-outlined">guitar</span></div>
                  <div className="team-info">
                    <h4>Jhone Mathus</h4>
                    <p className="mb-0">Guitare</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default TeamArea;