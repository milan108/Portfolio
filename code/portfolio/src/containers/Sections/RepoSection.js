import React from 'react';
import './Sections.scss';
import Slide from 'react-reveal/Slide';
import img_algo from '../../assets/images/repos/algorithms.png';
import RepoCard from '../Cards/RepoCard';

const RepoSection = props => {
    return (
        <div className='RepoSection row-lg' id="values">
            <Slide bottom>
                <div className="row-lg RepoCards">
                    <RepoCard image = {img_algo}/>
                    <RepoCard image = {img_algo}/>
                    <RepoCard image = {img_algo}/>
                    <RepoCard image = {img_algo}/>
                </div>
            </Slide>
        </div>
    );
};

export default RepoSection;