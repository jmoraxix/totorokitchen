import React, { useState, useEffect, Component } from "react";
import PlatilloDataService from "../services/platillo.service";
import MarcaDataService from "../services/platillo.service";
import PaisDataService from "../services/pais.service";
import EmpresaDataService from "../services/empresa.service";
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
                <th>Consecutivo</th>
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
                    <td>{dato.tipoPlatillo}</td>
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
  const [listaPaises, setListaPaises] = useState([]);
  const [listaEmpresas, setListaEmpresas] = useState([]);
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
    else {
      generarConsecutivo('Marca')
    }

    PaisDataService.getAll()
        .then(response => {
          setListaPaises(response.data)
        })
        .catch(e => {
          console.log(e);
        });
    EmpresaDataService.getAll()
        .then(response => {
          setListaEmpresas(response.data)
        })
        .catch(e => {
          console.log(e);
        });

    console.log(listaPaises, listaEmpresas);
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
      PlatilloDataService.create(objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
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
        setObjeto( { codigo: response.data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <div>
      <h2>Marca</h2>

      <form onSubmit={handleSubmit}>
        { cargaObjeto &&
            <div>
              <div className="form-group row">
                <label htmlFor="codigo" className="col-4 col-form-label">Codigo</label>
                <div className="col-8">
                  <input name="codigo" type="text" className="form-control" value={objeto.codigo} disabled/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="nombre" className="col-4 col-form-label">Nombre</label>
                <div className="col-8">
                  <input name="nombre" type="text" className="form-control" required="required" value={objeto.nombre} onChange={handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="descripcion" className="col-4 col-form-label">Descripcion</label>
                <div className="col-8">
                  <input name="descripcion" type="text" className="form-control" value={objeto.descripcion} onChange={handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="pais" className="col-4 col-form-label">Pais</label>
                <div className="col-8">
                  <select name="pais" className="form-select" value={objeto.pais?._id} onChange={handleChange}>
                    <option selected>Seleccione una opcion</option>
                    { listaPaises.map(({ _id, pais }, index) => <option value={_id} >{pais}</option>) }
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="empresa" className="col-4 col-form-label">Empresa</label>
                <div className="col-8">
                  <select name="empresa" className="form-select" value={objeto.empresa?._id} onChange={handleChange}>
                    <option selected>Seleccione una opcion</option>
                    { listaEmpresas.map(({ _id, nombre }, index) => <option value={_id} >{nombre}</option>) }
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
