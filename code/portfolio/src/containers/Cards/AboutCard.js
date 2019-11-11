import React from 'react';
import './Cards.scss';
import '../Sections/Sections.scss'

const AboutCard = props => {
    return (
        <div className='AboutCard'>
            <p>My name is Milan Miljkovic, and I take joy in building solutions that are not only enticing and immersive but also abide by the below core values:</p>
            <div className="Values">
                <div className="Value">
                    <span>CONCISE</span><br />
                    Not overcomplicated. Not oversimplifed.
                        </div>
                <div className="Value">
                    <span>REUSABLE</span><br />
                    Good modularity is key to my process.
                        </div>
                <div className="Value">
                    <span>ELEGANT</span><br />
                    Smart design on both sides of the fence.
                        </div>
                <br /><br />
            </div>
            <p>I am an experienced front end web developer who has experience with Angular, React, HTML, CSS/SASS, Node, and ES6. I also do graphic design and have adept Photoshop skills.
            I am constantly upgrading and learning new things, so feel free to ask about my current interests.<br /> <br /> Thank you,<br />Milan Miljkovic</p>
        </div>
    );
}

export default AboutCard;