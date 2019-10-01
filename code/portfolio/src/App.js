import React from 'react';
import './App.scss';
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
            <Section color='#000'></Section>
        </div>
    );
}

export default App;
