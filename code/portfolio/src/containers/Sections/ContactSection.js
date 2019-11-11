import React from 'react';
import envelope from  '../../assets/images/envelope.png';
import phone from  '../../assets/images/phone.png';
import './Sections.scss';

const ContactSection = prop => {
    return (
        <div className = "ContactSection" id = "Contact"> 
            <h1>CONTACT</h1>

            I'm Toronto based. Here's how you can reach me.
            <ul>
                <li><img src = {envelope} width = "35px" height = "25px" alt = "" /><span>MILAN.LASTNAME@OUTLOOK.COM</span></li>
                <li><img src = {phone} width = "35px" height = "25px" alt = "" /><span>+1 647-221-7265</span></li>
            </ul>
        </div>
    
    );
}

export default ContactSection;