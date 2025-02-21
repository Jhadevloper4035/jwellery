import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import TabProductTwo from "../../wrappers/product/TabProductTwo";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeaturedTwo";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import { Link } from "react-router-dom";

const HomeFashion = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Jewllery Demo "
        description="BUY NOW! Gold Sliver Diamond Jewllery"
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        <div className="product-area hm6-section-padding ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 p-1">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/banner/b1.webp"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 text-center position-1">
                    <h4>
                      <Link
                        to={process.env.PUBLIC_URL + "/shop-grid-standard"}
                        style={{ color: "#fff", textDecoration: "underline" }}
                      >
                        Earings
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-1">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/banner/b2.jpg"}
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 text-center position-1">
                    <h4>
                      <Link
                        to={process.env.PUBLIC_URL + "/shop-grid-standard"}
                        style={{ color: "#fff", textDecoration: "underline" }}
                      >
                        Pendant
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-1">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/banner/b3.webp"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 text-center position-1">
                    <h4>
                      <Link
                        to={process.env.PUBLIC_URL + "/shop-grid-standard"}
                        style={{ color: "#fff", textDecoration: "underline" }}
                      >
                        Rings
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-60" spaceBottomClass="pb-60" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />

        <div className="product-area hm6-section-padding ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 p-3">
                <div className="product-wrap-4 ">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/banner/b11.jpg"
                      }
                      alt=""
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 p-3">
                <div className="product-wrap-4 ">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/banner/b12.jpg"
                      }
                      alt=""
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 p-3">
                <div className="product-wrap-4 ">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/banner/b13.jpg"
                      }
                      alt=""
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 p-3">
                <div className="product-wrap-4 ">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/banner/b14.jpg"
                      }
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TabProductTwo spaceBottomClass="pb-60" spaceTopClass="pt-60" />

        <div className="product-area hm6-section-padding ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 p-1">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/banner/cat2.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 text-center position-1">
                    <h4>
                      <Link
                        to={process.env.PUBLIC_URL + "/shop-grid-standard"}
                        style={{
                          color: "#fff",
                          textDecoration: "underline",
                          textTransform: "uppercase",
                        }}
                      >
                        Bracelets
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 p-1">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/banner/cat4.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 text-center position-1">
                    <h4>
                      <Link
                        to={process.env.PUBLIC_URL + "/shop-grid-standard"}
                        style={{
                          color: "#fff",
                          textDecoration: "underline",
                          textTransform: "uppercase",
                        }}
                      >
                        Necklaces
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 p-1">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/banner/cat3.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 text-center position-1">
                    <h4>
                      <Link
                        to={process.env.PUBLIC_URL + "/shop-grid-standard"}
                        style={{
                          color: "#fff",
                          textDecoration: "underline",
                          textTransform: "uppercase",
                        }}
                      >
                        Rings
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 p-1">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/banner/cat1.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 text-center position-1">
                    <h4>
                      <Link
                        to={process.env.PUBLIC_URL + "/shop-grid-standard"}
                        style={{
                          color: "#fff",
                          textDecoration: "underline",
                          textTransform: "uppercase",
                        }}
                      >
                        Earrings
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TestimonialOne />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
