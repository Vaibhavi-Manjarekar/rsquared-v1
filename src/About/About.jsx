import styles from "./About.module.css";
import { useEffect, useRef, useState } from "react";
import { FaPen, FaChartPie, FaDesktop } from "react-icons/fa";
import logo from "../assets/umichM.png";


function About() {
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setVisible(true);
        }
        },
        { threshold: 0.3 }
    );

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
    }, []);

    return (
        <div id="about"  ref={sectionRef} className={styles.container}>  
        <img src={logo} alt="Logo" className={styles.logo} />    
            <h1 className={`${styles.title} ${visible ? styles.show : ""}`}>About Us</h1>
            <div className={styles.line}></div>
            <p 
                className={`${styles.text} ${visible ? styles.show : ""}`}>
                R-Squared hopes to help students interested in research to gain vital skills. 
                We believe research should be practically significant and drive change. 
                We use statistical programs to explore data and then report findings in an engaging, informative format.
            </p>
            <div className={styles.subsection}>
                
                <div className={styles.card}>
                    <FaPen size = {30} color = "#730031"  className={styles.icon} />
                    <p className = {styles.cardTitle}>Projects</p>
                    <p>Complete a semester-long project focused on a topic you’re passionate about. 
                        You’ll have the freedom to design and shape the project in a way that best reflects 
                        your interests and goals!
                    </p>
                </div>

                <div className={styles.card}>
                    <FaChartPie size = {30} color = "#007369" className={styles.icon} />
                    <p className = {styles.cardTitle}>Showcase</p>
                    <p>Share your findings with your classmates at the end of the semester and take 
                        advantage of the opportunity to have your work published as well.
                    </p>
                </div>

                <div className={styles.card}>
                    <FaDesktop size = {30} color = "#730071" className={styles.icon} />
                    <p className = {styles.cardTitle}>Workshops</p>
                    <p>Participate in workshops throughout the semester to build both technical 
                        and interpersonal skills essential for research. Expand your toolkit to 
                        better support your academic and professional growth.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default About