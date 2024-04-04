import styles from "./header.module.scss";
import logo from "../../assets/logo/Capture.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = (): JSX.Element => {
  AOS.init();
  return (
    <header className={styles.header}>
      <div className={styles.shadow}>
        <img src={logo} alt="logo" data-aos="flip-left" />
        <h3 data-aos="fade-up">ساعت کاری ۷ صبح تا ۱۲ شب</h3>
        <p data-aos="fade-right" data-aos-delay="300">
          Mohamadrezanabilo@gmail.com
        </p>
        <p data-aos="fade-left" data-aos-delay="300">
          09393119030
        </p>
      </div>
    </header>
  );
};

export default Header;
