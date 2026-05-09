import styles from './Navigation.module.css'
import logo from "../assets/r-squared logo.jpg";

function Navigation(){
    return (
    <nav className={styles.navbar}>
    <img src={logo} alt="Logo" className={styles.logo} />
      
      <ul className = {styles.navLinks}>
        <li><a href="/projects">projects.</a></li>
        <li><a href="#about">about.</a></li>
        <li><a href="/contact">contact.</a></li>
        <li><a href="/events">events.</a></li>
      </ul>
    </nav>
  );
}
export default Navigation