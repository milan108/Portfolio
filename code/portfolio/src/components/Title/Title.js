import React, {useState, useEffect} from 'react';
import './Title.scss';
import SocialNavBar from '../../containers/Navigation/SocialNavBar';

const Title = props => {
    const[word,setWord] = useState("");

    const sleep =(ms)=> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        const words = ["UX", "UI", "Experiences", "Ambitions", "Designs", "Customer Satisfaction", "Solutions", "Ecosystem", "Marketing"];

        const cycleWords = async () => {
            for (let i of words) {
                setWord(i);
                await sleep(300);
            }
            cycleWords();
        }

        cycleWords();

    }, []);

    return (
        <div className="Title">
            I'd love to help with your <br /> <span className="word">{word}.</span>
        </div>
    );
}

export default Title;
