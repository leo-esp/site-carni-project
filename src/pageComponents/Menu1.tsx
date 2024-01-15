import separator from "../assets/separator.svg";
import menu from "../assets/menus-1.jpg";
import bg from "../assets/bg-16.png";

export interface Plate {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Props {
  menuTitle: string;
  tagTitle?: string;
  menuImage?: string;
  alternate?: boolean;
  items: Plate[];
}

const Menu1: React.FunctionComponent<Props> = ({
  alternate,
  items,
  menuTitle,
  tagTitle,
  menuImage,
}: Props) => (
  <section
    className={`menu-one ${alternate && "alternate"}`}
    style={{ paddingTop: 90 }}
  >
    {/* <div className="right-bg">
      <img src={bg} alt="" title="" />
    </div> */}
    <div className="auto-container">
      <div className="title-box centered">
        <div className="subtitle">{tagTitle && <span>{tagTitle}</span>}</div>
        <div className="pattern-image">
          <img src={separator} alt="" title="" />
        </div>
        {menuTitle && <h2>{menuTitle}</h2>}
      </div>

      <div className="row clearfix">
        <div className="image-col col-lg-7 col-md-12 col-sm-12">
          <div className="inner">
            <div className="image">
              <img src={menuImage} alt="" />
            </div>
          </div>
        </div>
        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
          <div className="inner">
            {items.map((plate) => (
              <div className="dish-block">
                <div className="inner-box">
                  <div className="title clearfix">
                    <div className="ttl clearfix">
                      <h5>{plate.name}</h5>
                    </div>
                    <div className="price">
                      <span>{plate.price}</span>
                    </div>
                  </div>
                  <div className="text desc">{plate.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { Menu1 };
