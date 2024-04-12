import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        target="_blank"
        to={"https://www.linkedin.com/in/mojtaba-nabilo-9448aa23b/"}
      >
        Look At Me !
      </Link>
    </footer>
  );
};

export default Footer;
