import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ExpertiesPage from "./pages/ExpertiesPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import Project from "./components/Project";
import LoadingScreen from "./components/LoadingScreen"; // Make sure this exists

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 sec loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experties" element={<ExpertiesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects/:slug" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
