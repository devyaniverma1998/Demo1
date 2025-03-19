import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../breadcrumb/page';
export default function Warranty() {
    return (
      <>
      <BreadCrumb/>
      <div className="container py-5">
            <div className="warranty-container p-4 bg-white shadow rounded mt-5">
                <h3 className="text-center mb-3">Warranty Claim Request</h3>
                <form >
                    <div className="mb-3">
                        <label htmlFor="orderID" className="form-label">Enter Order ID</label>
                        <input type="text" id="orderID" name="orderID" className="form-control" placeholder="e.g., MYZK12345" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="issue" className="form-label">Describe the Issue</label>
                        <select id="issue" name="issue" className="form-control" required>
                            <option value="">Select an issue</option>
                            <option value="Product Not Working">Product Not Working</option>
                            <option value="Manufacturing Defect">Manufacturing Defect</option>
                            <option value="Physical Damage (Reported within 24h)">Physical Damage (Reported within 24h)</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-warning w-100">Submit Warranty Claim</button>
                </form>

            </div>
        </div>
      </>
    )
}



