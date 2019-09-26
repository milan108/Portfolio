import React from 'react';
import './App.css';
import Section from './containers/Section/Section';
import Title from './components/Title/Title';
import EnergyDrink from './components/EnergyDrink/EnergyDrink';

function App() {
    return (
        <div className="App">
            <Section color='#F7F9F9' >
                <Title />
                <EnergyDrink />
            </Section>
            <Section color='#c0c0c0'></Section>
        </div>
    );
}

export default App;
