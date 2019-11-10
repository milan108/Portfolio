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
                    <RepoCard image = {img_algo} title = "Algorithms" description = "An collection of algorithms written in whatever language I please." url = "https://github.com/milan108/Algorithms" />
                    <RepoCard image = {img_algo} title = "Algorithms" description = "An collection of algorithms written in whatever language I please." url = "https://github.com/milan108/Algorithms" />
                    <RepoCard image = {img_algo} title = "Algorithms" description = "An collection of algorithms written in whatever language I please." url = "https://github.com/milan108/Algorithms" />
                    <RepoCard image = {img_algo} title = "Algorithms" description = "An collection of algorithms written in whatever language I please." url = "https://github.com/milan108/Algorithms" />
                    
               
                </div>
            </Slide>
        </div>
    );
};

export default RepoSection;