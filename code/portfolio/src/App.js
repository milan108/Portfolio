import React from 'react';
import './App.scss';
import Section from './containers/Section/Section';
import Title from './components/Title/Title';
import FlipCard from './containers/Cards/FlipCard';
import Card from './containers/Cards/Card';
import ParticleSection from './containers/Section/ParticleSection';
import TopNavBar from './containers/Navigation/TopNavBar';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import einstein from './assets/images/einstein.png';

function App() {
    return (
        <div className="App">
            <TopNavBar />
            <ParticleSection>
                <Title />
            </ParticleSection>

            <Section color='#111'>
                <div className='row-lg' id="About" style={{ margin: "80px auto", textAlign: "center" }}>
                    <Fade bottom cascade>
                        <Card width="420px" height="200px">
                            <div style={{ fontSize: "70px", fontWeight: "bold" }}>CONCISE</div>
                            Not overcomplicated. Not oversimplifed.
                        </Card>
                        <Card width="420px" height="200px">
                            <div style={{ fontSize: "70px", fontWeight: "bold" }}>REUSABLE</div>
                            Good modularity is key to my process.
                        </Card>
                        <Card width="420px" height="200px">
                            <div style={{ fontSize: "70px", fontWeight: "bold" }}>ELEGANT</div>
                            Smart design on both sides of the fence.
                        </Card>
                        <br /><br />
                    </Fade>
                </div>
            </Section>
        </div >
    );
}

export default App;
