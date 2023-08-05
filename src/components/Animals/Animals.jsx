import { useLocation } from "react-router-dom";
import { getRandomObjectsFromArray } from "../../data";
const Animals = () => { 
    const { state } = useLocation()
    const random = getRandomObjectsFromArray(state,4)
    
    return (
        <div className={'main'}>
           {random.map((item,index) =><img alt="" src={item.picture} className={`imgages__${index}`}></img>)}
        </div>
    )
}
export default Animals