import React from 'react';
import './App.scss';
import Section from './containers/Section/Section';
import Title from './components/Title/Title';
import EnergyDrink from './components/EnergyDrink/EnergyDrink';
import FlipCard from './containers/Cards/FlipCard';


function App() {
    return (
        <div className="App">
            <Section color='#F7F9F9'>
                <Title />
                <EnergyDrink />
            </Section>
            <Section color='#c0c0c0'>
                <h1>TECHNOLOGIES</h1>
                <FlipCard />
            </Section>
        </div>
    );
}

export default App;
