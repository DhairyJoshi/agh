import React from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'

export default function Cancellation() {
  return (
    <div>
         <TopHeader />
         <Breadcrumbs main={"Cancellation Policy"} parent={"Cancellation Policy"} />
         <div className='container'>
         <h4>Overview</h4>
        <p>
          At OSM Agri Mart, we aim to provide a seamless experience for both buyers and sellers. We understand that sometimes orders need to be canceled, and this policy outlines the conditions under which cancellations are permitted, as well as the process for requesting a cancellation.
        </p>

        <h4>Cancellation Eligibility</h4>
        <h4>1. Order Status:</h4>
        <p>
          Orders can be canceled if they have not yet been shipped by the seller. Once the product has been dispatched, the order cannot be canceled and must go through the return process outlined in our refund policy.
        </p>

        <h4>2. Timeframe:</h4>
        <p>Buyers can cancel their order within 24 hours of placing it to receive a full refund.</p>

        <h4>Cancellation Process</h4>
        <h4>1. Initiating a Cancellation:</h4>
        <p>
          To cancel an order, buyers must contact our customer support team at <a href="mailto:osmagrimart@gmail.com">osmagrimart@gmail.com</a> as soon as possible. Please provide the order number and reason for cancellation.
        </p>

        <h4>2. Review and Approval:</h4>
        <p>Our team will review the cancellation request and respond within 1 business day. If the order has not been shipped, the cancellation will be approved, and a full refund will be processed.</p>

        <h4>3. Refund Issuance:</h4>
        <p>Once the cancellation is approved, the refund will be processed within 3-5 business days and credited back to the original payment method.</p>

        <h4>Seller Cancellations</h4>
        <h4>1. Out of Stock:</h4>
        <p>
          If a seller needs to cancel an order due to the product being out of stock or any other issue, they must notify the buyer and our customer support team immediately. The buyer will receive a full refund.
        </p>

        <h4>2. Improper Listings:</h4>
        <p>
          If an order needs to be canceled due to an incorrect listing or pricing error, the seller must inform the buyer and our customer support team. A full refund will be issued to the buyer.
        </p>
         </div>
         <Footer/>
    </div>
  )
}
