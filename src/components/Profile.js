import React from "react";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';


function Profile(){

    return (
        <div><Card border="light" style={{ width: '50rem' }}>
        <Card.Header className="App-titles">Perfil</Card.Header>
        <Card.Body>
          <Card.Text className="App-profile">
          Ingeniera Industrial especialista en Pruebas de Software. Conocimiento en metodologías ágiles, automatización de
          pruebas, Java, Javascript, HTML, Bootstrap, CSS, lógica de
          programación, ciclo de calidad del software y manejo de
          consultas SQL. <br></br> <br></br>
          Capacidad de liderazgo, con excelentes relaciones interpersonales,
          tolerante y aptitudes para el trabajo en equipo.
          Autodidacta, rápida a la hora de aprender nuevas herramientas
          de tecnología de información. Responsable y Comprometida
          con el trabajo, honesta y emprendedora.
          </Card.Text>
        </Card.Body>
      </Card></div>
  
    );
}

export default Profile;