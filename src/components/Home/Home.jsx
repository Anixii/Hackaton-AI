import s from "./Home.module.css"
const Home = () => {
    return (
        <div className={s.main}>
            <div className={s.type__class}>
                Vegetables
            </div>
            <div className={s.type__class}>
                Fruits
            </div>
            <div className={s.type__class}>
                Animals
            </div>
        </div>
    )
}

export default Home