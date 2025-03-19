import Link from 'next/link';
import Image from 'next/image';

import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from "../breadcrumb/page";

export default function ReturnRefundPolicy() {
    return (
        <>
            <BreadCrumb />
            <div className="container">
                <h2>Return &amp; Refund Policy</h2>
                <p>
                    At <strong>www.MYZK.in</strong>, all products undergo strict quality control checks to ensure they are genuine and in new condition.
                </p>

                <h3>Replacement Policy (No Refunds)</h3>
                <ul>
                    <li>🔹 <strong>7-Day Product Repair/Replacement Policy</strong> (No refunds under any condition).</li>
                    <li>🔹 Only applicable if the product has a manufacturing defect and is in unused condition with original packaging, accessories, and paperwork (including warranties).</li>
                </ul>

                <h4>&quot;New and unused&quot; means:</h4>
                <ul>
                    <li>✅ No scratches, marks, or blemishes.</li>
                    <li>✅ No alterations or resizing of the product.</li>
                    <li>✅ Must not have been used in any way.</li>
                </ul>

                <h3>📞 Customer Support Contact:</h3>
                <p>
                    <strong>Phone:</strong> +91 8586003487 (Mon-Sat, 10 AM – 6 PM) <br />
                    <strong>Email:</strong> <Link href="mailto:help@MYZK.in">help@MYZK.in</Link>
                </p>

                <h3>Replacement Conditions</h3>
                <p>Customers can request a replacement within 7 days of delivery ONLY IF:</p>
                <ul>
                    <li>✔️ The product was delivered in a defective or physically damaged condition (reported within 24 hours of receipt).</li>
                    <li>✔️ The product is not functioning properly (reported within 7 days of delivery).</li>
                    <li>✔️ The product received is not as described on the website (reported within 24 hours of receipt).</li>
                </ul>

                <p>⏳ Once reported, our team will verify and respond within 24 hours after receiving the product.</p>

                <h3>Non-Eligible Replacement Cases</h3>
                <ul>
                    <li>❌ The customer dislikes the product&apos;s appearance, sound quality, or design.</li>
                    <li>❌ Physical damage is not reported within 24 hours of receiving the product.</li>
                    <li>❌ Damage caused due to electrical surges or user mishandling.</li>
                </ul>

                <p><strong>Note:</strong> No Returns or Refunds are allowed. Customers can only replace defective products within 7 days of delivery.</p>

                <h3>Cancellation Policy</h3>
                <p>We follow a liberal cancellation policy but with certain limitations:</p>
                <p>Cancellations will NOT be accepted if:</p>
                <ul>
                    <li>The order has already been processed and shipped.</li>
                    <li>The product was ordered under Same-Day Delivery.</li>
                    <li>The product was purchased under a special occasion offer (e.g., festival sales, limited-time deals).</li>
                </ul>

                <p>For any cancellation requests, please contact customer support as soon as possible.</p>
            </div>
        </>
    );
}
