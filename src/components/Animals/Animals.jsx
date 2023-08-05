import dog from "../../assets/22222222222222.png";
import car from "../../assets/111111.png";
import s from "./Animals.module.css"
import { useLocation } from "react-router-dom";
import { data, getRandomObjectsFromArray } from "../../data";
const Animals = () => { 
    const { state } = useLocation()
    const random = getRandomObjectsFromArray(data.animals,4)
    console.log(random); 
    console.log(state);
    return (
        <div className={s.main}>
           {random.map((item,index) =><img alt="" src={item.picture} className={`imgages__${index}`}></img>)}
        </div>
    )
}
export default Animals