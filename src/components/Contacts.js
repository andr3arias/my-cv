import React from "react";
import "./styles/Contacts.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";

function Contacts() {
  return (
    <section class="section section--contacs home__contacts" id="contacts">
      <div class="container">
        <div class="row">
          <div class="col col--sm-8 col--sm-offset-2 col--md-12 col--md-offset-0 col--lg-10 col--lg-offset-1">
            <div class="row">
              <div class="col col--md-12">
                <h2 class="home__contacts-title">Contáctame!</h2>
              </div>
              <div class="col col--md-6">
                <p class="home__contacts-content">
                  Tienes alguna pregunta?<br></br>Siéntete libre de escribirme!
                </p>
                <div class="home__contacts-info">
                  <p class="home__contacts-mail">
                    <i class="bi bi-envelope-fill"> </i>
                    <a href="mailto:santiyabwana@gmail.com">
                      santiyabwana@gmail.com
                    </a>
                  </p>
                  <p class="home__contacts-linkedin">
                    <i class="bi bi-linkedin"> </i>
                    <a href="https://www.linkedin.com/andr3arias">
                      https://www.linkedin.com/andr3arias
                    </a>
                  </p>
                  <p class="home__contacts-twitter">
                    <i class="bi bi-twitter"> </i>
                    <a href="https://www.twitter.com/andr3arias">
                      https://www.twitter.com/andr3arias
                    </a>
                  </p>
                  <p class="home__contacts-github">
                    <i class="bi bi-github"> </i>
                    <a href="https://www.github.com/andr3arias">
                      https://www.github.com/andr3arias
                    </a>
                  </p>
                  <p class="home__contacts-geo">
                    <i class="bi bi-geo-alt-fill"> </i>Colombia
                  </p>
                </div>
                <br></br>
              </div>
              <div class="col col--md-6">
                <form class="form" id="contact-form">
                  <div class="row">
                    <div class="col field">
                      <input
                        id="name"
                        type="text"
                        class="field__input field--name required"
                        required=""
                      />
                      <label for="name" class="field__label">
                        Nombre
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col field">
                      <input
                        id="email"
                        type="email"
                        class="field__input field--email required"
                        required=""
                      />
                      <label for="email" class="field__label">
                        Email
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col field">
                      <textarea
                        id="text"
                        class="field__textarea field--message required"
                        required=""
                      ></textarea>
                      <label for="text" class="field__label">
                        Mensaje
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form--notice"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <Button variant="light">Enviar Mensaje</Button>{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Contacts;
