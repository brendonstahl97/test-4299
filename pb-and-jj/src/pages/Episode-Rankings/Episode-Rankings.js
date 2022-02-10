import React from 'react';
import '../../components/RankedList/RankedList';
import RankedList from '../../components/RankedList/RankedList';
import './Episode-Rankings.scss';

const phantomBloodListData = [
    { episodeNumber: 'Episode 9', episodeName: 'The Final Ripple!' },
    { episodeNumber: 'Episode 3', episodeName: 'Youth with Dio' },
    { episodeNumber: 'Episode 1', episodeName: 'Dio the invader' },
    { episodeNumber: 'Episode 8', episodeName: 'Bloody Battle! JoJo & Dio' },
    { episodeNumber: 'Episode 7', episodeName: 'Sorrowful Successor' },
    { episodeNumber: 'Episode 6', episodeName: "Tomorrow's Courage" },
    { episodeNumber: 'Episode 5', episodeName: 'The Dark Knights' },
    { episodeNumber: 'Episode 2', episodeName: '	A Letter from the Past' },
    { episodeNumber: 'Episode 4', episodeName: 'Overdrive' },
];

function EpisodeRankings(props) {
    return (
        <div className='episode-rankings'>
            <h1>Episode Rankings</h1>
            <p className='description'>Here you can find our ranked lists for each part of JoJo's Bizarre Adventure as discussed on the show! Click on the part you would like to view.</p>
            <div className='ranked-lists'>
                <RankedList title='Phantom Blood' listData={phantomBloodListData}></RankedList>
                <RankedList title='Battle Tendency'></RankedList>
            </div>
        </div>
    )
};

export default EpisodeRankings;