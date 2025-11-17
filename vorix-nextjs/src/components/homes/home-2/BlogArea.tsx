
import Link from 'next/link';
import React from 'react';
import LazyImage from '@/common/LazyImage';

const BlogArea = () => {
  return (
    <>
      <div className="blog-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7">
              <div className="section-heading text-center">
                <h2 className="mb-0">Actus & News musique</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <div className="row g-4">


            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card-two">
                <LazyImage src="https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Casque" />
                <div className="blog-content">
                  <div className="blog-meta d-flex align-items-center">
                    <a href="#">March 26, 24</a>
                    <div className="dot"></div>
                    <a href="#">Playlists</a>
                  </div>
                  <Link className="post-title" href="/blog-details">Les playlists parfaites pour travailler</Link>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card-two">
                <LazyImage src="https://images.pexels.com/photos/408799/pexels-photo-408799.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Guitare" />
                <div className="blog-content">
                  <div className="blog-meta d-flex align-items-center">
                    <a href="#">March 26, 24</a>
                    <div className="dot"></div>
                    <a href="#">Artistes</a>
                  </div>
                  <Link className="post-title" href="/blog-details">Nouveaux talents à suivre ce mois-ci</Link>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card-two">
                <LazyImage src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Console" />
                <div className="blog-content">
                  <div className="blog-meta d-flex align-items-center">
                    <a href="#">March 26, 24</a>
                    <div className="dot"></div>
                    <a href="#">Conseils</a>
                  </div>
                  <Link className="post-title" href="/blog-details">Améliorer votre expérience d’écoute</Link>
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

export default BlogArea;