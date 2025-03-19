import Link from 'next/link';
import Image from 'next/image';

export default function CtaBox(){
    return(
        <div className="cta-box">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-12">
                 
                    <div className="cta-box-item wow fadeInUp">
                        <div className="icon-box">
                             <Image src="images/icon-cta-phone.svg" alt=""/>
                        </div>
                        <div className="cta-box-content">
                            <h3>any query ?</h3>
                            <p>Call on : (+91) XXXXXXXXXX</p>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="cta-box-item wow fadeInUp" data-wow-delay="0.25s">
                        <div className="icon-box">
                             <Image src="images/icon-cta-time.svg" alt=""/>
                        </div>
                        <div className="cta-box-content">
                            <h3>opening hours</h3>
                            <p>Mon to Sat 10:00AM to 6:00PM</p>
                        </div>
                    </div>
                </div>
              

                <div className="col-lg-4 col-md-12 col-12">
                    
                    <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.5s">
                        <Link href="/pages/contact" className="btn-default btn-highlighted">For Bulk Order</Link>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    )
}