import React from 'react';
import './App.scss';
import TopNavBar from './containers/Navigation/TopNavBar';
import Title from './components/Title/Title';
import ParticleSection from './containers/Sections/ParticleSection';
import ValuesSection from './containers/Sections/ValuesSection';
import RepoSection from './containers/Sections/RepoSection';

function App() {
    return (
        <div className="App">
            <TopNavBar />
            
            <ParticleSection>
                <Title />
            </ParticleSection>
            
            <RepoSection />

            <ValuesSection />
        </div >
    );
}

export default App;
