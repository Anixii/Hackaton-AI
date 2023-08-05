import { Link } from "react-router-dom"
import s from "./Home.module.css"
import { data } from "../../data"
const Home = () => {
    return (
        <div className={s.main}>
            <div className={`${s.type__class} ${s.vegetables}`}>
                <Link to={'/test'}  className={s.title__type_class}>Vegetables</Link>
            </div>
            <div className={s.type__class}>
                <Link to={'/test'} className={s.title__type_class}>Fruits</Link>
            </div>
            <div className={s.type__class}>
                <Link state={data.animals} to={'/test'} className={s.title__type_class}>Animals</Link>
            </div>
        </div>
    )
}

export default Home