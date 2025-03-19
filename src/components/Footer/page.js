import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <section className="main-footer">
            <div className="container" >
                <div className="row">


                    {/* Our Policy Section */}
                    <div className="col-lg-4 col-md-4">
                        <div className="footer-links footer-quick-links">
                            <h5 className="widget-title">Our Policy</h5>
                            <div className="textwidget">
                                <ul className="menu">
                                    <li><Link href="/pages/privacypolicy">Privacy Policy</Link></li>
                                    <li><Link href="/pages/termsandconditions">Terms &amp; Conditions</Link></li>
                                    <li><Link href="/pages/returnrefundpolicies">Returns &amp; Refund Policies</Link></li>
                                    <li><Link href="/pages/shippinganddelivery">Shipping &amp; Delivery Policies</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Support Links Section */}
                    <div className="col-lg-4 col-md-4">
                        <div className="footer-links footer-social-links">
                            <h5 className="widget-title">Support Links</h5>
                            <div className="textwidget">
                                <ul className="menu">
                                    <li><Link href="/pages/track">Track Order</Link></li>
                                    <li><Link href="/pages/about">About Us</Link></li>
                                    <li><Link href="/pages/return">Return</Link></li>
                                    <li><Link href="/pages/warranty">Warranty Registration</Link></li>
                                    {/* <li><Link href="/pages/contact">Contact Us</Link></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="col-lg-4 col-md-4">
                        <div className="footer-links footer-contact-links">
                            <h5 className="widget-title">Contact Us</h5>
                            <div className="textwidget">
                                <div style={{ color: "white" }}>
                                    <i className="fa fa-location-arrow" ></i>
                                    Digital Telemedia Technology Pvt. Ltd, E-169, Sector-63, Noida - 201301, Uttar Pradesh, India <br />
                                    <i className="fa fa-mobile" ></i>
                                    <Link style={{ color: "white" }} href="tel:+918588862126">+91 8588862126</Link> <br />
                                    <i className="fa fa-envelope" ></i>
                                    <Link style={{ color: "white" }} href="mailto:operations@myzk.in">operations@myzk.in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Copyright */}
                <div className="footer-copyright">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright-text">
                                <p> © 2025 All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
