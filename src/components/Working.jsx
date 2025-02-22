import styles from "../styles/Working.module.css";
import { FaSearch, FaCalendarAlt, FaHeart } from "react-icons/fa";

const Working = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>How it works</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <FaSearch className={styles.icon} />
          <div>
            <h3>Browse</h3>
            <p>Discover activities from our partner booking providers.</p>
          </div>
        </div>
        <div className={styles.step}>
          <FaCalendarAlt className={styles.icon} />
          <div>
            <h3>Build</h3>
            <p>
              Share your child’s interests, schedule, and preferences. Watch as
              JustLiv creates the perfect calendar filled with activities.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <FaHeart className={styles.icon} />
          <div>
            <h3>Book</h3>
            <p>Finalize your selections with one click and enjoy peace of mind.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;