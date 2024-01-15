import { MainHeaderContent } from "../content";
import { LogoCompleta } from "../assets";
import { Link } from "react-router-dom";
const MainHeader = () => (
  <header className="main-header header-down">
    <div className="header-top">
      <div className="auto-container">
        <div className="inner clearfix">
          <div className="top-left clearfix">
            <ul className="top-info clearfix">
              <li>
                <i className="icon far fa-map-marker-alt" />
                {MainHeaderContent.address}
              </li>
              {/* <li>
                <i className="icon far fa-clock" />
                {MainHeaderContent.schedule}
              </li> */}
            </ul>
          </div>
          <div className="top-right clearfix">
            <ul className="top-info clearfix">
              <li>
                <a href={`tel:${MainHeaderContent.phone}`}>
                  <i className="icon far fa-phone"></i>
                  {MainHeaderContent.formatedPhone}
                </a>
              </li>
              <li>
                <a href={`mailto:${MainHeaderContent.email}`}>
                  <i className="icon far fa-envelope"></i>
                  {MainHeaderContent.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="header-upper">
      <div className="auto-container">
        <div className="main-box d-flex justify-content-between align-items-center flex-wrap">
          <div className="links-box clearfix">
            {/* <!-- <div className="nav-toggler">
                            <button className="hidden-bar-opener">
                                <span className="hamburger">
                                    <span className="top-bun"></span>
                                    <span className="meat"></span>
                                    <span className="bottom-bun"></span>
                                </span>
                            </button>
                        </div> --> */}
          </div>
          <div className="logo-box">
            <div className="logo">
              <Link to="/" title="Logo Carní Gastronomia">
                <img src={LogoCompleta} alt="" title="Carní gastronomia logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export { MainHeader };
