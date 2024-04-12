import { useEffect, lazy, Suspense } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import styles from "./app.module.scss";

// components
import Spinner from "./components/spinner/Spinner";

// pages
const Main = lazy(() => import("./pages/main/Main"));
const Foods = lazy(() => import("./pages/foods/Foods"));
const Modal = lazy(() => import("./pages/modal/Modal"));
const Hookah = lazy(() => import("./pages/hokah/Hookah"));
const ColdDrink = lazy(() => import("./pages/cold-drink/ColdDrink"));
const HotDrink = lazy(() => import("./pages/hot-drink/HotDrink"));

function App(): JSX.Element {
  // navigator
  const navigate = useNavigate();

  // lifecycle
  useEffect(() => {
    setTimeout(() => {
      navigate("/modal");
    }, 2000);
  }, []);

  return (
    <main className={styles.app}>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route path="/cold-drink" element={<ColdDrink />} />
            <Route path="/hot-drink" element={<HotDrink />} />
            <Route path="/food" element={<Foods />} />
            <Route path="/hookah" element={<Hookah />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/*" element={<Navigate to={'hookah'} />} />
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
