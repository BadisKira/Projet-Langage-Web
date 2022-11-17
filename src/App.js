import { Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/pageLayout";
import Home from "./pages/home/home";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<PageLayout />} >
          <Route index element={<Home />} />
          <Route path="home" element={<div>RIEN EIRNE</div>} />
        </Route>
        <Route path="*" element={<h1> ERROR 404 PAGE NOT FOUND  </h1>} />
      </Routes>
    </>
  );
}

export default App;
