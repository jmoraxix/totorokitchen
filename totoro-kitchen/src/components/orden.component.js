import React, { useState, useEffect, Component } from "react";
import OrdenDataService from "../services/orden.service";
import PlatilloDataService from "../services/platillo.service";
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
                <th>Activa</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{(new Date()).toLocaleDateString('en-US', dato.fechaEntrada)} | {(new Date()).toLocaleTimeString('en-US', dato.fechaEntrada)}</td>
                    <td>{(new Date()).toLocaleDateString('en-US', dato.fechaSalida)} | {(new Date()).toLocaleTimeString('en-US', dato.fechaSalida)}</td>
                    <td>{dato.mesa.numero}</td>
                    <td>{dato.activa}</td>
                    <td>
                      <Button
                        color="primary"
                        href={`${history.location.pathname}/${dato._id}`}
                      >
                        Editar
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

export function Orden() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [isNew] = useState(_id === 'new');

  useEffect(() => {
    if (!isNew){
      OrdenDataService.get(_id)
          .then(response => {
            setObjeto(response.data)
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    setCargaObjecto(true);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setObjeto(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleSubmit(e) {
    console.log("Objeto a procesar: ", objeto);
    e.preventDefault();
    if(isNew){
      OrdenDataService.create(objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      OrdenDataService.update(objeto._id, objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
    }

    goBack();
  }

  function goBack(){
    navigate(-1);
  }

  return (
    <div>
      <h2>Orden</h2>

      <form onSubmit={handleSubmit}>
        { cargaObjeto &&
            <div>
              {!isNew &&
              <div class="form-group row">
                <label for="codigo" class="col-4 col-form-label">Codigo</label>
                <div class="col-8">
                  <input name="codigo" type="text" class="form-control" value={objeto.codigo} disabled/>
                </div>
              </div>
              }
              <div className="form-group row">
                <label htmlFor="pais" className="col-4 col-form-label">Nombre</label>
                <div className="col-8">
                  <input name="pais" type="text" className="form-control" required="required" value={objeto.pais} onChange={handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <div className="offset-8 col-2">
                  <a className="btn btn-danger" onClick={goBack}>Cancelar</a>
                </div>
                <div className="col-2">
                  <button name="submit" type="submit" className="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
        }
      </form>
      
    </div>
    );
}


export function OrdenRestaurante() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [orden, setOrden] = useState({});
  const [listaPlatillos, setlListaPlatillos] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);

  useEffect(() => {
    refrescarOrden();
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

  function agregarPlatillo(codigo) {
    OrdenDataService.agregarPlatillo(codigo)
        .then(response => {
          console.log(response.data);
          this.refrescarOrden();
        })
        .catch(e => {
          console.log(e);
        });
  }

  function quitarPlatillo(codigo) {
    OrdenDataService.quitarPlatillo(orden.codigo, codigo)
        .then(response => {
          console.log(response.data);
          this.refrescarOrden();
        })
        .catch(e => {
          console.log(e);
        });
  }

  function goBack(){
    navigate(-1);
  }

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
              <Row>
                <Col><h3>Platillos:</h3></Col>
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
                    <tr key={item.platillo._id}>
                      <td>{item.cantidad}</td>
                      <td>{item.platillo.nombre}</td>
                      <td>{item.platillo.tipoPlatillo.tipo}</td>
                      <td>{item.platillo.precio}</td>
                      <td>
                        <Button color="danger" onClick={() => this.quitarPlatillo(item.platillo._id)}>Remover</Button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </Table>
            </Container>
          </div>
      }

    </div>
    );
}
