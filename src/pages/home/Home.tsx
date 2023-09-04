/* eslint-disable jsx-a11y/iframe-has-title */
import styles from "./Home.module.scss";
import Banner from "components/banner/Banner";
import anthem from "assets/anthem.mp3";
import Event from "components/event/Event";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Club de Football Américain à Fréjus</h1>
      <audio src={anthem} controls>
        <p>
          If you are reading this, it is because your browser does not support
          the audio element.
        </p>
      </audio>
      <Banner />
      <Event />
      <p className={styles.customFont}>
        lundi - jeudi <br />
        20h - 22h
      </p>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.0045542103476!2d6.740311844715795!3d43.418731568106956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cebd680a7d392b%3A0x6252639f155e71e7!2sTerrain%20de%20Rugby%20de%20Base%20nature!5e0!3m2!1sen!2sfr!4v1692395756810!5m2!1sen!2sfr"
          width="700"
          height="200"
          style={{ border: "0" }} // Change to an object with CSS properties
          allowFullScreen // Use the boolean attribute without a value
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
