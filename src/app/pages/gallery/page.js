import BreadCrumb from "../breadcrumb/page";
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonial from "../testimonial/page";
import Link from 'next/link';
import Image from 'next/image';


export default function Gallery() {
    return (
        <>
            <BreadCrumb />
            <div class="our-gallery-page">
                <div class="container">

                    <div class="row gallery-items">
                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="0.2s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="0.4s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="0.6s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="0.8s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="1s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="1.2s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="1.4s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="1.6s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="1.8s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="2s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6">

                            <div class="photo-gallery wow fadeInUp" data-wow-delay="2.2s" data-cursor-text="View">
                                <Link href="/user-2.jpg">
                                    <figure>
                                         <Image src="/user-2.jpg" alt=""/>
                                    </figure>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Testimonial />
        </>
    )
}