import * as React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import "./css/App.css";
import NavBar from "./NavBar";
import { Container } from 'reactstrap';

import Home from "./components/home.component";
import { Consecutivos, Consecutivo } from "./components/consecutivo.component";
import Topics, { Topic } from "./components/topic.component";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Totoro Kitchen</h1>
      </Container>

      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
      </nav>

      <Container>
        <div className="row">
          <div className="col col-lg-3"><NavBar/></div>

          <div className="col" id="contenido">
            <Routes>
              <Route path="/" element={<Home />} />

              {/**** CRUDs ****/}
              <Route path="/consecutivo" element={<Consecutivos />}/>
              <Route path="/consecutivo">
                <Route path=":_id" element={<Consecutivo />} />
              </Route>

              <Route path="/pais" element={<Paises />}/>
              <Route path="/pais">
                <Route path=":paisId" element={<Pais />} />
              </Route>
              <Route path="/topics" element={<Topics />}/>
              <Route path="/topics">
                <Route path=":topicId" element={<Topic />} />
              </Route>
              <Route path="users">
                {/* <Route path=":id" element={<UserProfile />} /> */}
              </Route>
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