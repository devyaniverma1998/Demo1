export default function AboutUs() {
    return (

        <div className="about-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-image">
                        <div className="about-img-1">
                            <figure className="image-anime reveal">
                                <img src="/4.jpg" className="w-100" alt="Data Cable"/>
                            </figure>
                        </div>
                        <div className="about-img-2">
                            <figure className="image-anime reveal">
                                <img src="/5.jpg" className="w-100" alt="High-Quality Data Cable"/>
                            </figure>
                        </div>
                        <div className="about-experience">
                            <figure>
                                <img src="/myzk.webp" width={100} alt="Brand Logo"/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">About Us</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Your Trusted</span> Data Cable Provider</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">We specialize in high-quality data cables designed for fast charging, seamless connectivity, and long-lasting durability. Our goal is to provide reliable solutions for all your digital needs.</p>
                        </div>
                        <div className="about-us-body wow fadeInUp" data-wow-delay="0.5s">
                            <ul>
                                <li>Fast-charging data cables</li>
                                <li>Durable and tangle-free designs</li>
                                <li>Universal compatibility with all devices</li>
                                <li>High-speed data transfer</li>
                                <li>Reliable and long-lasting materials</li>
                            </ul>
                        </div>
                        <div className="about-us-footer wow fadeInUp" data-wow-delay="0.75s">
                            <a href="/pages/about" className="btn-default">Read More About Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    );
}