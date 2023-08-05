import { useLocation } from "react-router-dom";
import { getRandomObjectsFromArray } from "../../data"; 
import { useEffect, useState,useRef } from "react"; 
import ReactPlayer from 'react-player'; 
import audioo from '../../'
const Animals = () => {   
  const [isPlaying, setIsPlaying] = useState(false); 
  const [data, setData] = useState([])
  const audioRef = useRef(null);
    const handlePlayAudio = (value) => {
      if (!isPlaying) {
        const audio = new Audio(value);
        audio.loop = false;
        audio.play();
        setIsPlaying(true);
        audioRef.current = audio;
  
        audio.onended = () => {
          setIsPlaying(false);
        };
      }
    }
    const { state } = useLocation()
    useEffect(() =>{ 
    const random = getRandomObjectsFromArray(state,4) 
    setData(random)
    },[state])
    return (
        <div className={'main'}>
           {data.map((item,index) =><img onClick={() => handlePlayAudio(item.audio)} alt="" src={item.picture} 
           className={`imgages__${index}`}
           style={{ pointerEvents: isPlaying ? 'none' : 'auto' }}
           ></img>)} 
            {/* <div className="count-number-equivelance-audioPlayer">
                <button id="equivalence-audio-button" onClick={handlePlayAudio}>Soundclip!</button>
            </div> */}
        </div>
    )
}
export default Animals