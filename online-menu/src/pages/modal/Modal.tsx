import { useNavigate } from "react-router-dom"; 
import styles from "./modal.module.scss";

const Modal = (): JSX.Element => {
  // navigator
  const navigate = useNavigate();

  return (
      <section className={styles.modal}>
        <h3>ساعت کاری ۷ صبح تا ۱۲ شب</h3>
        <p>
          Mohamadrezanabilo@gmail.com
        </p>
        <p>
          09393119030
        </p>
        <button onClick={() => navigate("/hookah")}>نمایش منو</button>
      </section>
  );
};

export default Modal;
