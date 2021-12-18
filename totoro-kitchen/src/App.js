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
import { Clientes, Cliente } from "./components/cliente.component";
import { Restaurantes, Restaurante } from "./components/restaurante.component";
import { Mesas, Mesa, MesasRestaurante } from "./components/mesa.component";
import { Cajas, Caja, CajasRestaurante } from "./components/caja.component";
import { Ordenes, OrdenRestaurante } from "./components/orden.component";
import { Facturas, Factura, FacturaRestaurante } from "./components/factura.component";
import { Paises, Pais } from "./components/pais.component";
import { Bitacoras, Bitacora } from "./components/bitacora.component";
import { Empresas, Empresa } from "./components/empresa.component";
import { Eventos, Evento } from "./components/evento.component";
import { Empleados, Empleado } from "./components/empleado.component";
import { Marcas, Marca } from "./components/marca.component";
import { Platillos, Platillo } from "./components/platillo.component";
import { Productos, Producto } from "./components/producto.component";
import { TipoBebidas, TipoBebida } from "./components/tipoBebida.component";
import { TipoComidas, TipoComida } from "./components/tipoComida.component";
import { TipoComestibles, TipoComestible } from "./components/tipoComestible.component";
import { LineaComestibles, LineaComestible } from "./components/lineaComestible.component";
import { ClaseComestibles, ClaseComestible } from "./components/claseComestible.component";
import { TipoPlatillos, TipoPlatillo } from "./components/tipoPlatillo.component";
import { TipoProductos, TipoProducto } from "./components/tipoProducto.component";
import { UnidadMedidas, UnidadMedida } from "./components/unidadMedidas.component";
import { Usuarios, Usuario } from "./components/usuario.component";
import { DetalleUnidades, DetalleUnidad } from "./components/detalleUnidad.component";
import { Proveedor, Proveedores } from "./components/proveedor.component";

function App() {
  return (
    <div className="App">
      <Container>
        <div className="row">
          <div className="col">
            <h1>Totoro Kitchen</h1>
          </div>
          {/*<div className="col-3">*/}
          {/*  <div className="justify-content-end">*/}
          {/*    <div>*/}
          {/*      Signed in as: <a href="#login">Mark Otto</a>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
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

              <Route path="/restaurante/mesas" element={<MesasRestaurante />}/>
              <Route path="/restaurante/mesas">
                <Route path=":_id" element={<OrdenRestaurante />} />
                <Route path=":_id/facturar" element={<FacturaRestaurante />} />
              </Route>
              <Route path="/restaurante/cajas" element={<CajasRestaurante />}/>

              {/**** CRUDs ****/}
              <Route path="/consecutivo" element={<Consecutivos />}/>
              <Route path="/consecutivo">
                <Route path=":_id" element={<Consecutivo />} />
              </Route>
              <Route path="/cliente" element={<Clientes />}/>
              <Route path="/cliente">
                <Route path=":_id" element={<Cliente />} />
              </Route>
              <Route path="/restaurante" element={<Restaurantes />}/>
              <Route path="/restaurante">
                <Route path=":_id" element={<Restaurante />} />
              </Route>
              <Route path="/mesa" element={<Mesas />}/>
              <Route path="/mesa">
                <Route path=":_id" element={<Mesa />} />
              </Route>
              <Route path="/caja" element={<Cajas />}/>
              <Route path="/caja">
                <Route path=":_id" element={<Caja />} />
              </Route>
              <Route path="/orden" element={<Ordenes />}/>
              <Route path="/factura" element={<Facturas />}/>
              <Route path="/factura">
                <Route path=":_id" element={<Factura />} />
              </Route>

              <Route path="/pais" element={<Paises />}/>
              <Route path="/pais">
                <Route path=":_id" element={<Pais />} />
              </Route>
              <Route path="/bitacora" element={<Bitacoras />}/>
              <Route path="/bitacora">
                <Route path=":_id" element={<Bitacora />} />
              </Route>
              <Route path="/empresa" element={<Empresas />}/>
              <Route path="/empresa">
                <Route path=":_id" element={<Empresa />} />
              </Route>
              <Route path="/evento" element={<Eventos />}/>
              <Route path="/evento">
                <Route path=":_id" element={<Evento />} />
              </Route>
              <Route path="/empleado" element={<Empleados />}/>
              <Route path="/empleado">
                <Route path=":_id" element={<Empleado />} />
              </Route>
              <Route path="/marca" element={<Marcas />}/>
              <Route path="/marca">
                <Route path=":_id" element={<Marca />} />
              </Route>
              <Route path="/platillo" element={<Platillos />}/>
              <Route path="/platillo">
                <Route path=":_id" element={<Platillo />} />
              </Route>
              <Route path="/producto" element={<Productos />}/>
              <Route path="/producto">
                <Route path=":_id" element={<Producto />} />
              </Route>
              <Route path="/proveedor" element={<Proveedores />}/>
              <Route path="/proveedor">
                <Route path=":_id" element={<Proveedor />} />
              </Route>
              <Route path="/detalleUnidad" element={<DetalleUnidades />}/>
              <Route path="/detalleUnidad">
                <Route path=":_id" element={<DetalleUnidad />} />
              </Route>
              <Route path="/tipoBebida" element={<TipoBebidas />}/>
              <Route path="/tipoBebida">
                <Route path=":_id" element={<TipoBebida />} />
              </Route>
              <Route path="/tipoComida" element={<TipoComidas />}/>
              <Route path="/tipoComida">
                <Route path=":_id" element={<TipoComida />} />
              </Route>
              <Route path="/tipoComestible" element={<TipoComestibles />}/>
              <Route path="/tipoComestible">
                <Route path=":_id" element={<TipoComestible />} />
              </Route>
              <Route path="/lineaComestible" element={<LineaComestibles />}/>
              <Route path="/lineaComestible">
                <Route path=":_id" element={<LineaComestible />} />
              </Route>
              <Route path="/claseComestible" element={<ClaseComestibles />}/>
              <Route path="/claseComestible">
                <Route path=":_id" element={<ClaseComestible />} />
              </Route>
              <Route path="/tipoPlatillo" element={<TipoPlatillos />}/>
              <Route path="/tipoPlatillo">
                <Route path=":_id" element={<TipoPlatillo />} />
              </Route>
              <Route path="/tipoProducto" element={<TipoProductos />}/>
              <Route path="/tipoProducto">
                <Route path=":_id" element={<TipoProducto />} />
              </Route>
              <Route path="/unidadMedida" element={<UnidadMedidas />}/>
              <Route path="/unidadMedida">
                <Route path=":_id" element={<UnidadMedida />} />
              </Route>
              <Route path="/usuario" element={<Usuarios />}/>
              <Route path="/usuario">
                <Route path=":_id" element={<Usuario />} />
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