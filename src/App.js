import { Routes, Route } from "react-router-dom";
import KanbanLayout from "./layouts/KanbanLayout";
import PageLayout from "./layouts/pageLayout";
import Page404 from "./pages/error/page404";
import Home from "./pages/Home/home";
import Kanban from "./pages/Kanban/Kanban";
import LoginPage from "./pages/Login/LoginPage";
import ContentSidebar from "./pages/Projects/contentSidebar";
import Projects from "./pages/Projects/projects";
import ProfileTabs from "./pages/Profile/ProfileTabs";
import ProtectedRoute from "./utils/protectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<PageLayout />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/profile" element={<ProtectedRoute ><ProfileTabs /></ProtectedRoute>} />

        </Route>
        <Route path="project/:id" element={<KanbanLayout />}>
          <Route index element={<Kanban />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
