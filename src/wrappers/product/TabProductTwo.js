import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import SectionTitle from "../../components/section-title/SectionTitleThree";
import ProductGrid from "./ProductGrid";

const TabProduct = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category,
}) => {
  return (
    <div
      className={clsx(
        "product-area",
        spaceTopClass,
        spaceBottomClass,
        bgColorClass
      )}
    >
      <div className="container">
        <SectionTitle
          titleText="Trending Product!"
          positionClass="text-center"
        />
        <p
          style={{
            color: "#333",
            textAlign: "center",
            padding: "20px 0px",
            fontSize: "18px",
          }}
        >
          Our bestselling piece, timeless and elegantly modern.
        </p>
        <Tab.Container defaultActiveKey="bestSeller">
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGrid
                  category={"Silver"}
                  type="new"
                  limit={4}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGrid
                  category={"Silver"}
                  type="bestSeller"
                  limit={4}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <div className="row">
                <ProductGrid
                 category={"Silver"}
                  type="saleItems"
                  limit={4}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProduct.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TabProduct;
