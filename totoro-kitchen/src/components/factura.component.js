import React, { useState, useEffect, Component } from "react";
import FacturaDataService from "../services/factura.service";
import OrdenDataService from "../services/orden.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class Facturas extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await FacturaDataService.getAll()
      .then(response => {
        this.setState({
          data: response.data,
          dataLoaded: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  eliminarObjeto(Consecutivo){
    FacturaDataService.delete(Consecutivo)
        .then(response => {
          console.log(response.data);
          this.listarObjetos();
        })
        .catch(e => {
          console.log(e);
        });
  }

  render() {
    return (
      <>
        <Container>
        <br />
         <Row>
           <Col><h1>Facturas</h1></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Restaurante</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    { !dato.fecha ? <td></td> :
                        <td>{(new Date(dato.fecha)).toLocaleDateString('en-US')}
                          | {(new Date(dato.fecha)).toLocaleTimeString('en-US')}</td>
                    }
                    <td>{dato.cliente?.nombre}</td>
                    <td>{dato.restaurante.nombre}</td>
                    <td>{dato.total}</td>
                    <td>
                      <Button
                          color="primary"
                          href={`${history.location.pathname}/${dato._id}`}
                      >
                        Ver
                      </Button>{" "}
                      <Button color="danger" onClick={() => this.eliminarObjeto(dato._id)}>Eliminar</Button>
                    </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

      </>
    );
  }
}

export function Factura() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [factura, setFactura] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    FacturaDataService.get(_id)
        .then(response => {
          setFactura(response.data);
          setCargaObjecto(true);
          console.log(response.data);
          calcularSubtotal();
        })
        .catch(e => {
          console.log(e);
        });
  }, []);

  function calcularSubtotal(){
    setSubtotal(factura.orden.platillos?.reduce((partial_sum, item) => partial_sum + (item.platillo.precio * item.cantidad), 0));
  }


  function goBack(){
    navigate(-1);
  }

  return (
      <div>
        <div>
          <Container>
            <br />
            <Row>
              <Col><h1>Factura { factura.codigo }</h1></Col>
            </Row>
            <Table>
              <thead>
              <tr>
                <th>Cantidad</th>
                <th>Platillo</th>
                <th>Costo</th>
                <th></th>
              </tr>
              </thead>

              <tbody>
              { cargaObjeto && factura.orden?.platillos?.map((item) => (
                  <tr key={item.platillo?._id}>
                    <td>{item.cantidad}</td>
                    <td>{item.platillo?.nombre}</td>
                    <td>{item.platillo?.precio}</td>
                  </tr>
              ))}
              </tbody>
              <tfoot>
              <tr>
                <th></th>
                <th>Subtotal</th>
                <th>{subtotal}</th>
              </tr>
              <tr>
                <th></th>
                <th>IV</th>
                <th>{subtotal * 0.13}</th>
              </tr>
              <tr>
                <th></th>
                <th>Total</th>
                <th>{Math.round(subtotal * 1.13)}</th>
              </tr>
              </tfoot>
            </Table>
          </Container>
        </div>
      </div>
  );
}

export function FacturaRestaurante() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [orden, setOrden] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [listaPlatillos, setlListaPlatillos] = useState({});
  const [listaTipoPlatillo, setListaTipoPlatillo] = useState([]);
  const [cargaListaPlatillos, setCargaListaPlatillos] = useState(false);
  const [tipoPlatillo, setTipoPlatillo] = useState('');
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    OrdenDataService.getOrdenByMesa(_id)
      .then(response => {
        setOrden(response.data);
        console.log(response.data);
        setCargaObjecto(true);
        calcularSubtotal();
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  function calcularSubtotal(){
    setSubtotal(orden.platillos?.reduce((partial_sum, item) => partial_sum + (item.platillo.precio * item.cantidad), 0));
  }

  function generarFactura(){
    FacturaDataService.create({ orden: orden._id, total: Math.round(subtotal * 1.13), restaurante: orden.mesa.restaurante })
        .then(response => {
          navigate(-2);
        })
        .catch(e => {
          console.log(e);
        });
  }

  return (
    <div>
      { cargaObjeto &&
          <div>
            <Container>
              <br />
              <Row>
                <Col><h2>Generando factura para orden { orden.codigo }</h2></Col>
                <Col><Button color="success" onClick={generarFactura}>Facturar</Button></Col>
              </Row>
              <Row>
                <Col><h2>Mesa { orden.mesa?.numero } | { orden.mesa?.nombre }</h2></Col>
              </Row>
              <Table>
                <thead>
                <tr>
                  <th>Cantidad</th>
                  <th>Platillo</th>
                  <th>Tipo</th>
                  <th>Costo</th>
                </tr>
                </thead>

                <tbody>
                { cargaObjeto && orden.platillos?.map((item) => (
                    <tr key={item.platillo?._id}>
                      <td>{item.cantidad}</td>
                      <td>{item.platillo?.nombre}</td>
                      <td>{item.platillo?.tipoPlatillo?.tipo}</td>
                      <td>{item.platillo?.precio}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Subtotal</th>
                  <th>{subtotal}</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th>IV</th>
                  <th>{subtotal * 0.13}</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Total</th>
                  <th>{Math.round(subtotal * 1.13)}</th>
                </tr>
                </tfoot>
              </Table>
            </Container>
          </div>
      }

    </div>
    );
}
