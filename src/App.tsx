import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Container from "./Components/Container";
import MobileViewNav from "./Components/Navbar/mobileView";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className=" bg-smoky-black   ">
      <BrowserRouter>
        <Layout>
          <SideBar />
          <Container>
            <NavBar />
            <Routes>
              <Route path="" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
          <MobileViewNav />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
