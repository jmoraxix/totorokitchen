import React, { useState, useEffect, Component } from "react";
import CajaDataService from "../services/caja.service";
import RestauranteDataService from "../services/restaurante.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';
import MesaDataService from "../services/mesa.service";

export class Cajas extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await CajaDataService.getAll()
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

  eliminarObjeto(_id){
    CajaDataService.delete(_id)
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
           <Col><h1>Cajas</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Dinero</th>
                <th>Abierta</th>
                <th>Restaurante</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.descripcion}</td>
                    <td>{dato.dinero}</td>
                    <td>{dato.abierta ? 'Si' : 'No'}</td>
                    <td>{dato.restaurante?.nombre}</td>
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

export function Caja() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [listaRestaurantes, setListaRestaurantes] = useState([]);
  const [isNew] = useState(_id === 'new');

  const onSwitchAction = () => {
    setObjeto(prevState => ({
      ...prevState,
      abierta: !objeto.abierta
    }));
  };

  useEffect(() => {
    if (!isNew)
      CajaDataService.get(_id)
        .then(response => {
          setObjeto(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

    RestauranteDataService.getAll()
      .then(response => {
        setListaRestaurantes(response.data)
      })
      .catch(e => {
        console.log(e);
      });

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
      CajaDataService.create(objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      CajaDataService.update(objeto._id, objeto)
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
      <h2>Caja</h2>

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
          <div class="form-group row">
            <label class="col-4 col-form-label">Descripcion</label>
            <div class="col-8">
              <input name="descripcion" type="text" class="form-control" value={objeto.descripcion} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="dinero" className="col-4 col-form-label">Dinero en caja</label>
            <div className="col-8">
              <input name="dinero" type="number" className="form-control" value={objeto.dinero}/>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-4 col-form-label">Caja abierta</label>
            <div class="col-8">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" name="abierta"
                       checked={objeto.abierta} onChange={onSwitchAction} />
                {/*<label className="form-check-label" htmlFor="contienePrefijo">Contiene prefijo</label>*/}
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="restaurante" className="col-4 col-form-label">Restaurante</label>
            <div className="col-8">
              <select name="restaurante" className="form-select" value={objeto.restaurante?._id} onChange={handleChange}>
                <option selected>Seleccione una opcion</option>
                { listaRestaurantes.map(({ _id, nombre }, index) => <option value={_id} >{nombre}</option>) }
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-8 col-2">
              <a class="btn btn-danger" onClick={goBack}>Cancelar</a>
            </div>
            <div class="col-2">
              <button name="submit" type="submit" class="btn btn-primary">Guardar</button>
            </div>
          </div>
        </div>
        }
      </form>
      
    </div>
    );
}

export class CajasRestaurante extends Component {
  state = {
    data: [],
    restaurantesCargados: false,
    restauranteSeleccionado: '',
    listaRestaurantes: [],
    listaCargada: false,
    listaCajas: []
  };

  componentDidMount() {
    this.listarRestaurantes();
  }

  async listarRestaurantes() {
    await RestauranteDataService.getAll()
        .then(response => {
          this.setState({
            listaRestaurantes: response.data,
            restaurantesCargados: true
          });
        })
        .catch(e => {
          console.log(e);
        });
  }

  cambiarRestaurante = (e) => {
    this.listarCajasPorRetaurante(e.target.value);
  }

  async listarCajasPorRetaurante(restauranteSeleccionado) {
    await MesaDataService.findByRestaurante(restauranteSeleccionado)
        .then(response => {
          console.log('1', response.data);
          this.setState({
            listaCajas: response.data,
            listaCargada: true
          });
          console.log('2');
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
              <Col><h1>Cajas</h1></Col>
              <Col>
                <div className="form-group row">
                  <div>
                    <select name="restauranteSeleccionado" className="form-select" onChange={this.cambiarRestaurante}>
                      <option selected>Seleccione un restaurante</option>
                      { this.state.listaRestaurantes.map(({ _id, nombre }, index) => <option value={_id} >{nombre}</option>) }
                    </select>
                  </div>
                </div>
              </Col>
            </Row>
            <Table>
              <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Dinero</th>
                <th>Abierta</th>
                <th></th>
              </tr>
              </thead>

              <tbody>
              { this.state.listaCargada && this.state.listaCajas.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.descripcion}</td>
                    <td>{dato.dinero}</td>
                    <td>{dato.abierta ? 'Si' : 'No'}</td>
                    <td>
                      <Button
                          color="primary"
                          href={`${history.location.pathname}/${dato._id}`}
                      >
                        Ordenes
                      </Button>
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