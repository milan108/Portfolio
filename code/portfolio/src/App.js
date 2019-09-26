import React from 'react';
import './App.css';
import Section from './containers/Section';
import Title from './components/Title';
import EnergyDrink from './components/EnergyDrink';

function App() {
    return (
        <div className="App">
            <Section color='#F7F9F9' >
                <Title />
                <EnergyDrink />
            </Section>
            <Section color='#000'></Section>
        </div>
    );
}

export default App;
