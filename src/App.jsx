import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";
import Footer from "./components/Footer";

const App = () => (
  <main className="bg-blue-100/50 min-h-[100svh]">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </main>
);

export default App;
