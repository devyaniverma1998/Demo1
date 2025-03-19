"use client"; // If using Next.js with App Router

export default function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <div className="section-title">
                                <h1 className="text-anime-style-2" data-cursor="-opaque">
                                Lorem, ipsum    <span>dolor sit </span> amet consectetur adipisicing elit
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>

                            {/* Appointment Button */}
                            <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                                <a href="/pages/conatct" className="btn-default">Contact Us</a>
                            </div>

                            {/* Google Rating */}
                            <div className="google-rating wow fadeInUp" data-wow-delay="0.75s">
                                <ul>
                                    <li>Google Rating <span>5.0</span></li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>Based on 492 reviews</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="col-lg-6">
                        <div className="hero-image">
                            <div className="hero-img">
                                <figure>
                                    <img src="/Adapter.png" alt="" />
                                </figure>
                            </div>

                            {/* Doctor Info Box */}
                            <div className="export-dantist-box">
                                <div className="icon-box">
                                    <figure className="image-anime">
                                        <img src="/myzk.webp" alt="Dr. Clara Lee" />
                                    </figure>
                                </div>
                                {/* <div className="export-dantist-content">
                                    <h3>View More</h3>
                                    <p>MYZK</p>
                                </div> */}
                            </div>

                            {/* Icons List */}
                            <div className="hero-icon-list">
                                <div className="hero-icon-box-1">
                                    <img src="/logo.svg" alt="Icon 1" />
                                </div>
                                <div className="hero-icon-box-2">
                                    <img src="/logo.svg" alt="Icon 2" />
                                </div>
                                <div className="hero-icon-box-3">
                                    <img src="/logo.svg" alt="Icon 3" />
                                </div>
                            </div>

                            {/* Star Icon */}
                            <div className="icon-star-image">
                                <img src="/myzk.webp" alt="Star Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
