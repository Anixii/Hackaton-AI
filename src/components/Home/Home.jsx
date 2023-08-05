import { Link } from "react-router-dom"
import s from "./Home.module.css"
import { data } from "../../data"
const Home = () => {
    return (
        <div className={s.main}>
            <Link to={"/test"} className={`${s.type__class} ${s.vegetables}`}>
                <p className={s.title__type_class}>Vegetables</p>
            </Link>
            <Link to={"/test"} className={`${s.type__class} ${s.fruits}`}>
                <p className={s.title__type_class}>Fruits</p>
            </Link>
            <Link state={data.animals} to={"/test"} className={`${s.type__class} ${s.animals}`}>
                <p className={s.title__type_class}>Animals</p>
            </Link>
        </div>
    )
}
export default Home