import React,{Component} from 'react';

const header = () => {
    return (
        <div>
            <head id="header" class="fixed-top d-flex align-items-center  header-transparent ">
                <div class="container d-flex align-items-center">

                    <div class="logo mr-auto">
                        <a href="index.html">
                            <img src="static/img/Symphsig_Logo.png" alt="" class="img-fluid" />
                            <h1 class="text-light">SymphSig</h1>
                        </a>
                    </div>

                    <nav class="nav-menu d-none d-lg-block">
                        <ul>
                            <li class="active"><a href="index.html">Home</a></li>
                            <li><a href="#about">Our Product</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                </div>
            </head>

            <section id="hero" class="d-flex flex-column justify-content-end align-items-center">
                <div id="heroCarousel" class="container carousel carousel-fade" data-ride="carousel">
                    <h2 class="animate__animated animate__fadeInDown">Welcome to <span>SymphSig</span></h2>
                    <p class="animate__animated fanimate__adeInUp">GoodBye Audio Pirates</p>
                    <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>

                </div>

                <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
        
                    <defs>
                        <g>
                        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                        </g>
                    </defs>
                    <g class="wave1">
                        <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"/>
                    </g>
                    <g class="wave2">
                        <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"/>
                    </g>
                    <g class="wave3">
                        <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"/>
                    </g>
                </svg>

           </section>
        </div>     
    );
};

export default header;