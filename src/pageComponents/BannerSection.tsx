import separator from "../assets/separator.svg";

import { BannerSectionContent } from "../content";
const BannerSection = () => (
  <section className="banner-section">
    <div className="banner-container">
      <div className="banner-slider">
        <div className="swiper-wrapper">
          {BannerSectionContent.banners.map((bannerData) => (
            <div key={bannerData.imageUrl} className="swiper-slide slide-item">
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(${bannerData.imageUrl})`,
                  opacity: 0.5,
                }}
              ></div>
              <div className="auto-container">
                <div className="content-box">
                  <div className="content">
                    <div className="clearfix">
                      <div className="inner">
                        <div className="subtitle">
                          <span>{bannerData.tag}</span>
                        </div>
                        <div className="pattern-image">
                          <img src={separator} alt="" title="" />
                        </div>

                        <h1
                          dangerouslySetInnerHTML={{
                            __html: bannerData.htmlTitle,
                          }}
                        />
                        <div className="text">{bannerData.subTitle}</div>
                        {/* <div className="links-box clearfix">
                          <div className="link">
                            <a
                              href="menu-list-3.html"
                              className="theme-btn btn-style-two clearfix"
                            >
                              <span className="btn-wrap">
                                <span className="text-one">
                                  {bannerData.textButton}
                                </span>
                                <span className="text-two">
                                  {bannerData.textButton}
                                </span>
                              </span>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev">
          <span className="fal fa-angle-left"></span>
        </div>
        <div className="swiper-button-next">
          <span className="fal fa-angle-right"></span>
        </div>
      </div>
    </div>

    {/* <div className="book-btn"><a href="reservation-contactform.html" className="theme-btn"><span className="icon"><img src="images/resource/book-icon-1.png" alt="" title=""></span><span className="txt">book a table</span></a></div> */}
  </section>
);

export { BannerSection };
