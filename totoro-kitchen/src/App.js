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
import { Paises, Pais } from "./components/pais.component";
import { Empresas, Empresa } from "./components/empresa.component";
import { Marcas, Marca } from "./components/marca.component";
import { TipoBebidas, TipoBebida } from "./components/tipoBebida.component";
import { TipoComestibles, TipoComestible } from "./components/tipoComestible.component";
import { TipoPlatillos, TipoPlatillo } from "./components/tipoPlatillo.component";
import { DetalleUnidades, DetalleUnidad } from "./components/detalleUnidad.component";

function App() {
  return (
    <div className="App">
      <Container>
        <div className="row">
          <div className="col">
            <h1>Totoro Kitchen</h1>
          </div>
          <div className="col-3">
            <div className="justify-content-end">
              <div>
                Signed in as: <a href="#login">Mark Otto</a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="/">Library</a></li>
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
                <Route path=":_id" element={<Pais />} />
              </Route>
              <Route path="/empresa" element={<Empresas />}/>
              <Route path="/empresa">
                <Route path=":_id" element={<Empresa />} />
              </Route>
              <Route path="/marca" element={<Marcas />}/>
              <Route path="/marca">
                <Route path=":_id" element={<Marca />} />
              </Route>

              <Route path="/detalleUnidad" element={<DetalleUnidades />}/>
              <Route path="/detalleUnidad">
                <Route path=":_id" element={<DetalleUnidad />} />
              </Route>
              <Route path="/tipoBebida" element={<TipoBebidas />}/>
              <Route path="/tipoBebida">
                <Route path=":_id" element={<TipoBebida />} />
              </Route>
              <Route path="/tipoComestible" element={<TipoComestibles />}/>
              <Route path="/tipoComestible">
                <Route path=":_id" element={<TipoComestible />} />
              </Route>
              <Route path="/tipoPlatillo" element={<TipoPlatillos />}/>
              <Route path="/tipoPlatillo">
                <Route path=":_id" element={<TipoPlatillo />} />
              </Route>

              {/**** Usuarios ****/}
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