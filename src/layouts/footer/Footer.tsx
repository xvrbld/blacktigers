import styles from "./Footer.module.scss";
import Facebook from "assets/facebook.png";
import Instagram from "assets/instagram.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://www.facebook.com/lesblacktigers" target="_blank" rel="noreferrer">
        <img src={Facebook} alt="Facebook Logo" />
      </a>
      <a href="https://www.instagram.com/lesblacktigers/" target="_blank" rel="noreferrer">
        <img src={Instagram} alt="Instagram Logo" />
      </a>
    </div>
  );
}

export default Footer;
