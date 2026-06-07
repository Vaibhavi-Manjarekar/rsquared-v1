import styles from "./StudentB.module.css";
import class_time from "../assets/class-time.png";
import sleep from "../assets/sleep-vs-time.png"
import time from "../assets/time-preference.png"


function StudentB() {
  return (
    <div className={styles.container}>
      <p className={styles.authors}>
        By R-Squared Behaviour Group @ U-M
      </p>

      <h1 className={styles.title}>
        Student Behavior at the University of Michigan:
        Class Preferences of the Student Body
      </h1>

      <div className={styles.text}>
        <p>
            This study aimed to provide a data-based study on the preferences of the UMich student body for ideal class times by identifying measurable patterns. The research questions were:
        </p>

        <ul>
            <li>Do university students prefer earlier or later classes?</li>
            <li>Do factors like living situation, college, or sleep time affect this?</li>
        </ul>

        <p>
            The hypothesis was that the student body prefers later class times regardless of demographics. Methodologies for statistical analysis include Pearson’s Chi-Squared test and normal distribution.
        </p>

        <p>Key findings include:</p>

        <ul>
            <li>Students broadly agree on preferring later classes</li>
            <li>No significant subgroup variation was found</li>
            <li>Sleep time does not predict class preference</li>
        </ul>

      </div>
        <div className={styles.figurePanel}>
        <div className={styles.figure}>
            <img
            src={class_time}
            alt="Figure 1"
            />
            <p>Figure 1. Distribution of preferred class times</p>
        </div>

        <div className={styles.figure}>
            <img
            src={sleep}
            alt="Figure 2"
            />
            <p>Figure 2. Sleeping times vs Class Preference</p>
        </div>

        <div className={styles.figure}>
            <img
            src={time}
            alt="Figure 3"
            />
            <p>Figure 3. Credits and Year of Study vs Time Preferences</p>
        </div>
    </div>
      <div className={styles.buttonGroup}>
        <a
          href="https://docs.google.com/document/d/1JXJ2CItBa1kSiwM0AhWX-TDhbym2eK4ZwzctJsrXd9g/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          View Report
        </a>

        <a
          href="https://docs.google.com/presentation/d/122yrGUqV6VWAYNy9RqD1GMvbRNil3ssiTOukKg5hVXg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Presentation Slides
        </a>

      
      </div>
    </div>
  );
}

export default StudentB;