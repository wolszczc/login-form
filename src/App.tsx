import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import { AuthProvider } from "./lib/auth";
import PrivateRoute from "./components/atoms/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
