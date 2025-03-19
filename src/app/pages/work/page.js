import Link from 'next/link';
import Image from 'next/image';

export default function Work() {
    return (
        <div className="how-it-work">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">

                    <div className="how-it-work-img">
                        <figure className=" image-anime">
                             <Image src="/Adapter.png"  alt="" />
                        </figure>
                    </div>

                </div>

                <div className="col-lg-6">
                    <div className="how-it-work-content">

                        <div className="section-title">
                            <h3 className="wow fadeInUp">how it works</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque"><span>What We Do</span> for Your Devices</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">We provide high-quality electronic accessories, ensuring efficiency, durability, and convenience for your daily needs.</p>
                        </div>

                        <div className="faq-accordion how-work-accordion" id="accordion">

                            <div className="accordion-item wow fadeInUp">
                                <div className="icon-box">
                                     <Image src="/logo.svg" alt="" />
                                </div>
                                <h2 className="accordion-header" id="heading1">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                        browse our products
                                    </button>
                                </h2>
                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1"
                                    data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>Explore our range of chargers, data cables, extension boards, mini WiFi UPS, and water alarms to find the best fit for your needs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                <div className="icon-box">
                                     <Image src="/logo.svg" alt="" />
                                </div>
                                <h2 className="accordion-header" id="heading2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                        easy ordering process
                                    </button>
                                </h2>
                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                                    data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>Our user-friendly platform allows you to order your preferred products with just a few clicks.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon-box">
                                     <Image src="/logo.svg" alt="" />
                                </div>
                                <h2 className="accordion-header" id="heading3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        fast & reliable delivery
                                    </button>
                                </h2>
                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                    data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>We ensure quick and safe delivery, so you receive your products in the best condition and on time.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}