import React from 'react';
import './App.scss';
import Section from './containers/Section/Section';
import Title from './components/Title/Title';
import FlipCard from './containers/Cards/FlipCard';
import ParticleSection from './containers/Section/ParticleSection';

function App() {
    return (
        <div className="App">

            <ParticleSection>
                    <Title />
            </ParticleSection>

            <Section color='#F7F9F9'>
                <div className='column-lg'>
                    <h1>TECHNOLOGIES</h1>
                    <div className='row-lg'>
                        <FlipCard>
                            <div className="FlipCard-front">
                                <h1>something</h1>
                            </div>
                            <div className="FlipCard-back">
                                <p>dsaf</p>
                            </div>
                        </FlipCard>
                        <FlipCard>
                            <div className="FlipCard-front">
                                <h1>something else</h1>
                            </div>
                            <div className="FlipCard-back">
                                <p>dsadas fasdfsadf addfs sad lksdajkfklksdf f</p>
                            </div>
                        </FlipCard>
                    </div>
                </div>
            </Section>
        </div >
    );
}

export default App;
