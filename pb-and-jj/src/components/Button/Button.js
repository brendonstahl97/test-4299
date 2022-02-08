import React from 'react';
import './Button.scss';

function Button(props) {
    return (
        <div className='jojoButton appear-up'>
            <button>
                {props.label}
            </button>
            <img className="button-menacing1" src='./img/menacing.png' alt="menacing kanji"></img>
            <img className="button-menacing2" src='./img/menacing.png' alt="menacing kanji"></img>
        </div>
    )
};

export default Button;