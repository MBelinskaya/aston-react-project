import { Route, BrowserRouter, Routes } from "react-router-dom";
import routes from "../../routes/routes.jsx";
import Header from "../../components/Header/Header.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
