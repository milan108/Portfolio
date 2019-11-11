import React from 'react';
import './App.scss';
import TopNavBar from './containers/Navigation/TopNavBar';
import Title from './components/Title/Title';
import ParticleSection from './containers/Sections/ParticleSection';
import ValuesSection from './containers/Sections/ValuesSection';
import RepoSection from './containers/Sections/RepoSection';
import Footer from './containers/Sections/Footer';
import AboutSection from './containers/Sections/AboutSection';
import ContactSection from './containers/Sections/ContactSection';

function App() {
    return (
        <div className="App">
            <TopNavBar />
            
            <ParticleSection>
                <Title />
            </ParticleSection>
            
            <RepoSection />

            <AboutSection />

            {/* <ContactSection /> */}
            
            <Footer />
        </div >
    );
}

export default App;
