import React from "react";

import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import Logo from "./components/Logo/Logo";
import Post from "./components/Post/Post";
import EditPost from "./components/EditPost/EditPost";
import Drog from "./components/Drog/Drog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Route exact path="/" component={Main} />
        <Route exact path="/posts/:category/:postId" component={Post} />
        <Route exact path="/edit" component={EditPost} />
        <Route exact path="/drog" component={Drog} />
      </BrowserRouter>
    </div>
  );
}

export default App;
