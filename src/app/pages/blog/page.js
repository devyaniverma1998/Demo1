import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
    return (
        <div className="our-blog">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Blogs</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Check Our</span> Latest Articles</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">
                                Stay updated with the latest trends in mobile accessories and technology.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item wow fadeInUp">
                            <div className="post-featured-image" data-cursor-text="View">
                                <figure>
                                    <Link href="#" className="image-anime">
                                         <Image src="/7.webp" alt="" />
                                    </Link>
                                </figure>
                            </div>

                            <div className="post-item-body">
                                <h2><Link href="#">How to Choose the Right Power Bank for Your Phone</Link></h2>
                                <p>Learn what to consider when buying a power bank, from capacity to charging speed.</p>
                            </div>

                            <div className="post-item-footer">
                                <Link href="#" className="read-more-btn">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">
                            <div className="post-featured-image" data-cursor-text="View">
                                <figure>
                                    <Link href="#" className="image-anime">
                                         <Image src="/3.webp" alt="" />
                                    </Link>
                                </figure>
                            </div>

                            <div className="post-item-body">
                                <h2><Link href="#">Top 5 Wireless Chargers You Should Try</Link></h2>
                                <p>Explore the best wireless chargers for fast and convenient charging.</p>
                            </div>

                            <div className="post-item-footer">
                                <Link href="#" className="read-more-btn">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">
                            <div className="post-featured-image" data-cursor-text="View">
                                <figure>
                                    <Link href="#" className="image-anime">
                                         <Image src="/6.webp" alt="" />
                                    </Link>
                                </figure>
                            </div>

                            <div className="post-item-body">
                                <h2><Link href="#">Why You Need a Screen Protector for Your Smartphone</Link></h2>
                                <p>Protect your phone’s screen from scratches and cracks with a high-quality screen protector.</p>
                            </div>

                            <div className="post-item-footer">
                                <Link href="#" className="read-more-btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="icon-star-image">
                 <Image src="/logo.svg" alt="" />
            </div>
        </div>

    )
}