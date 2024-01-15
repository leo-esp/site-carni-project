import bg23 from "../assets/bg-23.png";
import separator from "../assets/separator.svg";
import { FunctionComponent } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  mini?: boolean;
}

interface Props {
  type?: string;
  items: MenuItem[];
  tag: string;
}

const MenuItem: FunctionComponent<MenuItem> = ({
  image,
  name,
  price,
  description,
  mini = false,
}) => (
  <div className="dish-block" style={{ marginBottom: 0 }}>
    <div className="inner-box" style={{ minHeight: mini ? "auto" : 100 }}>
      <div className="dish-image">
        <img src={image} alt="" />
      </div>
      <div className="title clearfix">
        {name && (
          <div className="ttl clearfix">
            <h5>{name}</h5>
          </div>
        )}
        <div className="price">
          <span>${price}</span>
        </div>
      </div>
      <div className="text desc">{description}</div>
    </div>
  </div>
);

const MenuCarteOneSide: FunctionComponent<Props> = ({ type, items, tag }) => {
  return (
    <section className="menu-two">
      <div className="left-bg">
        <img src={bg23} alt="" title="" />
      </div>
      <div className="auto-container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>{tag}</span>
          </div>
          {type && <h2>{type}</h2>}
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div
              className="inner"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gridGap: 25,
              }}
            >
              {items.map((menuItem) => (
                <MenuItem {...menuItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MenuCarteOneSide };
