import { Badge, Separator } from "@/assets";

interface Props {
  image: string;
  right?: boolean;
  type: string;
  title: string;
  description: string;
  price: number;
}

const ExecutivePlate = ({
  image,
  right = false,
  type,
  title,
  description,
  price,
}: Props) => (
  <section
    className="chef-selection"
    style={{ backgroundColor: "rgb(13, 24, 25)" }}
  >
    <div className="auto-container">
      <div className="outer-container">
        <div
          className="row clearfix"
          style={{ flexDirection: right ? "row-reverse" : "row" }}
        >
          <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="image">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="title-box">
                <span className="badge-icon">
                  <img src={Badge} alt="" title="" />
                </span>
                <div className="subtitle">
                  <span>{type}</span>
                </div>
                <div className="pattern-image">
                  <img src={Separator} alt="" title="" />
                </div>
                <h3>{title}</h3>
                <div className="text">{description}</div>
              </div>
              <div className="price">
                {/* <span className="old">$40.00</span>{" "} */}
                <span className="new">$ {price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { ExecutivePlate };
