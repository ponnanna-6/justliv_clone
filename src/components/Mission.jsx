import styles from "../styles/Mission.module.css";
import kidsCamp from "../assets/kids_camp.png";

const Mission = () => {
  return (
    <section className={styles.missionContainer}>
      <h2 className={styles.title}>
        Our Mission <span className={styles.heart}>💖</span>
      </h2>
      <p className={styles.description}>
        Parents need a simple way to find, book, and track their kids&apos; activities.
        Businesses need a better way to be found and to keep families coming back.
      </p>
      <p className={styles.purpose}>
        Our purpose is to <br />
        <strong>
          make parents&apos; lives <span className={styles.highlight}>easier, happier,</span> and{" "}
          <span className={styles.highlight}>less stressful</span>.
        </strong>
      </p>
      <p className={styles.understanding}>As parents and business owners, we get it.</p>
      <div className={styles.imageContainer}>
        <img src={kidsCamp} alt="Kids camping" className={styles.image} />
      </div>
    </section>
  );
};

export default Mission;
