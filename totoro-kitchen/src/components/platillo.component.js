import React, { useState, useEffect, Component } from "react";
import PlatilloDataService from "../services/platillo.service";
import UnidadMedidaDataService from "../services/unidadMedida.service";
import TipoComidaDataService from "../services/tipoComida.service";
import TipoPlatilloDataService from "../services/tipoPlatillo.service";
import TipoBebidaDataService from "../services/tipoBebida.service";
import PaisDataService from "../services/pais.service";
import MarcaDataService from "../services/marca.service";
import ConsecutivoService from "../services/consecutivo.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class Platillos extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await PlatilloDataService.getAll()
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
    PlatilloDataService.delete(Consecutivo)
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
           <Col><h1>Platillos</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.tipoPlatillo?.tipo}</td>
                    <td>{dato.precio}</td>
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

export function Platillo() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [tipoObjeto, setTipoObjeto] = useState('');
  const [listaUnidades, setListaUnidades] = useState([]);
  const [listaTipoComida, setListaTipoComida] = useState([]);
  const [listaTipoPlatillo, setListaTipoPlatillo] = useState([]);
  const [listaTipoBebida, setListaTipoBebida] = useState([]);
  const [listaPaises, setListaPaises] = useState([]);
  const [listaMarca, setListaMarca] = useState([]);
  const [isNew] = useState(_id === 'new');

  useEffect(() => {
    if (!isNew){
      PlatilloDataService.get(_id)
          .then(response => {
            setObjeto(response.data)
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    UnidadMedidaDataService.getAll()
        .then(response => {
          setListaUnidades(response.data)
        })
        .catch(e => {
          console.log(e);
        });
    TipoComidaDataService.getAll()
        .then(response => {
          setListaTipoComida(response.data)
        })
        .catch(e => {
          console.log(e);
        });
    TipoPlatilloDataService.getAll()
        .then(response => {
          setListaTipoPlatillo(response.data)
        })
        .catch(e => {
          console.log(e);
        });
    TipoBebidaDataService.getAll()
        .then(response => {
          setListaTipoBebida(response.data)
        })
        .catch(e => {
          console.log(e);
        });
    PaisDataService.getAll()
        .then(response => {
          setListaPaises(response.data)
        })
        .catch(e => {
          console.log(e);
        });
    MarcaDataService.getAll()
        .then(response => {
          setListaMarca(response.data)
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

    if(name === 'tipoPlatillo')
      setTipoObjeto(listaTipoPlatillo.find( tipo => tipo._id === value).tipo)
  };

  function handleSubmit(e) {
    console.log("Objeto a procesar: ", objeto);
    e.preventDefault();
    if(isNew){
      generarConsecutivo(tipoObjeto);
    } else {
      PlatilloDataService.update(objeto._id, objeto)
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

  function generarConsecutivo(tipo) {
    ConsecutivoService.generarConsecutivo(tipo)
      .then(response => {
        setObjeto(prevState => ({
          ...prevState,
          codigo: response.data
        }));
        console.log(tipo)
        crearObjeto();
      })
      .catch(e => {
        console.log(e);
      });
  }
  function crearObjeto() {
      PlatilloDataService.create(objeto)
          .then(response => {
          })
          .catch(e => {
            console.log(e);
          });
  }

  return (
    <div>
      <h2>Platillo</h2>

      <form onSubmit={handleSubmit}>
        { cargaObjeto &&
            <div>
              { !isNew &&
                <div className="form-group row">
                  <label htmlFor="codigo" className="col-4 col-form-label">Codigo</label>
                  <div className="col-8">
                    <input name="codigo" type="text" className="form-control" value={objeto.codigo} disabled/>
                  </div>
                </div>
              }
              <div className="form-group row">
                <label htmlFor="nombre" className="col-4 col-form-label">Nombre</label>
                <div className="col-8">
                  <input name="nombre" type="text" className="form-control" required="required" value={objeto.nombre} onChange={handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="tipoPlatillo" className="col-4 col-form-label">Tipo de platillo</label>
                <div className="col-8">
                  <select name="tipoPlatillo" className="form-select" value={objeto.tipoPlatillo?._id} onChange={handleChange}>
                    <option selected>Seleccione una opcion</option>
                    { listaTipoPlatillo.map(({ _id, tipo }, index) => <option value={_id} >{tipo}</option>) }
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="precio" className="col-4 col-form-label">Precio</label>
                <div className="col-8">
                  <input name="precio" type="number" className="form-control" value={objeto.precio} required="required" onChange={handleChange}/>
                </div>
              </div>
              { tipoObjeto === 'Buffet' &&
                <div>
                  <div className="form-group row">
                    <label htmlFor="unidadMedida" className="col-4 col-form-label">Unidad de medida</label>
                    <div className="col-8">
                      <select name="unidadMedida" className="form-select" value={objeto.unidadMedida?._id} onChange={handleChange}>
                        <option selected>Seleccione una opcion</option>
                        { listaUnidades.map(({ _id, unidad }, index) => <option value={_id} >{unidad}</option>) }
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="tipoComida" className="col-4 col-form-label">Tipo de comida</label>
                    <div className="col-8">
                      <select name="tipoComida" className="form-select" value={objeto.tipoComida?._id} onChange={handleChange}>
                        <option selected>Seleccione una opcion</option>
                        { listaTipoComida.map(({ _id, tipo }, index) => <option value={_id} >{tipo}</option>) }
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="ingredientes" className="col-4 col-form-label">Ingredientes</label>
                    <div className="col-8">
                      <input name="ingredientes" type="text" className="form-control" value={objeto.ingredientes} onChange={handleChange}/>
                    </div>
                  </div>
                </div>
              }
              { tipoObjeto === 'Especial' &&
                <div>
                  <div className="form-group row">
                    <label htmlFor="ingredientes" className="col-4 col-form-label">Ingredientes</label>
                    <div className="col-8">
                      <input name="ingredientes" type="text" className="form-control" value={objeto.ingredientes} onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="detalle" className="col-4 col-form-label">Detalle</label>
                    <div className="col-8">
                      <input name="detalle" type="text" className="form-control" value={objeto.detalle} onChange={handleChange}/>
                    </div>
                  </div>
                </div>
              }
              { tipoObjeto === 'Bebida' &&
                <div>
                  <div className="form-group row">
                    <label htmlFor="tipoBebida" className="col-4 col-form-label">Tipo de bebida</label>
                    <div className="col-8">
                      <select name="tipoBebida" className="form-select" value={objeto.tipoBebida?._id} onChange={handleChange}>
                        <option selected>Seleccione una opcion</option>
                        { listaTipoBebida.map(({ _id, tipo }, index) => <option value={_id} >{tipo}</option>) }
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="pais" className="col-4 col-form-label">Nacionalidad</label>
                    <div className="col-8">
                      <select name="pais" className="form-select" value={objeto.pais?._id} onChange={handleChange}>
                        <option selected>Seleccione una opcion</option>
                        { listaPaises.map(({ _id, pais }, index) => <option value={_id} >{pais}</option>) }
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="marca" className="col-4 col-form-label">Marca</label>
                    <div className="col-8">
                      <select name="marca" className="form-select" value={objeto.marca?._id} onChange={handleChange}>
                        <option selected>Seleccione una opcion</option>
                        { listaMarca.map(({ _id, nombre }, index) => <option value={_id} >{nombre}</option>) }
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="precioBotella" className="col-4 col-form-label">Precio Botella</label>
                    <div className="col-8">
                      <input name="precioBotella" type="number" className="form-control" value={objeto.precioBotella} onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="year" className="col-4 col-form-label">A&ntilde;o</label>
                    <div className="col-8">
                      <input name="year" type="Number" min="1900" max="2099" className="form-control" value={objeto.year} onChange={handleChange}/>
                    </div>
                  </div>
                </div>
              }
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
