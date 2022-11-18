import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Navigation from "./Navigation";
import Student from "./Student";
// import history from "./History";
import Redirect from "./component/Redirect";

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <p>Home</p>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newroute" element={<NewRoute />} />
        <Route path="/student/:studentname" element={<Student />} />
        <Route path="/student/:studentname/:studentno" element={<Student />} />
        <Route element={<Error />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
