import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../breadcrumb/page';
export default function Track() {
    return (
       <>
       <BreadCrumb/>
       <div className="container">
        <div className="tracking-container py-5">
            <h3 className="text-center mb-3">Track Your Order</h3>
            <form id="trackOrderForm">
                <div className="mb-3">
                    <label for="orderID" className="form-label">Enter Order ID</label>
                    <input type="text" id="orderID" className="form-control" placeholder="e.g., MYZK12345" required/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Track Order</button>
            </form>
            <div id="orderStatus" className="alert alert-info mt-3 text-center d-none"></div>
        </div>
    </div>
       </>
    )}



    