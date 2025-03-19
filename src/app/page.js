
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Hero from './pages/hero/page';
import CtaBox from './pages/ctabox/page';
import AboutUs from './pages/aboutus/page';
import Services from './pages/services/page';
import Choose from './pages/choose/page';
import Work from './pages/work/page';
import Team from './pages/team/page';
import Testimonial from './pages/testimonial/page';
import Blog from './pages/blog/page';
import ContactUs from './pages/contact/page';
import Charger from './pages/charger/page';

export default function Home() {
  return (
    <>
      <Hero />
      <CtaBox />
     <AboutUs/>
      <Services />
      <Work />
      <Choose />
      <Charger />
      <Team />
      <Testimonial />
      <Blog />
      <ContactUs />

    </>
  );
}
