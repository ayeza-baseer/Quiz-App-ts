import React from 'react';

function Button({handleClick,text}:any) {
    return (
        <button onClick={handleClick}>{text}</button>
    );
}

export default Button;