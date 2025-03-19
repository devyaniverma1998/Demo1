import Link from 'next/link';
import Image from 'next/image';


export default function Choose() {
    return (
        <div className="why-choose-us">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">Why Choose Us</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Our</span> Product Categories</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.25s">We offer high-quality products with reliability and durability.</p>
                    </div>
                </div>
            </div>
    
            <div className="row">
                <div className="col-lg-4 col-md-6 order-1">
                    <div className="why-choose-box-1">
                        <div className="why-choose-item wow fadeInUp">
                            <div className="icon-box">
                                 <Image src="/charger.png" alt="Charger" />
                            </div>
                            <div className="why-choose-content">
                                <h3>Charger</h3>
                                <p>Fast and efficient chargers for all your devices.</p>
                            </div>
                        </div>
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                            <div className="icon-box">
                                 <Image src="/datacable.png" alt="Data Cable" />
                            </div>
                            <div className="why-choose-content">
                                <h3>Data Cable</h3>
                                <p>Durable and high-speed data cables for seamless connectivity.</p>
                            </div>
                        </div>
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                            <div className="icon-box">
                                 <Image src="/extension-cord.png" alt="Extension Board" />
                            </div>
                            <div className="why-choose-content">
                                <h3>Extension Board</h3>
                                <p>Reliable extension boards to power multiple devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="col-lg-4 order-lg-1 order-md-2 order-1">
                    <div className="why-choose-image wow fadeInUp">
                        <figure>
                             <Image src="/5.webp" alt="Featured Product" />
                        </figure>
                    </div>
                </div>
    
                <div className="col-lg-4 col-md-6 order-lg-2 order-md-1 order-2">
                    <div className="why-choose-box-2">
                        <div className="why-choose-item wow fadeInUp">
                            <div className="icon-box">
                                 <Image src="/internet-connection.png" alt="Mini WiFi UPS" />
                            </div>
                            <div className="why-choose-content">
                                <h3>Mini WiFi UPS</h3>
                                <p>Uninterrupted power for your WiFi and networking devices.</p>
                            </div>
                        </div>
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                            <div className="icon-box">
                                 <Image src="/water-tank.png" alt="Water Alarm" />
                            </div>
                            <div className="why-choose-content">
                                <h3>Water Alarm</h3>
                                <p>Advanced water alarms to prevent leakage and damage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="icon-star-image">
             <Image src="/logo.svg" alt="Logo" />
        </div>
    </div>
    
    )

}