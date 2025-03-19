import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
 return (
       <>
        <nav className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">

                        <Link className="navbar-brand" href="/">
                            <Image src="/myzk.webp" width={100} alt="Logo" />
                        </Link>

                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item submenu"><Link className="nav-link" href="/">Home</Link>

                                    </li>
                                    <li className="nav-item"><Link className="nav-link" href="/pages/about">About Us</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/pages/shop">Shop</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/pages/gallery">Gallery</Link>

                                    </li>
                                    <li className="nav-item"><Link className="nav-link" href="/pages/contact">Contact Us</Link></li>

                                </ul>
                            </div>

                           

                        </div>

                        <div className="navbar-toggle"></div>
                    </div>
                </nav>
                <div className="responsive-menu"></div>
            </div>
        </nav>
       </>
    );
}
