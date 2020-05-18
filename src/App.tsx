import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
      </Router>
    </div>
  );
}

export default App;
