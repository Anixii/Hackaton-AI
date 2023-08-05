import s from "./Home.module.css"
const Home = () => {
    return (
        <div className={s.main}>
            <div className={`${s.type__class} ${s.vegetables}`}>
                <p className={s.title__type_class}>Vegetables</p>
            </div>
            <div className={s.type__class}>
                <p className={s.title__type_class}>Fruits</p>
            </div>
            <div className={s.type__class}>
                <p className={s.title__type_class}>Animals</p>
            </div>
        </div>
    )
}

export default Home