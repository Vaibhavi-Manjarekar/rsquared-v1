import styles from "./Study.module.css";
import gpa from "../assets/gpa.png";
import major from "../assets/major-credit.png"
import result from "../assets/result.png"


function Study() {
  return (
    <div className={styles.container}>
      <p className={styles.authors}>
        By JiaChen, Baeksong, Taqyah, Ellen, Cecelia, Abigail
      </p>

      <h1 className={styles.title}>
        Study Habits at UMich
      </h1>

      <div className={styles.text}>
        <p>This study aimed to find the following:</p>

            <ul>
            <li>
                Hours spent on academic-related activities per day (internships, clubs, classes, homework)
            </li>
            <li>
                Correlations with major, academic standing, credit hours, and GPA
            </li>
            </ul>

            <p>
           Additionally, some background assumptions made included:
            </p>

            <ul>
            <li>Those in more historically rigorous programs will spend more time studying</li>
            <li>Those taking more credit hours will spend more time studying</li>
            <li>Those with a second major will spend more time studying</li>
            </ul>

            <p> The study used scatterplots, histograms, linear models, and statistical testing as well as analysing assumptions and limitations about data collected. The study noted the following limitations:</p>

            <ul>
            <li>Sample size was small (n = 30)</li>
            <li>Limited diversity and small subgroup representation</li>
            <li>Self-reported data may introduce bias</li>
            </ul>

      </div>
        <div className={styles.figurePanel}>
        <div className={styles.figure}>
            <img
            src={gpa}
            alt="Figure 1"
            />
            <p>Figure 1. Distribution of GPA of students samples</p>
        </div>

        <div className={styles.figure}>
            <img
            src={major}
            alt="Figure 2"
            />
            <p>Figure 2. Credit hours taken for different majors</p>
        </div>

        <div className={styles.figure}>
            <img
            src={result}
            alt="Figure 3"
            />
            <p>Figure 3. Error analysis of hours studied for different majors</p>
        </div>
    </div>
      <div className={styles.buttonGroup}>
        <a
          href="https://docs.google.com/document/d/1Dt5Q6XvuD8IJAXv4u2r0QHTxkPkw5hpwGQfqGPPt-ss/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          View Report
        </a>

        <a
          href="https://docs.google.com/presentation/d/1m_2buQF7KUqkJx_UUmd7cRrqTaXdZZth/edit?usp=sharing&ouid=115867220838706324031&rtpof=true&sd=true"
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

export default Study;