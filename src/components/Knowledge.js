import React from "react";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';


function Knowledge(){

    return (
        <div>
          <Card border="light" style={{ width: '50rem' }}>
        <Card.Header className="App-titles">Conocimientos</Card.Header>
        <Card.Body>
          <Card.Text className="App-profile">
          *Diseño y desarrollo de pruebas funcionales, E2E y de aceptación, con Java, Selenium,
          Serenity BDD, Cucumber con Screenplay como patrón de diseño para pruebas
          automatizadas. <br></br>
          *Desarrollo de aplicaciones Web con HTML, CSS, Bootstrap, Jaait, React, Rest APIs y
          Node Js.<br></br>
          * DevOps y metodología ágil.<br></br>
          *Principios Scrum
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      



    );
}

export default Knowledge;