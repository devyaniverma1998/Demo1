export default function Header() {
 return (
       <>
        <nav className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="/">
                            <img src="/myzk.webp" width={100} alt="Logo" />
                        </a>

                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item submenu"><a className="nav-link" href="/">Home</a>

                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="/pages/about">About Us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/pages/shop">Shop</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/pages/gallery">Gallery</a>

                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="/pages/contact">Contact Us</a></li>

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
