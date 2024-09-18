import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
      {/* <div className="h-[100vh] w-[100vw] bg-black"></div> */}
    </>
  );
}

export default App;
