import React, { useState, useEffect, Component } from "react";
import EmpresaDataService from "../services/empresa.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class Empresas extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await EmpresaDataService.getAll()
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
    EmpresaDataService.delete(_id)
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
           <Col><h1>Empresa</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Cedula Juridica</th>
                <th>Nombre</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.cedJuridica}</td>
                    <td>{dato.nombre}</td>
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

export function Empresa() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [isNew] = useState(_id === 'new');

  useEffect(() => {
    if (!isNew)
      EmpresaDataService.get(_id)
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
      EmpresaDataService.create(objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      EmpresaDataService.update(objeto._id, objeto)
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
      <h2>Empresa</h2>

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
          <label class="col-4 col-form-label">Cedula Juridica</label>
          <div class="col-8">
            <input name="cedJuridica" type="text" class="form-control" required="required" value={objeto.cedJuridica} onChange={handleChange}/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-4 col-form-label">Nombre</label>
          <div class="col-8">
            <input name="nombre" type="text" class="form-control" required="required" value={objeto.nombre} onChange={handleChange}/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-4 col-form-label">Detalle</label>
          <div class="col-8">
            <input name="detalle" type="text" class="form-control" value={objeto.detalle} onChange={handleChange}/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-4 col-form-label">Telefono</label>
          <div class="col-8">
            <input name="telefono" type="text" class="form-control" value={objeto.telefono} onChange={handleChange}/>
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
