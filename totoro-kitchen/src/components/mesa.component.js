import React, { useState, useEffect, Component } from "react";
import MesaDataService from "../services/mesa.service";
import RestauranteDataService from "../services/restaurante.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class Mesas extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await MesaDataService.getAll()
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
    MesaDataService.delete(Consecutivo)
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
              <Col><h1>Mesas</h1></Col>
              <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
            </Row>
            <Table>
              <thead>
              <tr>
                <th>Codigo</th>
                <th>Numero</th>
                <th>Nombre</th>
                <th>Sillas</th>
                <th>Restaurante</th>
                <th></th>
              </tr>
              </thead>

              <tbody>
              {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.numero}</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.cantSillas}</td>
                    <td>{dato.restaurantes?.nombre}</td>
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

export function Mesa() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [listaRestaurantes, setListaRestaurantes] = useState([]);
  const [isNew] = useState(_id === 'new');

  useEffect(() => {
    if (!isNew){
      MesaDataService.get(_id)
          .then(response => {
            setObjeto(response.data)
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

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
      MesaDataService.create(objeto)
          .then(response => {
          })
          .catch(e => {
            console.log(e);
          });
    } else {
      MesaDataService.update(objeto._id, objeto)
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
        <h2>Mesa</h2>

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
              <label htmlFor="numero" className="col-4 col-form-label">N&uacute;mero</label>
              <div className="col-8">
                <input name="numero" type="number" className="form-control" required="required" value={objeto.numero} onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="nombre" className="col-4 col-form-label">Nombre</label>
              <div className="col-8">
                <input name="nombre" type="text" className="form-control" required="required" value={objeto.nombre} onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="cantSillas" className="col-4 col-form-label">Cantidad de sillas</label>
              <div className="col-8">
                <input name="cantSillas" type="number" className="form-control" required="required" value={objeto.cantSillas} onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="restaurantes" className="col-4 col-form-label">Restaurante</label>
              <div className="col-8">
                <select name="restaurantes" className="form-select" value={objeto.restaurantes?._id} onChange={handleChange}>
                  <option selected>Seleccione una opcion</option>
                  { listaRestaurantes.map(({ _id, nombre }, index) => <option value={_id} >{nombre}</option>) }
                </select>
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

export class MesasRestaurante extends Component {
  state = {
    data: [],
    restaurantesCargados: false,
    restauranteSeleccionado: '',
    listaRestaurantes: [],
    listaCargada: false,
    listaMesas: []
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
    this.listarMesasPorRetaurante(e.target.value);
  }

  async listarMesasPorRetaurante(restauranteSeleccionado) {
    await MesaDataService.findByRestaurante(restauranteSeleccionado)
      .then(response => {
        console.log('1', response.data);
        this.setState({
          listaMesas: response.data,
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
              <Col><h1>Mesas</h1></Col>
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
                <th>Numero</th>
                <th>Nombre</th>
                <th>Sillas</th>
                <th></th>
              </tr>
              </thead>

              <tbody>
              { this.state.listaCargada && this.state.listaMesas.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.numero}</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.cantSillas}</td>
                    <td>
                      <Button
                          color="primary"
                          href={`${history.location.pathname}/${dato._id}`}
                      >
                        Orden
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