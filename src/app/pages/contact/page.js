import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../breadcrumb/page';
export default function ContactUs() {
    return (
        // <>     <BreadCrumb />
        <div className="contact-now">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="contact-google-map">
                        <div className="google-map-iframe">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
    
                <div className="col-lg-6">
                    <div className="contact-now-content">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Get in Touch</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">
                                <span>Have Questions?</span> Contact Us Today!
                            </h2>
                        </div>
    
                        <div className="contact-now-info">
                            <div className="contact-info-list wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    <img src="/logo.svg" alt="" />
                                </div>
                                <div className="contact-info-content">
                                    <p>24/11 Robert Road, New York, USA</p>
                                </div>
                            </div>
    
                            <div className="contact-info-list wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src="/logo.svg" alt="" />
                                </div>
                                <div className="contact-info-content">
                                    <p>+91 XXXXXXXXXX</p>
                                </div>
                            </div>
    
                            <div className="contact-info-list wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    <img src="/logo.svg" alt="" />
                                </div>
                                <div className="contact-info-content">
                                    <p>support@yourstore.com</p>
                                </div>
                            </div>
    
                            <div className="contact-info-list wow fadeInUp" data-wow-delay="0.8s">
                                <div className="icon-box">
                                    <img src="/logo.svg" alt="" />
                                </div>
                                <div className="contact-info-content">
                                    <p>Mon to Sat 10:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
    
                        <div className="contact-appointment-btn wow fadeInUp" data-wow-delay="1s">
                            <a href="/pages/contact" className="btn-default">Visit Our Store</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
            // </>

    )
}