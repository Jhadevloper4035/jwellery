import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HeaderTop = ({ borderStyle }) => {
  const currency = useSelector((state) => state.currency);

  return (
    <div
      className={clsx(
        "header-top-wap",
        borderStyle === "fluid-border" && "border-bottom"
      )}
      style={{
        backgroundColor: "#383e56",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 40px",
        flexWrap: "wrap",
      }}
    >
      {/* Social Media Icons */}
      <div className="social-icons" style={{ display: "flex", gap: "15px" }}>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-youtube"
            style={{ color: "#fff", fontSize: "18px" }}
          ></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-facebook"
            style={{ color: "#fff", fontSize: "18px" }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-linkedin"
            style={{ color: "#fff", fontSize: "18px" }}
          ></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-twitter"
            style={{ color: "#fff", fontSize: "18px" }}
          ></i>
        </a>
      </div>

      {/* Offer Section */}
      <div className="header-offer">
        <p>
          Need Any Help? Call us: <span>+222-1800-2628</span>
        </p>
      </div>

      <div className="header-offer">
        <p>
          <a
            href="mailto:info@example.com"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <i className="fas fa-envelope"></i> info@example.com
          </a>
        </p>
        
      </div>

      <div className="header-offer"   style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent : "space-between",
              gap: "20px",
            }}>
        <p>
          <a
            href="mailto:info@example.com"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
          Contact
          </a>
        </p>
        <p>
          <a
            href="mailto:info@example.com"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
          About
          </a>
        </p>
        <p>
          <a
            href="mailto:info@example.com"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
          FAQ
          </a>
        </p>
      </div>
     

     

      <LanguageCurrencyChanger currency={currency} />
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
};

export default HeaderTop;
