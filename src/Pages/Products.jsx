import React,{useRef, useEffect} from 'react'
import { MdSend } from 'react-icons/md';
import { useHorizontalScroll } from '../Components/SideScroll';
import '../css/products.css'
function Products() {
    const scrollRef = useHorizontalScroll();
    return (
        <div>
            <div className="row">
                <div className="productHeader">
                    <h1>Products</h1>
                </div>
                <nav aria-label="breadcrumb" className='margin-left mt-3'>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item" ><a href="/" className='text-decoration-none'>Home</a></li>
                  <li className="breadcrumb-item"><a href="/" className='text-decoration-none'>Library</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
              <div className="ourServices" ref={scrollRef}>
                <div className='services_holder'>
                <span>Web Development</span>
                <span>Web Development</span>
                <span>Web Development</span>
                <span>Web Development</span>
                <span>Web Development</span>
                <span>Web Development</span>
                <span>Web Development</span>
                <span>Web Development</span>
                <span>Web Development</span>
                <span>Web Development</span>
                <span>Web Development</span>
                </div>
                
              </div>
                <div className="col-md-4 col-sm-6">
                    <div className="pricing-table-3 basic">
                        <div className="pricing-table-header">
                            <h4><strong>BASIC</strong></h4>
                            <p>Loerm Ipsum Donor Sit Amet</p>
                        </div>
                        <div className="price"><strong>$3</strong> / MONTH</div>
                        <div className="pricing-body">
                            <ul className="pricing-table-ul">
                                <li><i><MdSend /></i> Unlimited Email Addresses</li>
                                <li><i><MdSend /></i> 50 GB Disk Space</li>
                                <li><i><MdSend /></i> Unlimited MySQL Database</li>
                                <li><i><MdSend /></i> 24X7 Support</li>
                                <li><i><MdSend /></i> Email Support</li>
                            </ul><a href="/" className="view-more">Buy Now</a></div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="pricing-table-3 premium">
                        <div className="pricing-table-header">
                            <h4><strong>PREMIUM</strong></h4>
                            <p>Loerm Ipsum Donor Sit Amet</p>
                        </div>
                        <div className="price"><strong>$8</strong> / MONTH</div>
                        <div className="pricing-body">
                            <ul className="pricing-table-ul">
                                <li><i><MdSend /></i> Unlimited Email Addresses</li>
                                <li><i><MdSend /></i> 50 GB Disk Space</li>
                                <li><i><MdSend /></i> Unlimited MySQL Database</li>
                                <li><i><MdSend /></i> 24X7 Support</li>
                                <li><i><MdSend /></i> Email Support</li>
                            </ul><a href="/" className="view-more">Buy Now</a></div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="pricing-table-3 business">
                        <div className="pricing-table-header">
                            <h4><strong>BUSINESS</strong></h4>
                            <p>Loerm Ipsum Donor Sit Amet</p>
                        </div>
                        <div className="price"><strong>$12</strong> / MONTH</div>
                        <div className="pricing-body">
                            <ul className="pricing-table-ul">
                                <li><i><MdSend /></i> Unlimited Email Addresses</li>
                                <li><i><MdSend /></i> 50 GB Disk Space</li>
                                <li><i><MdSend /></i> Unlimited MySQL Database</li>
                                <li><i><MdSend /></i> 24X7 Support</li>
                                <li><i><MdSend /></i> Email Support</li>
                            </ul><a href="/" className="view-more">Buy Now</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
