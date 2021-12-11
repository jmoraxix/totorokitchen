import React, { useState, useEffect, Component } from "react";
import TipoBebidaDataService from "../services/tipoBebida.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class TipoBebidas extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await TipoBebidaDataService.getAll()
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
    TipoBebidaDataService.delete(_id)
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
           <Col><h1>Tipos de bebidas</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Tipo</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.tipo}</td>
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

export function TipoBebida() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [isNew] = useState(_id === 'new');

  useEffect(() => {
    if (!isNew)
      TipoBebidaDataService.get(_id)
        .then(response => {
          setObjeto(response.data)
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
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
      TipoBebidaDataService.create(objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      TipoBebidaDataService.update(objeto._id, objeto)
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
      <h2>Tipo de bebida</h2>

      <form onSubmit={handleSubmit}>
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
            <input name="tipo" type="text" class="form-control" required="required" value={objeto.tipo} onChange={handleChange}/>
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
      </form>
      
    </div>
    );
}
