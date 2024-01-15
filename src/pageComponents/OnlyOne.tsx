import { FunctionComponent } from "react";
import separator from "../assets/separator.svg";

interface Props {
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
}

const OnlyOne: FunctionComponent<Props> = ({
  name,
  description,
  price,
  image,
  type,
}) => (
  <div
    className="menu-two"
    style={{ paddingBottom: 0, backgroundColor: "var(--color-four)" }}
  >
    {/* <div className="title-box centered">
            <div className="pattern-image"><img src={separator} alt="" title="" /></div>
            <h2>{type}</h2>
        </div> */}
    <div
      className="dish-block menu-col col-lg-6 col-md-12 col-sm-12"
      style={{ margin: "auto", display: "flex", justifyContent: "center" }}
    >
      <div
        className="inner-box"
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="dish-image">
          <a href="#">
            <img src={image} alt="" />
          </a>
        </div>
        <div
          style={{
            paddingLeft: 20,
          }}
        >
          <div className="title clearfix">
            <div className="ttl clearfix">
              <h5>{name}</h5>
            </div>
            <div className="price">
              <span>{new Intl.NumberFormat("pt-BR").format(price)}</span>
            </div>
          </div>
          <div className="text desc">
            {description}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { OnlyOne };
