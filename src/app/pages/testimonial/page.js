import Link from 'next/link';
import Image from 'next/image';

export default function Testimonial() {
    return (
        <div className="our-testimonials">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Testimonials</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque"><span>What Our</span> Customers Say</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">
                                We take pride in providing high-quality mobile accessories and excellent customer service.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="testimonial-image">
                            <div className="testimonial-img">
                                <figure className="image-anime">
                                    <Image src="/charger.png" alt="not found" />
                                </figure>
                            </div>

                            <div className="testimonial-rating-box">
                                <div className="rating-counter-item">
                                    <div className="rating-counter-number">
                                        <h3><span className="counter">4.7</span>/5</h3>
                                    </div>
                                    <div className="rating-counter-content">
                                        <p>This rating is based on customer reviews for our products and service.</p>
                                    </div>
                                </div>

                                <div className="service-rating">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </li>
                                        <li>for excellent product quality</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="testimonial-slider">
                            <div className="swiper">
                                <div className="swiper-wrapper" data-cursor-text="Drag">

                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-header">
                                                <div className="testimonial-quote-image">
                                                    <Image src="/iconn.svg" alt="not found" />
                                                </div>
                                                <div className="testimonial-content">
                                                    <p>&quot;Amazing product quality! I purchased a wireless charger from here, and it&apos;s been working flawlessly. Highly recommended!&quot;</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-body">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <Image src="/user-1.jpg" alt="not found" />
                                                    </figure>
                                                </div>
                                                <div className="author-content">
                                                    <h3>Robert Lee</h3>
                                                    <p>Software Engineer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-header">
                                                <div className="testimonial-quote-image">
                                                    <Image src="/iconn.svg" alt="not found" />
                                                </div>
                                                <div className="testimonial-content">
                                                    <p>&quot;Fast delivery and great packaging! The power bank I ordered is sleek, compact, and holds a charge for days!&quot;</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-body">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <Image src="/user-3.jpg" alt="not found" />
                                                    </figure>
                                                </div>
                                                <div className="author-content">
                                                    <h3>Banson Doe</h3>
                                                    <p>Teacher</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-header">
                                                <div className="testimonial-quote-image">
                                                    <Image src="/iconn.svg" alt="not found" />
                                                </div>
                                                <div className="testimonial-content">
                                                    <p>&quot;Excellent customer support! They helped me choose the perfect Bluetooth headphones, and I&apos;m loving them!&quot;</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-body">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <Image src="/user-4.jpg" alt="not found" />
                                                    </figure>
                                                </div>
                                                <div className="author-content">
                                                    <h3>Thomas Linda</h3>
                                                    <p>Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="testimonial-btn">
                                    <div className="testimonial-button-prev"></div>
                                    <div className="testimonial-button-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
