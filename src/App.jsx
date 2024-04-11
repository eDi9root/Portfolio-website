import Nav from "./pages/Nav"
import Home from "./pages/Home/Home"
import Footer from "./pages/Footer"
import Projects from "./pages/Projects/Projects"

import Particles from "./Particles"
import './index.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {


  return (
    <Router>
      
      <Particles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App
