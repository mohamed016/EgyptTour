import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import NavBar from "./components/NavBar";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <Router>
      <NavBar />
      <RoutesApp />
    </Router>
  );
}

export default App;
