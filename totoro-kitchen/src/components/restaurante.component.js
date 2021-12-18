import React, { useState, useEffect, Component } from "react";
import RestauranteService from "../services/restaurante.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class Restaurantes extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await RestauranteService.getAll()
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
    RestauranteService.delete(_id)
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
           <Col><h1>Restaurantes</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Aforo</th>
                <th>Telefono</th>
                <th>Activo</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.direccion}</td>
                    <td>{dato.aforo}</td>
                    <td>{dato.telefono}</td>
                    <td>{dato.activo ? 'Si' : 'No'}</td>
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

export function Restaurante() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [isNew] = useState(_id === 'new');

  const onSwitchAction = () => {
    setObjeto(prevState => ({
      ...prevState,
      activo: !objeto.activo
    }));
  };

  useEffect(() => {
    if (!isNew){
      RestauranteService.get(_id)
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
      RestauranteService.create(objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      RestauranteService.update(objeto._id, objeto)
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
      <h2>Restaurante</h2>

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
            <label class="col-4 col-form-label">Nombre</label>
            <div class="col-8">
              <input name="nombre" type="text" class="form-control" required="required" value={objeto.nombre} onChange={handleChange}/>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-4 col-form-label">Direccion</label>
            <div class="col-8">
              <input name="direccion" type="text" class="form-control" value={objeto.direccion} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="aforo" className="col-4 col-form-label">Aforo</label>
            <div className="col-8">
              <input name="aforo" type="number" className="form-control" value={objeto.aforo} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4 col-form-label">Telefono</label>
            <div className="col-8">
              <input name="telefono" type="text" className="form-control" value={objeto.telefono} onChange={handleChange}/>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-4 col-form-label">Activo</label>
            <div class="col-8">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" name="activo"
                       checked={objeto.activo} onChange={onSwitchAction} />
                {/*<label className="form-check-label" htmlFor="contienePrefijo">Contiene prefijo</label>*/}
              </div>
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
