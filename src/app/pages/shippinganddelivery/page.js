import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from "../breadcrumb/page";
export default function ShippingandDelivery() {
    return (
        <>
            <BreadCrumb />
            <div className='container'>
                <h2>Shipping & Delivery Policy</h2>
                <p>
                    Thank you for shopping with us! Please carefully review our Shipping & Delivery Policy before placing an order. This policy applies to all purchases made through our store.
                </p>

                <h3>Shipping & Delivery Options</h3>
                <p>
                    We offer various shipping methods to ensure a seamless shopping experience. Some orders may be fulfilled by third-party suppliers, who will be responsible for shipping your products.
                </p>

                <h3>Free Shipping</h3>
                <p>🚚 We offer free shipping on certain orders. Eligibility for free shipping will be mentioned at checkout.</p>

                <h3>Expedited Shipping</h3>
                <p>📦 If you select an expedited shipping option, we will contact you with additional shipping details after you place your order.</p>

                <h3>⏳ Delivery Time Estimates</h3>
                <p>While we aim for timely deliveries, all shipping times provided are estimates only and subject to change based on logistics and unforeseen circumstances.</p>

                <h3>Shipping & Delivery Time</h3>
                <ul>
                    <li>✅ <strong>Processing Time:</strong> Orders are shipped within 48 hours of placement.</li>
                    <li>✅ <strong>Estimated Delivery Time:</strong> 4-7 business days from the shipping date.</li>
                </ul>

                <h3>International Shipping</h3>
                <p>🚫 We currently do not offer international shipping. Our services are limited to domestic shipping within India.</p>

                <h3>Contact Us</h3>
                <p>
                    If you have any questions or concerns regarding our shipping policy, feel free to reach out to us via our contact form. We’re happy to assist you!
                </p>
            </div>
        </>
    );
}
