import React from 'react';
import './WordDisplay.css'

function WordDisplay({char_array}) {
    return (
        <div className="word-display">
            <h2 className="typography">Characters Guessed</h2>
            <div style={{margin:"20px"}}>
            {
                char_array.map((char_item,index)=>{
                    return <button className="button1" key={index}>{char_item}</button>
                })
            }
            </div>
        </div>
    );
}

export default WordDisplay;