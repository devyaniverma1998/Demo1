import Link from 'next/link';
import Image from 'next/image';


export default function Team() {
    return (
        <div className="our-team">
    <div className="container">
        <div className="row section-row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h3 className="wow fadeInUp">Our Team</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Our Friendly</span> Team</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.25s">We are committed to sustainability and eco-friendly initiatives.</p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="team-member-item wow fadeInUp">
                    <div className="team-image">
                        <figure className="image-anime">
                             <Image src="/user-1.jpg" alt=""/>
                        </figure>
                        <div className="team-social-icon">
                            <ul>
                                <li><Link href="#" className="social-icon"><i className="bi bi-facebook"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-youtube"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-instagram"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-pinterest"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="team-content">
                        <h3>Johan Joe</h3>
                        <p>Lead Specialist</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="team-member-item wow fadeInUp" data-wow-delay="0.25s">
                    <div className="team-image">
                        <figure className="image-anime">
                             <Image src="/user-2.jpg" alt=""/>
                        </figure>
                        <div className="team-social-icon">
                            <ul>
                                <li><Link href="#" className="social-icon"><i className="bi bi-facebook"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-youtube"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-instagram"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-pinterest"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="team-content">
                        <h3>Mike Johnson</h3>
                        <p>Senior Specialist</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="team-member-item wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-image">
                        <figure className="image-anime">
                             <Image src="/user-3.jpg" alt=""/>
                        </figure>
                        <div className="team-social-icon">
                            <ul>
                                <li><Link href="#" className="social-icon"><i className="bi bi-facebook"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-youtube"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-instagram"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-pinterest"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="team-content">
                        <h3>Alison Banson</h3>
                        <p>Product Manager</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="team-member-item wow fadeInUp" data-wow-delay="0.75s">
                    <div className="team-image">
                        <figure className="image-anime">
                             <Image src="/user-4.jpg" alt=""/>
                        </figure>
                        <div className="team-social-icon">
                            <ul>
                                <li><Link href="#" className="social-icon"><i className="bi bi-facebook"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-youtube"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-instagram"></i></Link></li>
                                <li><Link href="#" className="social-icon"><i className="bi bi-pinterest"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="team-content">
                        <h3>Christopher Case</h3>
                        <p>Marketing Head</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="icon-star-image">
         <Image src="/logo.svg" alt=""/>
    </div>
</div>

    )}