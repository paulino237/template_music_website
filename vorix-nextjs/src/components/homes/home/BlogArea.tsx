
import Link from 'next/link';
import React from 'react';
import LazyImage from '@/common/LazyImage';

const BlogArea = () => {
  return (
    <>
      <div className="blog-wrapper">
      <div className="divider"></div>

      <div className="container">
         <div className="row">
            <div className="col-12">
               <div className="section-heading d-md-flex align-items-end justify-content-between">
                  <h2 className="mb-4 mb-md-0">Actus & News musique</h2>
                  <a href="#" className="btn btn-primary"><span>TOUS LES ARTICLES</span><span>TOUS LES ARTICLES</span></a>
               </div>
            </div>
         </div>
      </div>

      <div className="divider-sm"></div>

      <div className="container">
         <div className="row g-4">

             
            <div className="col-12 col-md-6 col-lg-4">
               <div className="blog-card">
                  <LazyImage src="https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Casque" />
                  <div className="blog-meta d-flex align-items-center">
                     <a href="#">March 26, 24</a>
                     <div className="dot"></div>
                     <a href="#">Playlists</a>
                  </div>
                  <Link className="post-title" href="/blog-details">Les meilleures playlists pour travailler</Link>
               </div>
            </div>

             
            <div className="col-12 col-md-6 col-lg-4">
               <div className="blog-card">
                  <LazyImage src="https://images.pexels.com/photos/408799/pexels-photo-408799.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Guitare" />
                  <div className="blog-meta d-flex align-items-center">
                     <a href="#">March 26, 24</a>
                     <div className="dot"></div>
                     <a href="#">Artistes</a>
                  </div>
                  <Link className="post-title" href="/blog-details">Nouveaux talents à suivre ce mois-ci</Link>
               </div>
            </div>

             
            <div className="col-12 col-md-6 col-lg-4">
               <div className="blog-card">
                  <LazyImage src="https://images.pexels.com/photos/164716/pexels-photo-164716.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Vinyle" />
                  <div className="blog-meta d-flex align-items-center">
                     <a href="#">March 26, 24</a>
                     <div className="dot"></div>
                     <a href="#">Conseils</a>
                  </div>
                  <Link className="post-title" href="/blog-details">Comment optimiser votre expérience d’écoute</Link>
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