import React from "react";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';


function Studies(){

    return (
        <div>
          <Card border="light" style={{ width: '50rem' }}>
        <Card.Header className="App-titles">Estudios</Card.Header>
        <Card.Body>
          <Card.Text className="App-profile">
          <Card.Subtitle className="App-subtitles">Universitarios</Card.Subtitle>
          <br></br> 
          Universidad de Investigación y Desarrollo <br></br>
          Calle 9 No. 23-55 Bucaramanga <br></br>
          Ingeniera Industrial<br></br>
          2017 <br></br> <br></br>
          <Card.Subtitle className="App-subtitles">Otros Estudios</Card.Subtitle>
          <br></br> 
          FullStack Developer BootCamp<br></br>
          Make it Real 2019<br></br>
          <br></br>
          Especialización en Pruebas de Software<br></br>
          SENA 2018<br></br><br></br>
          Curso Especial en Mercadeo y Ventas SENA<br></br><br></br>
          Curso Desarrollo de Nuevas Estrategias Comerciales SENA<br></br>

          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  
    );
}

export default Studies;