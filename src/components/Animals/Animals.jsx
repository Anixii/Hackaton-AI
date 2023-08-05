import dog from "../../assets/22222222222222.png";
import car from "../../assets/111111.png";
import s from "./Animals.module.css"

const Animals = () => {
    return (
        <div className={s.main}>
            <img alt='' className={s.imgage_dog} src={dog}/>
            <img alt='' className={s.imgage_car} src={car}/>
        </div>
    )
}