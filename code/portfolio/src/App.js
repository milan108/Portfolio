import React from 'react';
import './App.scss';
import Section from './containers/Section/Section';
import Title from './components/Title/Title';
import FlipCard from './containers/Cards/FlipCard';
import ParticleSection from './containers/Section/ParticleSection';
import TopNavBar from './containers/Navigation/TopNavBar';


function App() {
    return (
        <div className="App">
            <TopNavBar />
            
            <ParticleSection>
                    <Title />
            </ParticleSection>

            <Section color='#111'>
                <div className='column-lg'>
                    <div className='row-lg'>
                        {/**<FlipCard>
                            <div className="FlipCard-front">
                                <h1>something</h1>
                            </div>
                            <div className="FlipCard-back">
                                <p>dsaf</p>
                            </div>
                        </FlipCard>**/}
                        
                    </div>
                </div>
            </Section>
        </div >
    );
}

export default App;
