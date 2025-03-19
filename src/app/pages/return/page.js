import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../breadcrumb/page';
export default function Return() {
    return (
       <>
       <BreadCrumb/>
       <div className="container py-5">
        <div className="return-container p-4 bg-white shadow rounded mt-5">
            <h3 className="text-center mb-3">Product Return Request</h3>
            <form >
                <div className="mb-3">
                    <label htmlFor="orderID" className="form-label">Enter Order ID</label>
                    <input type="text" id="orderID" name="orderID" className="form-control" placeholder="e.g., MYZK12345" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="reason" className="form-label">Reason for Return</label>
                    <select id="reason" name="reason" className="form-control" required>
                        <option value="">Select a reason</option>
                        <option value="Defective Product">Defective Product</option>
                        <option value="Wrong Item Received">Wrong Item Received</option>
                        <option value="Not as Described">Not as Described</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-danger w-100">Submit Return Request</button>
            </form>
          
        </div>
    </div>
       </>
    )}



    