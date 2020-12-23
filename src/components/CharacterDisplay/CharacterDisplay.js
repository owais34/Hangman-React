import React from 'react';
import './CharacterDisplay.css'

function CharacterDisplay({char_array,clickEvent}) {
    return (
        <div className="input-container">
            <h1 className="typography">Guesses Remaining</h1>
            <div style={{margin:"10px"}}>
                {
                    char_array.map((char_item,index)=>{
                        return <button className="button1" onClick={()=>clickEvent(char_item)} key={char_item}>{char_item}</button>
                    })
                }
            </div>
        </div>
    );
}

export default CharacterDisplay;