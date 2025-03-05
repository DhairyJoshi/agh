import React from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'

export default function PrivacyPolicy() {
    return (
        <div>
            <TopHeader />
            <Breadcrumbs main={"Privacy Policy"} parent={"Privacy Policy"} />
            <div className="container">
                <h4>Your interactions with OSM Agri Mart</h4>
                <p>This section will describe how we process personal data when you are interacting with OSM Agri Mart through either email, our company website www.farmerconnects.com or other channels of communication (e.g., chatbots or chat messengers).</p>

                <h4>What personal data do we collect?</h4>
                <p>Personal data we collect can include the following:</p>
                <ul>
                    <li>Name</li>
                    <li>Date of birth</li>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>IP address</li>
                </ul>

                <h4>How do we collect your data?</h4>
                <p>We collect your personal data:</p>
                <ul>
                    <li>When you interact with our website, its forms or booking tool, request marketing material or sign up to receive our newsletter.</li>
                    <li>When you visit our website and cookies are placed on your computer. Please see Section 6 for further information on our use of cookies.</li>
                    <li>When you email, call us, or write to us or provide us with information in any other way, including by interacting with us via social media such as Facebook, Instagram, LinkedIn, and Twitter.</li>
                </ul>
                <p>We will do our best to ensure that the personal data we process about you is correct. If there are any relevant changes regarding your personal data, you may use our contact information above to notify us of any changes.</p>

                <h4>How will we use your data?</h4>
                <p>We will use your personal data:</p>
                <ul>
                    <li>To process and respond to requests, enquiries and complaints received from you, in accordance with our legitimate interest to provide our customers with a responsive service.</li>
                    <li>To provide services and products requested and/or purchased by you and to communicate with you about such services and/or products. We do this as necessary to carry out a contract with you and in accordance with our legitimate interest to operate our business.</li>
                    <li>To maintain our records and for audit purposes, in accordance with our legitimate interest to do so and/or when required by legislation.</li>
                    <li>To prevent or detect fraud and to establish, exercise or in defense of legal claims, in accordance with our legitimate interest to do so.</li>
                </ul>

                <h4>Social Media Plugins</h4>
                <p>We have integrated social media plugins of various social networks on our website. These social media plugins may be for e.g., sharing content of the websites on social networks. You can recognize the social media plugins by the logos of the respective social networks.</p>
                <p>To ensure data protection on our websites, we only use these plugins together with the so-called “Shariff” solution. This application prevents the plugins integrated on the websites from transmitting data to the respective provider the first time you enter the sites.</p>

                <h4>Transfer of Personal Data to Third Countries</h4>
                <p>In some cases, we transfer personal data outside of Switzerland and/or the EU/EEA. We generally only transfer data to countries with legislation that ensures an adequate level of data protection. Transfers to other countries are based on appropriate safeguards, such as approved standard contractual clauses.</p>

                {/* <h4>Retention of Personal Data</h4>
                <p>FCSA primarily stores data on Microsoft Azure (EU & US regions), as well as on other third-party service providers. For a detailed overview of the Microsoft Azure Privacy Policy, please consult <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer">Microsoft Azure Privacy Policy</a>. We will keep your personal data for as long as we need to for legitimate legal or business reasons, including to comply with any regulatory obligations. We will delete your personal data, when it is no longer required in relation to the purpose for our collection, processing, and storage of your personal data. We will store personal data that we are obliged to keep in accordance with the law. If you would like more detailed information about the retention of our data, please contact us by using the information in Section 1.</p> */}
            </div>
            <Footer/>
        </div>
    )
}
