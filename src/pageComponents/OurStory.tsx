import separator from "../assets/separator.svg";
import { BgLocal, BgLocalMini } from "@/assets";

const OurStory = () => (
  <section className="story-section">
    {/* <div className="left-bg">
            <img src={background} alt="" title="" />
        </div> */}
    <div className="auto-container">
      <div className="row clearfix">
        <div className="text-col col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <div
            className="inner wow fadeInLeft"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div className="title-box centered">
              <div className="subtitle">
                <span>Nossa História</span>
              </div>
              <div className="pattern-image">
                <img src={separator} alt="" title="" />
              </div>
              <h2>Um verdadeiro Santuário Verde ao ar livre</h2>
              <div className="text">
                Um espaço gastronômico idealizado para atender aos amigos que
                por tantos anos nos prestigiaram através da Nossa loja de Móveis
                Rústicos e Paisagismo.
              </div>
            </div>
            <div className="booking-info">
              <div className="bk-title">Fale Conosco</div>
              <div className="bk-no">
                <a href="tel:+5519984051623">+55 19 98405-1623</a>
              </div>
            </div>
          </div>
        </div>
        <div className="image-col col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <div
            className="inner wow fadeInRight"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            {/* <div className="round-stamp">
                            <img src={badge} alt="" />
                        </div> */}
            <div className="images parallax-scene-1">
              <div className="image" data-depth="0.15">
                <img src={BgLocal} alt="" />
              </div>
              <div className="image" data-depth="0.30">
                <img src={BgLocalMini} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { OurStory };
