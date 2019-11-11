import React from 'react';
import envelope from  '../../assets/images/envelope.png';
import phone from  '../../assets/images/phone.png';
import './Sections.scss';

const ContactSection = prop => {
    return (
        <div className = "ContactSection" id = "Contact"> 
            <h1>CONTACT</h1>

            <ul>
                <li><img src = {envelope} width = "35px" height = "25px" alt = "" /><span>milan.lastname@outlook.com</span></li>
                <li><img src = {phone} width = "35px" height = "25px" alt = "" /><span>+1 647-221-7265</span></li>
            </ul>
        </div>
    
    );
}

export default ContactSection;