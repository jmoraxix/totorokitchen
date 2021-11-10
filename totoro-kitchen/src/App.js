import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import NavBar from "./NavBar";
import { Container } from 'reactstrap';

import Home from "./components/home.component";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Totoro Kitchen</h1>
      </Container>

      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
      </nav>

      <Container>
        <div className="row">
        
          <div className="col-3"><NavBar/></div>

          <div className="col" id="contenido">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="about" element={<About />} /> */}
            </Routes>
          </div>
        </div>
      </Container>

      <div className="footer mt-auto py-3">
        <Container>
          <p className="text-center text-muted">
            © 2021 
          </p>
        </Container>
      </div>
      
    </div>
  );
}

export default App;