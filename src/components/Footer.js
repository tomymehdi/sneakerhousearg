import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import youtube from "../img/social/youtube.svg";
import sneakerhousearg from "../img/logo.svg"

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="sneakerhousearg"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Products
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  {/* </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list"> */}
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="sneakerhousearg" href="sneakerhousearg.com">
                  <img
                    src={sneakerhousearg}
                    alt="Sneakerhousearg"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="facebook" href="https://www.facebook.com/SneakerHouse.Arg">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/sneakerhousearg">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/sneakerhouse.arg/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/c/SneakerHouseArgentina">
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
            <div>Todos los derechos reservados. SneakerHouseArg 2022.</div>

            <div>SneakerHouseArg no es responsable por la exclusividad, disponibilidad y distribución de los productos catalogados. Las fechas, precios, imágenes, locales y nombres contienen referencias a productos de uno o más de nuestros advertisers. Puede que recibamos una compensación cuando realices un click en el producto. La información aquí presentada es de origen editorial de SneakerHouseArg.
</div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
