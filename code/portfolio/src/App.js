import React from 'react';
import './App.scss';
import Title from './components/Title/Title';
import ParticleSection from './containers/Sections/ParticleSection';
import TopNavBar from './containers/Navigation/TopNavBar';
import ValuesSection from './containers/Sections/ValuesSection';

function App() {
    return (
        <div className="App">
            <TopNavBar />
            <ParticleSection>
                <Title />
            </ParticleSection>
            <ValuesSection />
        </div >
    );
}

export default App;
