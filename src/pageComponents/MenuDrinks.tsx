import { FunctionComponent } from "react";
import separator from "../assets/separator.svg";

interface Props {
  tagTitle: string;
  title?: string;
  data: {
    tag: string;
    mini?: boolean;
    custom?: boolean;
    items: {
      name: string;
      description: string;
      price: number;
      image: string;
    }[];
  }[];
}

const MenuDrinks: FunctionComponent<Props> = ({ title, data }) => (
  <section className="special-offer-two">
    {/* <div className="left-bg"><img src="images/background/bg-20.png" alt="" title="" /></div> */}
    {/* <div className="right-bg"><img src="images/background/bg-19.png" alt="" title="" /></div> */}
    <div className="auto-container">
      <div className="title-box centered">{title && <h2>{title}</h2>}</div>

      {data.map(({ tag, items, mini = false }) => (
        <>
          <div
            className="title-box centered"
            style={{ marginTop: 130, marginBottom: 50 }}
          >
            <div className="subtitle">
              <span>{tag}</span>
            </div>
            <div className="pattern-image">
              <img src={separator} alt="" title="" />
            </div>
          </div>

          <div className="row clearfix" style={{ justifyContent: "center" }}>
            {items.map(({ name, description, price, image }) => (
              <div
                className={`offer-block-three ${
                  mini
                    ? "col-xl-2 col-lg-2 col-md-3 col-sm-6"
                    : "col-xl-3 col-lg-4 col-md-6 col-sm-12"
                }`}
                style={{ width: mini ? "40%" : "100%" }}
              >
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="0ms"
                >
                  <div
                    className="image"
                    style={{
                      backgroundImage: `url(${image})`,
                      aspectRatio: "1 / 1.5",
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover'
                    }}
                  >
                    {/* <img src={image} alt="" /> */}
                  </div>
                  <h4>{name}</h4>
                  <div className="text desc">{description}</div>
                  <div className="price">${price}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  </section>
);

export { MenuDrinks };
