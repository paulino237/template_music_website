"use client"
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
  return (
    <>
         <div className="blog-page-wrap">
      <div className="divider"></div>

      <div className="container">
         <div className="row g-4 g-xl-5">
            <div className="col-12 col-md-7 col-lg-8">
               <div className="d-flex flex-column gap-5">

                   
                  <div className="single-blog">
                     <img src="https://images.unsplash.com/photo-1513863326356-0a6091e854b2?q=80&w=1200&auto=format&fit=crop" alt="Article" />
                     <div className="blog-meta d-flex align-items-center">
                        <span>26 Mars, 2024</span>
                        <div className="dot"></div>
                        <span>Musique</span>
                     </div>
                     <Link className="post-title mb-5" href="/blog-details">Les tendances de la production musicale</Link>
                     <Link href="/blog-details" className="btn btn-primary"><span>LIRE PLUS</span><span>LIRE PLUS</span></Link>
                  </div>

                   
                  <div className="single-blog">
                     <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Article" />
                     <div className="blog-meta d-flex align-items-center">
                        <span>26 Mars, 2024</span>
                        <div className="dot"></div>
                        <span>Playlists</span>
                     </div>
                     <Link className="post-title mb-5" href="/blog-details">Créer des playlists engageantes</Link>
                     <Link href="/blog-details" className="btn btn-primary"><span>LIRE PLUS</span><span>LIRE PLUS</span></Link>
                  </div>

                   
                  <div className="single-blog">
                     <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop" alt="Article" />
                     <div className="blog-meta d-flex align-items-center">
                        <span>26 Mars, 2024</span>
                        <div className="dot"></div>
                        <span>Artistes</span>
                     </div>
                     <Link className="post-title mb-5" href="/blog-details">Découvrir de nouveaux artistes</Link>
                     <Link href="/blog-details" className="btn btn-primary"><span>LIRE PLUS</span><span>LIRE PLUS</span></Link>
                  </div>

                   
                  <ul className="blog-pagination list-unstyled">
                     <li><a href="#">1</a></li>
                     <li><a href="#">2</a></li>
                     <li><a href="#">3</a></li>
                     <li className="active">
                        <a href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                              fill="none">
                              <path
                                 d="M28.0613 17.0605L19.0613 26.0605C18.7795 26.3423 18.3973 26.5006 17.9988 26.5006C17.6002 26.5006 17.218 26.3423 16.9363 26.0605C16.6545 25.7787 16.4961 25.3965 16.4961 24.998C16.4961 24.5995 16.6545 24.2173 16.9363 23.9355L23.375 17.4992H5C4.60218 17.4992 4.22064 17.3412 3.93934 17.0599C3.65804 16.7786 3.5 16.3971 3.5 15.9992C3.5 15.6014 3.65804 15.2199 3.93934 14.9386C4.22064 14.6573 4.60218 14.4992 5 14.4992H23.375L16.9387 8.05924C16.657 7.77745 16.4986 7.39526 16.4986 6.99674C16.4986 6.59823 16.657 6.21603 16.9387 5.93424C17.2205 5.65245 17.6027 5.49414 18.0012 5.49414C18.3998 5.49414 18.782 5.65245 19.0637 5.93424L28.0637 14.9342C28.2036 15.0738 28.3145 15.2396 28.3901 15.4221C28.4657 15.6046 28.5045 15.8003 28.5043 15.9979C28.5041 16.1955 28.4648 16.391 28.3888 16.5734C28.3127 16.7557 28.2014 16.9213 28.0613 17.0605Z"
                                 fill="#0E0E0E" />
                           </svg>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="col-12 col-md-5 col-lg-4">
               <div className="d-flex flex-column gap-5">
                   
                  <div className="blog-widget">
                     <h4 className="mb-4">Recherche</h4>
                      
                     <form onClick={(e) => e.preventDefault()}>
                        <input type="search" placeholder="Rechercher..." className="form-control" />
                        <button type="submit">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none">
                              <path
                                 d="M5.81127 5.43613C8.9183 2.44107 13.5422 2.56045 16.4179 5.43613C19.1677 8.186 19.3359 12.54 16.9222 15.486L21.1908 19.755L20.1302 20.8157L15.8611 16.5471C12.9151 18.9607 8.56114 18.7926 5.81127 16.0427C2.93559 13.1671 2.80038 8.33851 5.81127 5.43613ZM15.3572 6.49679C13.0141 4.15364 9.21508 4.15364 6.87193 6.49679C4.52879 8.83993 4.52879 12.6389 6.87193 14.9821C9.21508 17.3252 13.0141 17.3252 15.3572 14.9821C17.7004 12.6389 17.7004 8.83993 15.3572 6.49679Z"
                                 fill="#0E0E0E" />
                           </svg>
                        </button>
                     </form>
                  </div>

                   
                  <div className="blog-widget">
                     <h4 className="mb-4">Catégories</h4>

                     <ul className="blog-list">
                        <li>
                           <Link href="/blog-details">
                              Musique
                              <span>(03)</span>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog-details">
                              Playlists
                              <span>(01)</span>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog-details">
                              Artistes
                              <span>(05)</span>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog-details">
                              Événements
                              <span>(02)</span>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog-details">
                              Actus
                              <span>(04)</span>
                           </Link>
                        </li>
                     </ul>
                  </div>

                   
                  <div className="blog-widget">
                     <h4 className="mb-4">Articles récents</h4>

                     <div className="d-flex flex-column gap-4">
                         
                        <div className="widget-blog-post">
                           <div className="blog-thumbnail">
                              <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=300&auto=format&fit=crop" alt="Miniature" />
                           </div>
                           <div className="blog-content">
                              <h6><Link href="/blog-details">Les bases du mixage audio</Link></h6>
                              <p className="mb-0">March 26, 2024</p>
                           </div>
                        </div>

                         
                        <div className="widget-blog-post">
                           <div className="blog-thumbnail">
                              <img src="https://images.unsplash.com/photo-1518972559570-1ec7c9043cc8?q=80&w=300&auto=format&fit=crop" alt="Miniature" />
                           </div>
                           <div className="blog-content">
                              <h6><Link href="/blog-details">Créer une playlist cohérente</Link></h6>
                              <p className="mb-0">March 26, 2024</p>
                           </div>
                        </div>

                         
                        <div className="widget-blog-post">
                           <div className="blog-thumbnail">
                              <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop" alt="Miniature" />
                           </div>
                           <div className="blog-content">
                              <h6><Link href="/blog-details">Découvrir 5 artistes émergents</Link></h6>
                              <p className="mb-0">March 26, 2024</p>
                           </div>
                        </div>
                     </div>
                  </div>

                   
                  <div className="blog-widget">
                     <h4 className="mb-4">Nuage de tags</h4>

                     <ul className="tag-list list-unstyled">
                        <li><a href="#">Musique</a></li>
                        <li><a href="#">Playlists</a></li>
                        <li><a href="#">Artistes</a></li>
                        <li><a href="#">Événements</a></li>
                        <li><a href="#">Actus</a></li>
                        <li><a href="#">Trucs & Astuces</a></li>
                        <li><a href="#">Streaming</a></li>
                        <li><a href="#">Mixage</a></li>
                     </ul>
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