import React, { useState, useEffect, Component, lazy, Suspense } from "react";
import PaisDataService from "../services/pais.service";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Col, Table, Button, Container} from 'reactstrap';
import {
  useLocation,
  useParams
} from "react-router-dom";
import {
  NavLink
} from 'reactstrap';
import history from 'history/browser';

export default class Paises extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    lazy(this.listarObjetos());
  }

  listarObjetos() {
    PaisDataService.getAll()
      .then(response => {
        this.setState({
          data: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  crearObjeto(data){
    PaisDataService.create(data)
      .then(response => {
        console.log(response.data);
        this.listarObjetos();
      })
      .catch(e => {
        console.log(e);
      });
  }

  actualizarObjeto(data){
    // PaisDataService.update(data.Consecutivo, data)
    //     .then(response => {
    //       console.log(response.data);
    //       this.listarObjetos();
    //       this.cerrarModalActualizar();
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
  }

  eliminarObjeto(Consecutivo){
    PaisDataService.delete(Consecutivo)
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
           <Col><h1>Paises</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Consecutivo</th>
                <th>Pais</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <Suspense fallback={<div>Loading data</div>}>
                {this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.pais}</td>
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
              </Suspense>
            </tbody>
          </Table>
        </Container>

      </>
    );
  }
}

export function Pais() {
  let { paisId } = useParams();
  let location = useLocation();
  const [pais, setPais] = useState({});
  const [isNew] = useState(paisId === 'new');

  useEffect(() => {
    if (!isNew)
      PaisDataService.get(paisId)
        .then(response => {
          setPais(response.data)
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  }, []);

  return (
    <div>
      <h2>Pais ID: {paisId}</h2>

      <form>
        {!isNew &&
          <div class="form-group row">
            <label for="codigo" class="col-4 col-form-label">Codigo</label>
            <div class="col-8">
              <input name="codigo" type="text" class="form-control" value={pais.codigo} disabled/> 
            </div>
          </div>
        }
        <div class="form-group row">
          <label for="pais" class="col-4 col-form-label">Nombre</label>
          <div class="col-8">
            <input id="pais" name="pais" type="text" class="form-control" required="required" value={pais.pais} />
          </div>
        </div>
        <div class="form-group row">
          <div class="offset-8 col-2">
            <button class="btn btn-danger" href="/pais">Cancelar</button>
          </div>
          <div class="col-2">
            <button name="submit" type="submit" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </form>
      
    </div>
    );
}
