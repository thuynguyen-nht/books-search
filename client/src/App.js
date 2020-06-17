import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import './App.css';
import Navbar from "./components/Navbar";
import { ToastContainer, Zoom } from 'react-toastify';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          transition={Zoom}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
        />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
          <Route exact path="/books/:id" component={null} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
