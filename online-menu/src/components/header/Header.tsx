import styles from "./header.module.scss";
import logo from "../../assets/logo/Capture.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

const Header = (): JSX.Element => {
  AOS.init();
  return (
    <header className={styles.header}>
      <div className={styles.shadow}>
        <img src={logo} alt="logo" data-aos="flip-left" />
        <h2>! سلام</h2>
        <TypeAnimation
          sequence={["به سفره خانه ماهور خوش آمدید", 1000]}
          wrapper="h4"
          speed={1}
          style={{ fontSize: "1.2rem", display: "inline-block" }}
          repeat={1}
        />
      </div>
    </header>
  );
};

export default Header;
