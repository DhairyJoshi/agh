import React from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'

export default function Terms() {
    return (
        <div>
            <TopHeader />
            <Breadcrumbs main={"Terms and Conditions"} parent={"Terms and Conditions"} />
            <div className="container">
                <h4>Welcome to OSM Agri Mart</h4>
                <p>These Terms and Conditions govern your use of our website www.farmerconnects.com and the services provided therein. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree with these Terms, you must not use the Site.</p>

                <h4>Eligibility</h4>
                <p>By using the Site, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are using the Site on behalf of an entity, you represent and warrant that you have the authority to bind that entity to these Terms.</p>

                <h4>Prohibited Activities</h4>
                <p>You agree not to use the Site for any unlawful purpose or in any way that could harm, disable, overburden, or impair the Site. Prohibited activities include, but are not limited to:</p>
                <ul>
                    <li>Engaging in any activity that violates any applicable law or regulation.</li>
                    <li>Uploading or transmitting viruses or other malicious code.</li>
                    <li>Interfering with or disrupting the integrity or performance of the Site.</li>
                    <li>Attempting to gain unauthorized access to the Site or its related systems or networks.</li>
                    <li>Using the Site to impersonate any person or entity or to misrepresent your affiliation with any person or entity.</li>
                </ul>

                <h4>Product Listings</h4>
                <p>OSM Agri Mart allows users to list and purchase products. We do not own or sell the products listed on the Site. The responsibility for the accuracy of the product listings and the fulfillment of the transactions lies solely with the users who list and purchase the products.</p>

                <h4>Payments</h4>
                <p>All payments made through the Site are processed by third-party payment processors. We are not responsible for any issues related to payment processing, including but not limited to errors, delays, or disputes.</p>

                <h4>Refunds and Returns</h4>
                <p>Refunds and returns are subject to the terms and conditions set by the individual sellers. We recommend that you review the seller's refund and return policy before making a purchase.</p>

                <h4>Privacy</h4>
                <p>Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.</p>

                <h4>Intellectual Property</h4>
                <p>All content on the Site, including but not limited to text, graphics, logos, and images, is the property of OSM Agri Mart or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from the Site without our prior written permission.</p>
            </div>            <Footer />
        </div>
    )
}
