import React from "react";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';


function Experience(){

    return (
        <div>
          <Card border="light" style={{ width: '50rem' }}>
        <Card.Header className="App-titles">Experiencia</Card.Header>
        <Card.Body>
          <Card.Text className="App-profile">
          <Card.Subtitle className="App-subtitles">Tata Consultancy Services</Card.Subtitle>
          <br></br>CARGO: Analista de Pruebas - Bootcamp Automation <br></br>
          FUNCIONES:  <br></br>
          Diseñar plan de testing. Definir los casos de prueba en base a los requisitos funcionales, no
          funcionales y técnicos. Gestionar el armado de ambientes de prueba. Ejecutar los casos de
          prueba. Realizar la documentación de las pruebas (evidencia). <br></br>
          Registrar los incidentes en la base a los defectos encontrados, así como también realizar su
          seguimiento para asegurar su adecuada corrección. Automatización de pruebas con Sere -
          nity BDD, Cucumber y Screenplay. <br></br>
          Tiempo Laborado: Diciembre de 2018 a Febrero de 2019 <br></br>
          Jefe inmediato: Catalina Trujillo <br></br>
          Teléfono: 313 744 1103 <br></br>
<br></br>
          
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  
    );
}

export default Experience;