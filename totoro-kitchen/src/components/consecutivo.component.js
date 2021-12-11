import React, { useState, useEffect, Component } from "react";
import ConsecutivoService from "../services/consecutivo.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class Consecutivos extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await ConsecutivoService.getAll()
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
    ConsecutivoService.delete(_id)
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
           <Col><h1>Consecutivos</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Tipo</th>
                <th>Contiene Prefijo</th>
                <th>Prefijo</th>
                <th>Valor actual</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.tipo}</td>
                    <td>{dato.contienePrefijo ? 'Si' : 'No'}</td>
                    <td>{dato.prefijo}</td>
                    <td>{dato.valor}</td>
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

export function Consecutivo() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [isNew] = useState(_id === 'new');

  const onSwitchAction = () => {
    setObjeto(prevState => ({
      ...prevState,
      contienePrefijo: !objeto.contienePrefijo
    }));
  };

  useEffect(() => {
    if (!isNew)
      ConsecutivoService.get(_id)
        .then(response => {
          setObjeto(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

    setCargaObjecto(true);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log("handleChange: ", name, value);
    setObjeto(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleSubmit(e) {
    console.log("Objeto a procesar: ", objeto);
    e.preventDefault();
    if(isNew){
      ConsecutivoService.create(objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      ConsecutivoService.update(objeto._id, objeto)
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
      <h2>Consecutivo</h2>

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
            <label class="col-4 col-form-label">Tipo</label>
            <div class="col-8">
              <input name="tipo" type="text" class="form-control" required="required" value={objeto.tipo} onChange={handleChange}/>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-4 col-form-label">Descripcion</label>
            <div class="col-8">
              <input name="descripcion" type="text" class="form-control" value={objeto.descripcion} onChange={handleChange}/>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-4 col-form-label">Contiene prefijo</label>
            <div class="col-8">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="contienePrefijo" name="contienePrefijo"
                       checked={objeto.contienePrefijo} onChange={onSwitchAction} />
                {/*<label className="form-check-label" htmlFor="contienePrefijo">Contiene prefijo</label>*/}
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-4 col-form-label">Prefijo</label>
            <div class="col-8">
              <input name="prefijo" type="text" class="form-control" value={objeto.prefijo} onChange={handleChange}
              disabled={!objeto.contienePrefijo}/>
            </div>
          </div>
          {!isNew &&
          <div class="form-group row">
            <label for="codigo" class="col-4 col-form-label">Valor actual</label>
            <div class="col-8">
              <input name="valor" type="text" class="form-control" value={objeto.valor} disabled/>
            </div>
          </div>
          }
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
