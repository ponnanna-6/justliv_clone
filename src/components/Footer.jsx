import styles from "../styles/Footer.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from '../assets/logo1.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={Logo} className={styles.logo}/>
            <p className={styles.instagram}>
                <FaInstagram className={styles.icon} /> Connect with us on Instagram <span className={styles.heart}>♡</span>
            </p>
            <nav className={styles.links}>
                <a href="/privacy-policy">Privacy policy</a>
                <a href="/accessibility">Accessibility Statement</a>
            </nav>
            <FaLinkedin className={styles.linkedinIcon} />
            <p className={styles.copyright}>© 2024 by JustLiv</p>
        </footer>
    );
};

export default Footer;
