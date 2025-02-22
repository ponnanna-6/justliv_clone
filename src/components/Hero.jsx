import styles from "../styles/Hero.module.css";
import sparklesIcon from "../assets/sparkles.svg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1> Your Child&apos;s Perfect Schedule<br />
            in Just a Few Clicks
          </h1>
          <p>Less Planning. More Living.</p>
          <button className={styles.button}>
            <img src={sparklesIcon} alt="Sparkles" className={styles.icon} />
            Join the waiting list
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;