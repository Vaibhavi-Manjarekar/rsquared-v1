import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import um from "../assets/umich-studying.jpg";
import study from "../assets/study-habit.jpg";

function Projects() {
  return (
    <div>
      <header className={styles.header}>
        <p className={styles.subtitle}>
          Our projects focus on a variety of topics, from machine learning to economics to
          health/physics sciences. Check out some of our highlights from previous years!
        </p>
      </header>

      <div className={styles.line}></div>

      <section className={styles.projectsSection}>

        {/* PROJECT 1 */}
        <div className={styles.project}>
          <img src={um} alt="Project 1" className={styles.image} />

          <div className={styles.rightSide}>
            <div className={styles.text}>
              <h2>
                Student Behavior at the University of Michigan: Class Preferences of the Student Body
              </h2>
            </div>

            <Link to="/student-b" className={styles.learnMore}>
              Learn More →
            </Link>
          </div>
        </div>

        {/* PROJECT 2 (REVERSED) */}
        <div className={`${styles.project} ${styles.reverse}`}>
          <img src={study} alt="Project 2" className={styles.image} />

          <div className={styles.rightSide}>
            <div className={styles.text}>
              <h2>Study Habits at UMich</h2>
            </div>

            <Link to="/study" className={styles.learnMore}>
              Learn More →
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Projects;