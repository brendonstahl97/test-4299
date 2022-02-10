import React, { useState } from "react";
import './RankedList.scss';

function RankedList(props) {

    const [open, setOpen] = useState(false);

    const populateList = (listData) => {
        if (listData && listData.length > 0) {

            let finalHTML = '';
            let count = 1;
            listData.forEach(data => {
                finalHTML +=
                    `<div class="item">
                        <p class="rank-num">${count}</p>
                        <div class="episode-info">
                            <p class="episode-number">${data.episodeNumber}</p>
                            <p>-</p>
                            <p class="episode-title">${data.episodeName}</p>
                        </div>
                    </div>`;
                count++;
            });

            return(finalHTML);
        } else { return (`<p>Coming Soon...</p>`) };
    };

    return (
        <div className={'ranked-list ' + (open ? 'open' : '')} onClick={() => { setOpen(!open) }}>
            <h1>{props.title}</h1>
            <div className='list' dangerouslySetInnerHTML={{__html: populateList(props.listData)}}>

            </div>
        </div>
    );
};

export default RankedList;