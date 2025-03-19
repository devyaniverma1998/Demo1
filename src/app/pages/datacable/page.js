import Link from 'next/link';
import Image from 'next/image';


export default function DataCable(){
    return(
        <div className="our-services">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">Our DataCable Products</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque"><span>High-Quality</span> Tech Accessories for You</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.25s">We are committed to providing reliable and durable tech solutions for everyday needs.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="service-item wow fadeInUp">
                        <div className="icon-box">
                            <div className="img">
                                 <Image src="/charger.png" alt="Charger"/>
                            </div>
                        </div>
                        <div className="service-body">
                            <h3>Chargers</h3>
                            <p>High-quality chargers designed for efficiency and durability.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
                        <div className="icon-box">
                            <div className="img">
                                 <Image src="/datacable.png" alt="Data Cable"/>
                            </div>
                        </div>
                        <div className="service-body">
                            <h3>Data Cables</h3>
                            <p>Durable and high-speed data cables for seamless connectivity.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="service-item wow fadeInUp" data-wow-delay="0.5s">
                        <div className="icon-box">
                            <div className="img">
                                 <Image src="/datacable.png" alt="Extension Board"/>
                            </div>
                        </div>
                        <div className="service-body">
                            <h3>Extension Boards</h3>
                            <p>Reliable extension boards for powering multiple devices.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="service-item wow fadeInUp" data-wow-delay="0.75s">
                        <div className="icon-box">
                            <div className="img">
                                 <Image src="/charger.png" alt="Mini WiFi UPS"/>
                            </div>
                        </div>
                        <div className="service-body">
                            <h3>Mini WiFi UPS</h3>
                            <p>Uninterrupted internet with our Mini WiFi UPS solutions.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-3 col-md-6">
                    <div className="service-item wow fadeInUp" data-wow-delay="1s">
                        <div className="icon-box">
                            <div className="img">
                                 <Image src="/wateralarm.png" alt="Water Alarm"/>
                            </div>
                        </div>
                        <div className="service-body">
                            <h3>Water Alarms</h3>
                            <p>Advanced water alarm systems for safety and security.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="icon-star-image">
             <Image src="images/icon-star.svg" alt=""/>
        </div>
    </div>
    
    )
}