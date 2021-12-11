import React from 'react';
import {
  List,
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import "./css/NavBar.css";
import { Collapse } from 'react-collapse';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAdmin = this.toggleAdmin.bind(this);
    this.toggleRestaurante = this.toggleRestaurante.bind(this);
    this.state = {
      adminOpen: true,
      restauranteOpen: true
    };
  }

  toggleAdmin() {
    this.setState({
      adminOpen: !this.state.adminOpen
    });
  }
  toggleRestaurante() {
    this.setState({
      restauranteOpen: !this.state.restauranteOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar id="sidebar">
          <Nav navbar>
            <h4>Navegaci&oacute;n</h4>
            <List type="unstyled">
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <Collapse isOpened={this.props.usuario}>
                <NavItem>
                  <NavLink href="/pais">Mi usuario</NavLink>
                </NavItem>
              </Collapse>
              <NavItem>
                <NavLink onClick={this.toggleRestaurante}>Restaurante</NavLink>
              </NavItem>
              <Collapse isOpened={this.state.restauranteOpen}>
                <NavItem>
                  <NavLink href="/restaurante/mesas">Mesas</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/restaurante/cajas">Cajas</NavLink>
                </NavItem>
              </Collapse>
              <NavItem>
                <NavLink onClick={this.toggleAdmin}>Administraci&oacute;n</NavLink>
              </NavItem>
              <Collapse isOpened={this.state.adminOpen}>
                <NavItem>
                  <NavLink href="/consecutivo">Consecutivos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/restaurante">Restaurante</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/mesa">Mesas</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/caja">Cajas</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/orden">Ordenes</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/facturas">Facturas</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/platillo">Platillos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tipoPlatillo">Tipos de platillo</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tipoBebida">Tipos de Bebidas</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tipoComida">Tipos de comida</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/pais">Paises</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/empresa">Empresa</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/marca">Marcas</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tipoProducto">Tipos de producto</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/lineaComestible">Linea de comestible</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/claseComestible">Clase de comestible</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tipoComestible">Tipos de comestible</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/unidadMedida">Unidad de Medida</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/detalleUnidad">Detalle unidad</NavLink>
                </NavItem>
              </Collapse>
            </List>
          </Nav>
        </Navbar>
      </div>
    );
  }
}