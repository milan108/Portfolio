import React from 'react';
import './App.scss';
import Section from './containers/Section/Section';
import Title from './components/Title/Title';
import FlipCard from './containers/Cards/FlipCard';
import Card from './containers/Cards/Card';
import ParticleSection from './containers/Section/ParticleSection';
import TopNavBar from './containers/Navigation/TopNavBar';
import Slide from 'react-reveal/Slide';

function App() {
    return (
        <div className="App">
            <TopNavBar />
            <ParticleSection>
                <Title />
            </ParticleSection>

            <Section color='#111'>
                <div className='column-lg' style={{ margin: "0 auto" }}>
                    <Slide bottom>
                        <div className='row-lg'>
                            <Card color="#05386b" width="400px" height="600px">
                            </Card>

                            <Card color="#05386b" width="400px" height="600px" >
                            </Card>

                            <Card color="#05386b" width="400px" height="600px">
                            </Card>

                            {/**<FlipCard width =  "200px" height = "300px">
                            <div className="FlipCard-front">
                                <h1>something</h1>
                            </div>
                            <div className="FlipCard-back">
                                <p>dsaf</p>
                            </div>
                        </FlipCard>**/}

                        </div>
                    </Slide>

                </div>
            </Section>
        </div >
    );
}

export default App;
