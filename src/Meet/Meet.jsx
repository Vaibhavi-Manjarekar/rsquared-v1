import styles from "./Meet.module.css";
import { FaLinkedin } from "react-icons/fa";
import person1 from "../assets/Abigail.jpg";
import person2 from "../assets/Finnea.jpg";
import person3 from "../assets/Lily.jpg";
import person4 from "../assets/Vaibhavi.jpg";

import backgroundImage from "../assets/umich_campus2.jpg";

function Meet() {
    return (
        <section className={styles.container}
        style={{
            backgroundImage: `
            linear-gradient(rgba(0, 39, 76, 0.85), #00274C),
            url(${backgroundImage})
            `,
        }}
        >
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
                    <h2 className={styles.name}>Abigail Shi</h2>
                    <p className={styles.subheader}>
                        President • Junior • Biology Major • Statistics Minor
                    </p>
                    <p className={styles.bio}>
                       I'm passionate about research because I think learning about new things is both important and fun! Especially in the day and age 
                        of having so much information available at our fingertips, I believe it's important to be able to evaluate information and also 
                        understand it with an open mind. In my spare time, I enjoy dancing and drawing!
                    </p>
                    <a 
                        href="https://www.linkedin.com/in/abigail-shi-082113328/"
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
                        className={`${styles.image} ${styles.rotatedImage}`}
                    />
                    <div className = {styles.infoSection}>
                    <h2 className={styles.name}>Finnea Kohtz</h2>
                    <p className={styles.subheader}>
                        Vice-President • Sophomore • Biochemsitry and statistics major
                    </p>
                    <p className={styles.bio}>
                        My research interests include rural environmental health, human exposure, and pollutants. Outside 
                        of R-Squared, I am an undergraduate research assistant at the Manz Lab, an environmental chemistry 
                        lab. Aside from research, I enjoy playing the bass, writing music, and embroidery!​​​​​​​​​​
                    </p>
                    <a 
                        href="https://www.linkedin.com/in/finnea-kohtz-006aab346/"
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
                    <h2 className={styles.name}>Baeksong Yoo</h2>
                    <p className={styles.subheader}>
                        Treasurer • Sophomore •  Biochemistry major
                    </p>
                    <p className={styles.bio}>
                        Hi! I’m Baeksong (Lily) Yoo and I am a rising senior majoring in biochemistry 
                        on a pre-med track. I am doing research at Michigan Medicine and have mainly focused on 
                        health science research in R-squared.
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
                    <h2 className={styles.name}>Vaibhavi Rajesh</h2>
                    <p className={styles.subheader}>
                        Web-Developer • Sophomore • Electrical Engineering and Computer Engineering major
                    </p>
                    <p className={styles.bio}>
                        I am interested in machine learning, hardware and especially its applications in the sapce industry. Outside of R-Squared,
                        I am part of NASA's SunRISE project focused on analyzing low-frequency radio emissions to support NASA's solar imaging efforts
                        for coronal mass ejections. Aside from research, I love to dance and play the guitar! 
                    </p>

                    <a 
                        href="https://www.linkedin.com/in/vaibhavi-manjarekar/"
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