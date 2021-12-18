import React, { useState, useEffect, Component } from "react";
import OrdenDataService from "../services/orden.service";
import PlatilloDataService from "../services/platillo.service";
import TipoPlatilloDataService from "../services/tipoPlatillo.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class Ordenes extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await OrdenDataService.getAll()
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
    OrdenDataService.delete(Consecutivo)
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
           <Col><h1>Ordenes</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Entrada</th>
                <th>Salida</th>
                <th>Mesa</th>
                <th>Restaurante</th>
                <th>Activa</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    { !dato.fechaEntrada ? <td></td> :
                      <td>{(new Date(dato.fechaEntrada)).toLocaleDateString('en-US')}
                      | {(new Date(dato.fechaEntrada)).toLocaleTimeString('en-US')}</td>
                    }
                    { !dato.fechaSalida ? <td></td> :
                      <td>{(new Date(dato.fechaSalida)).toLocaleDateString('en-US')}
                      | {(new Date(dato.fechaSalida)).toLocaleTimeString('en-US')}</td>
                    }
                    <td>{dato.mesa.numero}</td>
                    <td>{dato.mesa.restaurante?.nombre}</td>
                    <td>{dato.activa ? 'Si' : 'No'}</td>
                    <td>
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

export function OrdenRestaurante() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [orden, setOrden] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [listaPlatillos, setlListaPlatillos] = useState({});
  const [listaTipoPlatillo, setListaTipoPlatillo] = useState([]);
  const [cargaListaPlatillos, setCargaListaPlatillos] = useState(false);
  const [tipoPlatillo, setTipoPlatillo] = useState('');

  useEffect(() => {
    refrescarOrden();

    TipoPlatilloDataService.getAll()
      .then(response => {
        setListaTipoPlatillo(response.data)
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  function refrescarOrden(){
    OrdenDataService.getOrdenByMesa(_id)
      .then(response => {
        setOrden(response.data);
        console.log(response.data);
        setCargaObjecto(true);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function agregarPlatillo(e) {
    const codigo = e.target.value;
    OrdenDataService.agregarPlatillo(orden._id, codigo)
        .then(response => {
          console.log(response.data);
          refrescarOrden();
        })
        .catch(e => {
          console.log(e);
        });
  }

  function quitarPlatillo(e) {
    const codigo = e.target.value;
    OrdenDataService.quitarPlatillo(orden._id, codigo)
        .then(response => {
          console.log(response.data);
          refrescarOrden();
        })
        .catch(e => {
          console.log(e);
        });
  }

  const cambioTipoPlatillo = e => {
    setTipoPlatillo(listaTipoPlatillo.find( tipo => tipo._id === e.target.value).tipo)
    PlatilloDataService.findByTipo(e.target.value)
        .then(response => {
          setlListaPlatillos(response.data)
          setCargaListaPlatillos(true);
        })
        .catch(e => {
          console.log(e);
        });
  };

  function goBack(){
    navigate(-1);
  }

  const ColoredLine = ({ color }) => (
      <hr
          style={{
            color: color,
            backgroundColor: color,
            height: 3
          }}
      />
  );

  return (
    <div>
      { cargaObjeto &&
          <div>
            <Container>
              <br />
              <Row>
                <Col><h1>Orden { orden.codigo }</h1></Col>
                <Col><Button color="success" href={`${history.location.pathname}/facturar`}>Facturar</Button></Col>
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
                  <th></th>
                </tr>
                </thead>

                <tbody>
                { cargaObjeto && orden.platillos?.map((item) => (
                    <tr key={item.platillo?._id}>
                      <td>{item.cantidad}</td>
                      <td>{item.platillo?.nombre}</td>
                      <td>{item.platillo?.tipoPlatillo?.tipo}</td>
                      <td>{item.platillo?.precio}</td>
                      <td>
                        <Button color="danger" value={item._id} onClick={quitarPlatillo}>Remover</Button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </Table>

              <br/>
              <br/>
              <br/>
              <ColoredLine color="white" />
              <br/>
              <br/>
              <br/>

              <Row>
                <Col><h3>Platillos</h3></Col>
              </Row>
              <div className="form-group row">
                <label htmlFor="tipoPlatillo" className="col-4 col-form-label">Tipo de platillo</label>
                <div className="col-8">
                  <select name="tipoPlatillo" className="form-select" onChange={cambioTipoPlatillo}>
                    <option>Seleccione una opcion</option>
                    { listaTipoPlatillo.map(({ _id, tipo }, index) => <option value={_id} >{tipo}</option>) }
                  </select>
                </div>
              </div>

              { cargaListaPlatillos &&
              <Table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Tipo</th>
                    <th>Detalle</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                { cargaListaPlatillos && listaPlatillos?.map((dato) => (
                    <tr key={dato._id}>
                      <td>{dato.nombre}</td>
                      <td>{dato.precio}</td>
                      <td>{dato.tipoComida ? dato.tipoComida?.tipo : dato.tipoBebida?.tipo}</td>
                      <td>{dato.detalle}</td>
                      <td>
                        <Button color="success" value={dato._id} onClick={agregarPlatillo}>Agregar</Button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </Table>
              }
            </Container>
          </div>
      }

    </div>
    );
}
