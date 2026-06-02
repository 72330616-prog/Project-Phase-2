import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Tyre Gym</h2>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Programs">Programs</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Programs" element={<Programs />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <footer>
        <p>&copy; 2026 Tyre Gym</p>
      </footer>
    </div>
  );
}

export default App;
