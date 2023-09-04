import styles from "./Banner.module.scss";
import Hero from "assets/ferocious-tiger-nature.jpg"

function Banner() {

    return (
    <div className={styles.banner}>
        <img src={Hero} alt="Banner" />
    </div>
    );
}

export default Banner;