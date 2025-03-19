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
                                    <li><a href="/pages/privacypolicy">Privacy Policy</a></li>
                                    <li><a href="/pages/termsandconditions">Terms &amp; Conditions</a></li>
                                    <li><a href="/pages/returnrefundpolicies">Returns &amp; Refund Policies</a></li>
                                    <li><a href="/pages/shippinganddelivery">Shipping &amp; Delivery Policies</a></li>
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
                                    <li><a href="/pages/track">Track Order</a></li>
                                    <li><a href="/pages/about">About Us</a></li>
                                    <li><a href="/pages/return">Return</a></li>
                                    <li><a href="/pages/warranty">Warranty Registration</a></li>
                                    {/* <li><a href="/pages/contact">Contact Us</a></li> */}
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
                                    <a style={{ color: "white" }} href="tel:+918588862126">+91 8588862126</a> <br />
                                    <i className="fa fa-envelope" ></i>
                                    <a style={{ color: "white" }} href="mailto:operations@myzk.in">operations@myzk.in</a>
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
