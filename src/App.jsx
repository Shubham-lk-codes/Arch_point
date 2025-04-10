import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ExpertiesPage from "./pages/ExpertiesPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";

export default function App() {
  return (
    <BrowserRouter>
    
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experties" element={<ExpertiesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}