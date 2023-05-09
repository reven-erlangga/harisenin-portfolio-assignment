import "./App.css";
import Navbar from "./components/Navbar/Index";
import Layout from "./components/Layout/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import PortfolioPage from "./pages/portfolio";
import ContactPage from "./pages/contact";

function App() {
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
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
