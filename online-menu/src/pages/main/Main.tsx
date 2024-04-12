import { useEffect } from "react";
import styles from "./main.module.scss";
import { Outlet, useNavigate } from "react-router-dom";

// components
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";

const Main = (): JSX.Element => {
  // navigator
  const navigate = useNavigate();

  // lifecycle
  useEffect(() => {
    navigate("/modal");
  }, [])

  return (
    <main className={styles.main}>
      <Header />
      <Categories />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Main;
