import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      )}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>{t("Home")}</Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {" "}
              {t("shop")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-full-width"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                    >
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-standard"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-full-width"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-two-column"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-tab-left/1"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-tab-right/1"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-sticky/1"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-slider/1"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/product-fixed-image/1"}
                    >
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/8"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/9"}>
                      {t("dummy link ")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/banner/banner-12.png"
                        }
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {t("collection")}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("pages")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/cart"}>{t("cart")}</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/checkout"}>
                  {t("checkout")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                  {t("wishlist")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                  {t("compare")}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>
              {t("Blog")}
            </Link>
          </li>
         
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {t("contact_us")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
