import spinner from "../../assets/gif/Dual Ring@1x-1.3s-200px-200px.gif";
import styles from "./spinner.module.scss";

const Spinner = (): JSX.Element => {
  return (
    <section className={styles.spinner}>
      <img src={spinner} alt="loading..." />
    </section>
  );
};

export default Spinner;
