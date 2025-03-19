import Link from 'next/link';
import Image from 'next/image';


export default function BreadCrumb() {
    return (
        <div className="page-header">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-12">
				
					<div className="page-header-box">
					
						<nav className="wow fadeInUp">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link href="/">home</Link></li>
							
							</ol>
						</nav>
					</div>
				
				</div>
			</div>
		</div>
	</div>
    )
}