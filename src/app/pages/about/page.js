
import Link from 'next/link';
import Image from 'next/image';

import AboutUs from "../aboutus/page";
import BreadCrumb from "../breadcrumb/page";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function About() {
    return (
        <>
        <BreadCrumb/>
       <AboutUs/>
        </>
       
    )
}