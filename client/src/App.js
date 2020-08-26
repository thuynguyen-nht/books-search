import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';
import Navbar from "./components/Navbar";
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
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
          <Route exact path="/" component={Search} g />
          <Route path="/bookshelf" component={Saved} />
          <Route exact path="/books/:id" component={null} />
          <Route component={null} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
