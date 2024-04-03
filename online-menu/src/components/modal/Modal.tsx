import React from "react";
import styles from "./modal.module.scss";
import logo from "../../assets/logo/Capture.png";
import { TypeAnimation } from "react-type-animation";

const Modal = (props: {
  modal: {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
}): JSX.Element => {
  return (
    <section className={styles.modal}>
      <img src={logo} alt="mahoor" />
      <h1>! سلام</h1>
      <TypeAnimation
        sequence={["به سفره خانه ماهور خوش آمدید", 1000]}
        wrapper="h3"
        speed={60}
        style={{ fontSize: "1.2rem", display: "inline-block" }}
        repeat={1}
      />
      <button onClick={() => props.modal.setModal(false)}>نمایش منو</button>
    </section>
  );
};

export default Modal;
