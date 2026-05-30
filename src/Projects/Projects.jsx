import styles from "./Projects.module.css";

function Projects() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.titleBox}>
          <h1>Past Projects</h1>
        </div>
        <p className={styles.subtitle}>
            Our projects focus on a variety of topics, from machine learning to economics to 
            health/physics sciences. Check out some of our highlights from previous years!
        </p>
      </header>
      <section className={styles.projectsSection}>
        <div className={styles.project}>
          <img
            src="https://via.placeholder.com/300"
            alt="Project 1"
            className={styles.image}
          />
         <div className={styles.text}>
  
            <h2>
                Student Behavior at the University of Michigan: Class Preferences of the Student Body
            </h2>

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
        </div>
        <div className={styles.project}>
          <img
            src="https://via.placeholder.com/300"
            alt="Project 2"
            className={styles.image}
          />
            <div className={styles.text}>

            <h2>Study Habits at UMich</h2>

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
            The study used scatterplots, histograms, linear models, and statistical assumption testing.
            </p>

            <p>Limitations:</p>

            <ul>
            <li>Sample size was small (n = 30)</li>
            <li>Limited diversity and small subgroup representation</li>
            <li>Self-reported data may introduce bias</li>
            </ul>

        </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;