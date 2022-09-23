import React, { useState } from 'react';
import './button.scss';

export default function Button(props) {
    const [bgImage, setBgImage] = useState(props.backgroundImage);

    const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main';

    const bgImg = props.backgroundImage ? 'bg-img' : '';

    const size = props.size ? 'btn-' + props.size : '';

    const animate = props.animate ? 'btn-animate' : '';

    const border = props.border ? 'btn-border' : '';

    const handleHover = () => {
        if (props.hover) {
            setBgImage(props.hover);
        }
    };

    const handleLeave = () => {
        setBgImage(props.backgroundImage);
    };

    return (
        <button
            className={`btn ${bg} ${bgImg} ${size} ${animate} ${border} ${props.className}`}
            style={{ backgroundImage: `url(${bgImage})` }}
            onClick={props.onClick ? props.onClick : null}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
        >
            <span className="btn__txt">{props.children}</span>
            {props.icon ? <span className="btn__icon">{props.icon}</span> : null}
        </button>
    );
}
