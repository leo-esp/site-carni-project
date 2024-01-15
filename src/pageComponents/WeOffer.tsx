import { Link } from "react-router-dom";
import bg1 from "../assets/bg-1.png";
import bg2 from "../assets/bg-2.png";
import separator from "../assets/separator.svg";
import { WeOfferContent } from "../content";

const WeOffer = () => (
  <section className="we-offer-section">
    <div className="left-bot-bg">
      <img src={bg1} alt="" title="" />
    </div>
    <div className="right-top-bg">
      <img src={bg2} alt="" title="" />
    </div>
    <div className="auto-container">
      <div className="title-box centered">
        <div className="subtitle">
          <span>{WeOfferContent.tag}</span>
        </div>
        <div className="pattern-image">
          <img src={separator} alt="" title="" />
        </div>
        <h2>{WeOfferContent.title}</h2>
        <div className="text">{WeOfferContent.subtitle}</div>
      </div>
      <div className="row justify-content-center clearfix">
        {WeOfferContent.cards.map((item) => (
          <div className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
              key={item.name}
            >
              <div className="image">
                <Link to={item.link}>
                  <img src={item.image} />
                </Link>
              </div>
              <h3>
                <Link to={item.link}>{item.type}</Link>
              </h3>
              <div className="more-link">
                <Link to={item.link}>{item.name}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { WeOffer };
