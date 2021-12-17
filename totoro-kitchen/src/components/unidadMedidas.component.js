import React, { useState, useEffect, Component } from "react";
import UnidadMedidaDataService from "../services/unidadMedida.service";
import DetalleUnidadDataService from "../services/detalleUnidad.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class UnidadMedidas extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await UnidadMedidaDataService.getAll()
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
    UnidadMedidaDataService.delete(Consecutivo)
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
           <Col><h1>Unidades de medida</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Consecutivo</th>
                <th>Nombre</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.unidad}</td>
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

export function UnidadMedida() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [listaDetalles, setListaDetalles] = useState([]);
  const [isNew] = useState(_id === 'new');

  useEffect(() => {
    if (!isNew){
      UnidadMedidaDataService.get(_id)
          .then(response => {
            setObjeto(response.data)
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    DetalleUnidadDataService.getAll()
        .then(response => {
          setListaDetalles(response.data)
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
      UnidadMedidaDataService.create(objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      UnidadMedidaDataService.update(objeto._id, objeto)
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
      <h2>Unidad Medida</h2>

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
                <label htmlFor="unidad" className="col-4 col-form-label">Unidad</label>
                <div className="col-8">
                  <input name="unidad" type="text" className="form-control" required="required" value={objeto.unidad} onChange={handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="simbolo" className="col-4 col-form-label">S&iacute;mbolo</label>
                <div className="col-8">
                  <input name="simbolo" type="text" className="form-control" value={objeto.simbolo} onChange={handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="simbologia" className="col-4 col-form-label">Simbolog&iacute;a</label>
                <div className="col-8">
                  <input name="simbologia" type="text" className="form-control" value={objeto.simbologia} onChange={handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="detalleUnidad" className="col-4 col-form-label">Detalle Unidad</label>
                <div className="col-8">
                  <select name="detalleUnidad" className="form-select" value={objeto.detalleUnidad?._id} onChange={handleChange}>
                    <option selected>Seleccione una opcion</option>
                    { listaDetalles.map(({ _id, detalle }, index) => <option value={_id} >{detalle}</option>) }
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
