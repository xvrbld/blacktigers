import styles from "./Event.module.scss";
import BT from "assets/BT.png"
import BS from "assets/BS.png"

function Event() {
  return (
    <div className={styles.card}>
        <h1>prochain événement</h1>
        <a href="https://lesblacktigers.com/" target="_blank" rel="noreferrer"><img className={styles.home} src={BT} alt="Banner" /></a>
        <a href="https://www.marseille-bluestars.com/" target="_blank" rel="noreferrer"><img className={styles.visitor} src={BS} alt="Banner" /></a>
      <div className={styles.eventTitle}>
        <h2>Black Tigers</h2> vs <h2>Blue Stars</h2>
      </div>
      <div className={styles.eventInfo}>
        <div className={styles.eventWhat}>
          <h3>Quoi</h3>
          <p className={styles.first}>Match</p>
          <p className={styles.last}>Pré-saison</p>
        </div>
        <div className={styles.eventWhen}>
          <h3>Quand</h3>
          <p className={styles.first}>04 Nov, 2023</p>
          <p className={styles.last}>14:00</p>
        </div>
        <div className={styles.eventWhere}>
          <h3>Où</h3>
          <p className={styles.first}>Base nature,</p>
          <p className={styles.last}>Fréjus</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
