import styles from "./Maintenance.module.scss";
import maintenanceImg from 'assets/MaintenanceTiger.png'

function Maintenance() {
  return (
    <div>
      <div className={styles.maintenance}>
        <h1>Site Internet en maintenance</h1>
        <img src={maintenanceImg} alt="Maintenance" />
        <p>Notre tigre se refait une beauté</p>
      </div>
    </div>
  );
}

export default Maintenance;
