import { useState, useEffect, lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import styles from "./app.module.scss";

// components
import Modal from "./components/modal/Modal";
import Spinner from "./components/spinner/Spinner";

// pages
const Main = lazy(() => import('./pages/main/Main'));

function App(): JSX.Element {
  // states
  const [modal, setModal] = useState<boolean>(false);

  // lifecycle
  useEffect(() => {
    setModal(true);
  }, []);

  return (
    <main className={styles.app}>
      <Suspense fallback={<Spinner />}>
        {modal === false && <Modal modal={{ setModal }} />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </main>
  );
}

export default App;
