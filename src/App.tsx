import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import "./App.css";
import Navbar from "./components/Navbar/Index";
import Sidebar from "./components/Sidebar/Index";
import Layout from "./components/Layout/Index";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import WorkExperiencePage from "./pages/work-experience";
import ContactPage from "./pages/contact";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  function handleTheme(e) {
    e.preventDefault();
    const currentTheme = localStorage.theme;
    console.log(currentTheme);
    if (currentTheme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar>
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-sm">CV</span>
            </div>
          </div>
        </Navbar>

        <Layout>
          <Routes>
            <Route index path="/" element={<AboutPage />} />
            <Route path="/work-experience" element={<WorkExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
