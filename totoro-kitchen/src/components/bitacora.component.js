import React, { useState, useEffect, Component } from "react";
import BitacoraDataService from "../services/bitacora.service";
import CajaDataService from "../services/caja.service";
import EventoDataService from "../services/evento.service";
import ConsecutivoService from "../services/consecutivo.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class Bitacoras extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await BitacoraDataService.getAll()
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
    BitacoraDataService.delete(Consecutivo)
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
           <Col><h1>Bitacoras</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Consecutivo</th>
                <th>Fecha</th>
                <th>Descripcion</th>
                <th>Detalle</th>
                <th>Entrada Dinero</th>
                <th>Caja</th>
                <th>Evento</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.fecha}</td>
                    <td>{dato.descripcion}</td>
                    <td>{dato.detalle}</td>
                    <td>{dato.entradaDinero}</td>
                    <td>{dato.caja?.codigo}</td>
                    <td>{dato.evento?.codigo}</td>
                    
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

export function Bitacora() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  
  const [isNew] = useState(_id === 'new');

  useEffect(() => {
    if (!isNew){
      BitacoraDataService.get(_id)
          .then(response => {
            setObjeto(response.data)
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
    else {
      generarConsecutivo('Bitacora')
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
      BitacoraDataService.create(objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      BitacoraDataService.update(objeto._id, objeto)
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
      <h2>Pais</h2>

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
                <label htmlFor="bitacora" className="col-4 col-form-label">Tipo</label>
                <div className="col-8">
                  <input name="bitacora" type="text" className="form-control" required="required" value={objeto.bitacora} onChange={handleChange}/>
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
