import React, { useState, useEffect, Component } from "react";
import EventoDataService from "../services/evento.service";
import ConsecutivoService from "../services/consecutivo.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Container } from 'reactstrap';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import history from 'history/browser';

export class Eventos extends Component {
  state = {
    data: [],
    dataLoaded: false
  };

  componentDidMount() {
    this.listarObjetos();
  }

  async listarObjetos() {
    await EventoDataService.getAll()
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
    EventoDataService.delete(Consecutivo)
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
           <Col><h1>Eventos</h1></Col>
           <Col><Button color="success" href={`${history.location.pathname}/new`}>Crear</Button></Col>
         </Row>
          <Table>
            <thead>
              <tr>
                <th>Consecutivo</th>
                <th>Evento</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.state.dataLoaded && this.state.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.codigo}</td>
                    <td>{dato.evento}</td>
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

export function Evento() {
  let { _id } = useParams();
  let navigate = useNavigate();
  const [objeto, setObjeto] = useState({});
  const [cargaObjeto, setCargaObjecto] = useState(false);
  const [isNew] = useState(_id === 'new');

  useEffect(() => {
    if (!isNew){
      EventoDataService.get(_id)
          .then(response => {
            setObjeto(response.data)
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
    else {
      generarConsecutivo('Evento')
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
      EventoDataService.create(objeto)
        .then(response => {
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      EventoDataService.update(objeto._id, objeto)
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
                <label htmlFor="evento" className="col-4 col-form-label">Tipo</label>
                <div className="col-8">
                  <input name="evento" type="text" className="form-control" required="required" value={objeto.evento} onChange={handleChange}/>
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
