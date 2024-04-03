import { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import styles from "./app.module.scss";

// components
import Modal from "./components/modal/Modal";

function App(): JSX.Element {
  // states
  const [modal, setModal] = useState<boolean>(false);

  // lifecycle
  useEffect(() => {
    setModal(true);
  }, []);

  return (
    <main className={styles.app}>
      {modal && <Modal modal={{setModal}}/>}
      <BrowserRouter>
        <Routes>
          <Route path="" element={""} />
          <Route path="" element={""} />
          <Route path="" element={""} />
          <Route path="" element={""} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
