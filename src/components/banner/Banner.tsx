import styles from "./Banner.module.scss";
import Hero from "assets/hero.jpg"

function Banner() {

    return (
    <div className={styles.banner}>
        <img src={Hero} alt="Banner" />
    </div>
    );
}

export default Banner;