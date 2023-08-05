import { useLocation } from "react-router-dom";
import { getRandomObjectsFromArray } from "../../data"; 
import { useEffect, useState } from "react"; 
import ReactPlayer from 'react-player'; 
import audioo from '../../'
const Animals = () => {  
    const handlePlayAudio = (value) => {
      console.log(value);
      const audio = new Audio(value);
      audio.loop = false;    
      audio.play(); 
    };
    const { state } = useLocation()
    const random = getRandomObjectsFromArray(state,4) 
    return (
        <div className={'main'}>
           {random.map((item,index) =><img onClick={() => handlePlayAudio(item.audio)} alt="" src={item.picture} 
           className={`imgages__${index}`}></img>)} 
            {/* <div className="count-number-equivelance-audioPlayer">
                <button id="equivalence-audio-button" onClick={handlePlayAudio}>Soundclip!</button>
            </div> */}
        </div>
    )
}
export default Animals