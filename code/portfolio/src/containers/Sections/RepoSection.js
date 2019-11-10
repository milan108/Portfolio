import React from 'react';
import './Sections.scss';
import Fade from 'react-reveal/Fade';
import Card from '../Cards/Card';

const RepoSection = props => {
    return (
            <div className='RepoSection row-lg' id = "values">
                <Fade bottom cascade>
                    <Card width="420px" height="200px">
                        
                    </Card>
                    <Card width="420px" height="200px">
                        
                    </Card>
                    <Card width="420px" height="200px">
                       
                    </Card>
                    <br /><br />
                </Fade>
            </div>
    );
};

export default RepoSection;