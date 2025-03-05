import React from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'

export default function RefundPolicy() {
  return (
    <div>
         <TopHeader />
         <Breadcrumbs main={"Refund Policy"} parent={"Refund Policy"} />
         <div className='container'>
         <h4>Overview</h4>
        <p>
          At OSM Agri Mart, we strive to ensure the satisfaction of our users by providing a reliable platform for buying and selling agricultural products. We understand that sometimes issues may arise, and we are committed to resolving them as efficiently as possible. This refund policy outlines the circumstances under which refunds will be provided and the process for requesting a refund.
        </p>

        <h4>Refund Eligibility</h4>
        <h4>1. Product Condition:</h4>
        <p>Buyers are entitled to a refund if the product received is significantly different from the description provided by the seller. Products that are damaged, expired, or otherwise unfit for use upon arrival may qualify for a refund.</p>

        <h4>2. Cancellations:</h4>
        <p>Orders can be canceled within 24 hours of purchase for a full refund, provided the product has not been shipped.</p>

        <h4>3. Non-Delivery:</h4>
        <p>If the buyer does not receive the product within the specified delivery timeframe, they are eligible for a refund.</p>

        <h4>Refund Process</h4>
        <h4>1. Initiating a Refund Request:</h4>
        <p>
          To request a refund, buyers must contact our customer support team at <a href="mailto:osmagrimart@gmail.com">osmagrimart@gmail.com</a> within 7 days of receiving the product. Please provide the order number, details of the issue, and any relevant photos or evidence.
        </p>

        <h4>2. Review and Approval:</h4>
        <p>Our team will review the refund request and respond within 3 business days. If the request is approved, the buyer may need to return the product to the seller.</p>

        <h4>3. Return Shipping:</h4>
        <p>If a return is required, the buyer is responsible for return shipping costs unless the product was received damaged or not as described.</p>

        <h4>4. Refund Issuance:</h4>
        <p>
          Once the return is received and inspected, we will notify the buyer of the status of their refund. Approved refunds will be processed within 5-7 business days and credited back to the original payment method.
        </p>
      </div>
         <Footer/>
    </div>
  )
}
