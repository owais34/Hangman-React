import React from 'react';
import {ReactComponent as Logo0} from '../../media/hang0.svg'
import {ReactComponent as Logo1} from '../../media/hang1.svg'
import {ReactComponent as Logo2} from '../../media/hang2.svg'
import {ReactComponent as Logo3} from '../../media/hang3.svg'
import {ReactComponent as Logo4} from '../../media/hang4.svg'
import {ReactComponent as Logo5} from '../../media/hang5.svg'
import {ReactComponent as Logo6} from '../../media/hang6.svg'
import './StickDisplay.css'

function StickDisplay({index,danger}) {
    
    const renderSVG=()=>{
        
        if(index===0) 
            return <Logo0 className="image"/>;
        else if(index===1)
                return <Logo1 className="image"/>
        else if(index===2)
                return <Logo2 className="image"/>
        else if(index===3)
                return <Logo3 className="image"/>
        else if(index===4)
            return <Logo4 className="image"/>
        else if(index===5)
            return <Logo5 className="image"/>
        else
            return <Logo6 className="image"/>
               
    }
    return (
        <div className={"image-tile "+danger}>
            { renderSVG()}
        </div>
    );
}

export default StickDisplay;