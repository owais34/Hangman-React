import React from 'react';
import './Dialog.css';

function Dialog({message,reset}) {
    return (
        <div className="dialog">
            <div className="container3">
                <h2 style={{fontSize:"3em",color:"black",margin:"40px"}}>{message}</h2>
                <button className="button4" onClick={()=>reset()}>Try Again</button>
            </div>
        </div>
    );
}

export default Dialog;