import styles from "./Home.module.scss";
import Banner from "components/banner/Banner";
import data from "data/standings.json";
import Standings from "components/standings/Standings";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Club de Football Américain à Fréjus</h1>
      <Banner />
      <Standings teams={data} />
    </div>
  );
}

export default Home;
