import styles from "../styles/Dance.module.css";
import { FaStar } from "react-icons/fa";

const Dance = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Ready to Simplify Your Life?</h2>
                <p className={styles.description}>
                    Be the first to know when we launch! Join our waiting list and get exclusive updates and early access to our journey.
                </p>
                <button className={styles.button}>
                    <FaStar className={styles.icon} />
                    Join the waiting list
                </button>
            </div>
        </div>
    );
};

export default Dance;