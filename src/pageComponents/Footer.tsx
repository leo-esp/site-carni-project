import { Link } from "react-router-dom";
import { BgFooter, LogoCompleta } from "../assets";

const Footer = () => (
  <footer className="main-footer">
    <div
      className="image-layer"
      style={{ backgroundImage: `url(${BgFooter})` }}
    ></div>
    <div className="upper-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="footer-col info-col col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="content">
                <div className="logo">
                  <Link to="/" title="Carni Gastronomia">
                    <img src={LogoCompleta} alt="" title="Carni Gastronomia" />
                  </Link>
                </div>
                <div className="info">
                  <ul>
                    <li>
                      Av. Dr. Antônio Carlos Couto de Barros, 1400 - Jardim
                      Conceição - Campinas/SP
                    </li>
                    <li>
                      <a href="mailto:contato@carnigastronomia.com.br">
                        contato@carnigastronomia.com.br
                      </a>
                    </li>
                    <li>
                      <a href="tel:+5519984051623">
                        Reservas : +55 19 98405 1623
                      </a>
                    </li>
                    {/* <li>Aberto : 8.00 am to 10.00 pm</li> */}
                  </ul>
                </div>
                <div className="separator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="footer-col links-col col-lg-3 col-md-6 col-sm-12"
            style={{ visibility: "hidden" }}
          >
            <div
              className="inner wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <ul className="links">
                {/* <li><a href="home.html">Home</a></li>
                                <li><a href="menu-list-1.html">Menus</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="our-chef.html">Our chefs</a></li>
                                <li><a href="contact-us.html">Contact</a></li> */}
              </ul>
            </div>
          </div>
          <div
            className="footer-col links-col last col-lg-3 col-md-6 col-sm-12"
            style={{ visibility: "hidden" }}
          >
            <div
              className="inner wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <ul className="links">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100083313753761"
                    target="_blank"
                  >
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/carnigastronomia"
                    target="_blank"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://goo.gl/maps/qTpmQkQbpmT2L6a8A"
                    target="_blank"
                  >
                    Google map
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="copyright">
          &copy; 2023 Carní Gastronomia - Todos os direitos reservados |
          Desenvolvido por <a target="blank">Leonardo Esposito</a>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
