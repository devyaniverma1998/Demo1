import BreadCrumb from "../breadcrumb/page";
import 'bootstrap/dist/css/bootstrap.min.css';
import Choose from "../choose/page";
import Testimonial from "../testimonial/page";
import Services from "../services/page";

export default function Shop() {
    return (
        <>
            <BreadCrumb />
            <Services/>
            <Choose />
            <Testimonial />
        </>
    )
}