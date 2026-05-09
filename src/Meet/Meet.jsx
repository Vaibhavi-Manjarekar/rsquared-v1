import styles from "./Meet.module.css";
import { FaLinkedin } from "react-icons/fa";
import person1 from "../assets/r-squared logo.jpg";
import person2 from "../assets/r-squared logo.jpg";
import person3 from "../assets/r-squared logo.jpg";
import person4 from "../assets/r-squared logo.jpg";

function Meet() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Meet the E-Board!</h1>
            <div className={styles.line}></div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img 
                        src={person1} 
                        alt="President" 
                        className={styles.image}
                    />
                    <div className = {styles.infoSection}>
                    <h2 className={styles.name}>Abigail Shi, President</h2>
                    <p className={styles.bio}>
                        Passionate about statistical research and public health analytics.
                    </p>
                    <a 
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.linkedin}
                    >
                        <FaLinkedin />
                    </a>
                    </div> 
                </div>
                <div className={styles.card}>
                    <img 
                        src={person2} 
                        alt="Member" 
                        className={styles.image}
                    />
                    <div className = {styles.infoSection}>
                    <h2 className={styles.name}>John Smith</h2>
                    <p className={styles.bio}>
                        Interested in computational modeling and data visualization.
                    </p>
                    <a 
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.linkedin}
                    >
                        <FaLinkedin />
                    </a>
                    </div>
                </div>
                <div className={styles.card}>
                    <img 
                        src={person3} 
                        alt="Member" 
                        className={styles.image}
                    />
                    <div className = {styles.infoSection}>
                    <h2 className={styles.name}>Emily Chen</h2>

                    <p className={styles.bio}>
                        Focused on machine learning applications in healthcare research.
                    </p>
                    <a 
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.linkedin}
                    >
                        <FaLinkedin />
                    </a>
                    </div>
                </div>
                <div className={styles.card}>
                    <img 
                        src={person4} 
                        alt="Member" 
                        className={styles.image}
                    />
                    <div className = {styles.infoSection}>
                    <h2 className={styles.name}>Michael Lee</h2>

                    <p className={styles.bio}>
                        Dedicated to building impactful and accessible research tools.
                    </p>

                    <a 
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.linkedin}
                    >
                        <FaLinkedin />
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Meet;