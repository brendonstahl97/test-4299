import React from 'react';
import './Button.scss';

function Button(props) {
    return (
        <div className={'jojoButton ' + props.className}>
            <button>
                {props.children}
            </button>
            <img className="button-menacing1" src={`.${import.meta.env.VITE_PATH_PREFIX ?? ""}/img/menacing.png`} alt="menacing kanji"></img>
            <img className="button-menacing2" src={`.${import.meta.env.VITE_PATH_PREFIX ?? ""}/img/menacing.png`} alt="menacing kanji"></img>
        </div>
    )
};

export default Button;