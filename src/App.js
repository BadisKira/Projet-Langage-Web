import { Routes, Route } from "react-router-dom";
import KanbanLayout from "./layouts/KanbanLayout";
import PageLayout from "./layouts/pageLayout";
import Home from "./pages/Home/home";
import Kanban from "./pages/Kanban/Kanban";
import LoginPage from "./pages/Login/LoginPage";
import Projects from "./pages/Project/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<PageLayout />} >
          <Route index element={<Home />} />
          <Route path="home" element={<div>RIEN EIRNE</div>} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="kanban" element={<KanbanLayout />}>
          <Route index element={<Kanban />} />
        </Route>
        <Route path="*" element={<h1> ERROR 404 PAGE NOT FOUND  </h1>} />
      </Routes>
    </>
  );
}

export default App;
