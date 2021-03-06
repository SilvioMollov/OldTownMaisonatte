import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/HomePage.scss";
import { withTranslation } from "react-i18next";

// import SimpleSlider from "../Utilities/Slider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faParking } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import { faConciergeBell } from "@fortawesome/free-solid-svg-icons";

//slider imges
import Img1 from "../../assets/DSC09108.jpg";
import Img2 from "../../assets/DSC09124.jpg";
import Img3 from "../../assets/DSC09041.jpg";
//feature icons
import amphitheatre from "../../assets/amphitheatre.svg";
import column from "../../assets/column.svg";
import ruins from "../../assets/machu-picchu.svg";
import resturant from "../../assets/dining-table.svg";
import shop from "../../assets/store.svg";
import airport from "../../assets/airport.svg";
import bar from "../../assets/tropical-bar.svg";

class HomePage extends Component {
  state = {
    slidesToShow: 3,
    initFeatureSlider: false,
    showReservationButton: false,
  };

  componentDidMount() {
    this.trackScreenSizeListener();
    window.addEventListener("resize", this.trackScreenSizeListener);
    window.addEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = (e) => {
    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (window.scrollY >= documentHeight - 100) {
      this.setState({ showReservationButton: true });
    } else {
      this.setState({ showReservationButton: false });
    }
  };

  trackScreenSizeListener = () => {
    const { slidesToShow } = this.state;

    if (window.innerWidth < 600 && slidesToShow !== 1) {
      this.setState({ slidesToShow: 1, initFeatureSlider: true });
    } else if (
      window.innerWidth > 600 &&
      window.innerWidth <= 1200 &&
      this.state.slidesToShow !== 2
    ) {
      this.setState({ slidesToShow: 2, initFeatureSlider: false });
    } else if (window.innerWidth > 1200 && slidesToShow !== 3) {
      this.setState({ slidesToShow: 3 });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.trackScreenSizeListener);
    window.removeEventListener("scroll", this.listenToScroll);
  }

  render() {
    const {
      slidesToShow,
      initFeatureSlider,
      showReservationButton,
    } = this.state;
    const { t, history } = this.props;

    //change language

    const headSliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };

    const featureSliderSettings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      autoplay: true,
    };

    const landmarksSliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      swipeToSlide: true,
    };

    return (
      <>
        <div className="home-page__container">
          <div className="home-page__slider-container">
            <Slider
              {...headSliderSettings}
              className="home-page__slider slider"
            >
              <div className="home-page__slide">
                <a
                  draggable="false"
                  href={`/gallery/${history.location.pathname.slice(-2)}`}
                >
                  <img src={Img1} alt="pic1"></img>
                  <div className="home-page__slider-description">
                    <p>{t("Master Bedroom with a beautiful balcony")}</p>
                  </div>
                </a>
              </div>
              <div className="home-page__slide">
                <a
                  draggable="false"
                  href={`/gallery/${history.location.pathname.slice(-2)}`}
                >
                  <img src={Img2} alt="pic2"></img>
                  <div className="home-page__slider-description">
                    <p>{t("A specious living room")}</p>
                  </div>
                </a>
              </div>
              <div className="home-page__slide">
                <a
                  draggable="false"
                  href={`/gallery/${history.location.pathname.slice(-2)}`}
                >
                  <img src={Img3} alt="pic3"></img>
                  <div className="home-page__slider-description">
                    <p>{t("A small outdoor space.")}</p>
                  </div>
                </a>
              </div>
            </Slider>
          </div>

          <div className="home-page__h2">
            <h2>{t("Most Popular Features")}</h2>
            {initFeatureSlider ? (
              <Slider
                {...featureSliderSettings}
                className="home-page__features_slider"
              >
                <div className="home-page__slider-item">
                  <div>
                    <FontAwesomeIcon icon={faHome} />
                    <span>{t("Whole apartment")}</span>
                  </div>
                </div>
                <div className="home-page__slider-item">
                  <div>
                    <FontAwesomeIcon icon={faUtensils} />
                    <span>{t("BBQ facilities")}</span>
                  </div>
                </div>
                <div className="home-page__slider-item">
                  <div>
                    <FontAwesomeIcon icon={faBath} />
                    <span>{t("Two Bathrooms")}</span>
                  </div>
                </div>
                <div className="home-page__slider-item">
                  <div>
                    <FontAwesomeIcon icon={faWifi} />
                    <span>{t("Free Wifi")}</span>
                  </div>
                </div>
                <div className="home-page__slider-item">
                  <div>
                    <FontAwesomeIcon icon={faSeedling} />
                    <span>{t("Outdoor Space")}</span>
                  </div>
                </div>
                <div className="home-page__slider-item">
                  <div>
                    <FontAwesomeIcon icon={faParking} />
                    <span>{t("Free Parking")}</span>
                  </div>
                </div>
                <div className="home-page__slider-item">
                  <div>
                    <FontAwesomeIcon icon={faVectorSquare} />
                    <span>{t("125 sqm")}</span>
                  </div>
                </div>
                <div className="home-page__slider-item">
                  <div>
                    <FontAwesomeIcon icon={faSnowflake} />
                    <span>{t("Air conditioning")}</span>
                  </div>
                </div>
              </Slider>
            ) : (
              <ul className="home-page__grid-container__features">
                <li className="home-page__features_grid-item">
                  <FontAwesomeIcon icon={faHome} />
                  <span>{t("Whole apartment")}</span>
                </li>
                <li className="home-page__features_grid-item">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>{t("125 sqm")}</span>
                </li>
                <li className="home-page__features_grid-item">
                  <FontAwesomeIcon icon={faSeedling} />
                  <span>{t("Outdoor Space")}</span>
                </li>
                <li className="home-page__features_grid-item">
                  <FontAwesomeIcon icon={faUtensils} />
                  <span>{t("BBQ facilities")}</span>
                </li>
                <li className="home-page__features_grid-item">
                  <FontAwesomeIcon icon={faWifi} />
                  <span>{t("Free Wifi")}</span>
                </li>
                <li className="home-page__features_grid-item">
                  <FontAwesomeIcon icon={faParking} />
                  <span>{t("Free Parking")}</span>
                </li>
                <li className="home-page__features_grid-item">
                  <FontAwesomeIcon icon={faSnowflake} />
                  <span>{t("Air conditioning")}</span>
                </li>
                <li className="home-page__features_grid-item">
                  <FontAwesomeIcon icon={faBath} />
                  <span>{t("Two Bathrooms")}</span>
                </li>
              </ul>
            )}
          </div>

          <div className="home-page__grid-container__description">
            <div className="home-page__title-text__container">
              <h2>{t("Stay in the heart of Plovdiv")}</h2>
              <p className="home-page__description_grid-item">
                {t("description-text")}
              </p>
            </div>
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.032340326501!2d24.74877871570581!3d42.14959475635865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd13ddbaa269f%3A0xf448e8ecd792d098!2sOld%20Town%20Maisonette!5e0!3m2!1sen!2sbg!4v1603276039920!5m2!1sen!2sbg"
              width="400"
              height="450"
              frameBorder="0"
              style={{ border: "1 solide", width: "100%" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          <div className="home-page__landmarks_container">
            <h2>{t("Popular atractions nearby")}</h2>
            <Slider
              {...landmarksSliderSettings}
              className="home-page__landmarks_slider"
            >
              <a
                className="home-page__landmarks_landmark"
                draggable="false"
                href="https://g.page/AncientTheatrePlovdiv?share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("Ancient Theater of Philippopolis")}</span>
                <div>
                  <img src={amphitheatre} alt="ampthitheatre"></img>
                </div>

                <p>{t("Ancient Theater of Philippopolis-description")}</p>
                <button>Take me there</button>
              </a>

              <a
                className="home-page__landmarks_landmark"
                draggable="false"
                href="https://goo.gl/maps/8ZGDAs7wi2ZK4Gc56"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("Ancient Stadium of Philippopolis")}</span>
                <div>
                  <img src={column} alt="column"></img>
                </div>

                <p>{t("Ancient Stadium of Philippopolis-description")}</p>
                <button>Take me there</button>
              </a>

              <a
                className="home-page__landmarks_landmark"
                draggable="false"
                href="https://goo.gl/maps/U3v8YjDKD23yGRCn9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("Nebet Tepe")}</span>
                <div>
                  <img src={ruins} alt="ruins"></img>
                </div>

                <p>{t("Nebet Tepe-description")}</p>
                <button>Take me there</button>
              </a>

              <a
                className="home-page__landmarks_landmark"
                draggable="false"
                href="https://www.google.com/search?tbm=lcl&sxsrf=ALeKk03KmQIqlOOk9lLO9qf-R4OL3yiK1g%3A1603724903116&ei=Z-aWX7-3BqbClwTt_a3oBA&q=plovdiv+restaurants&oq=plovdiv+resturan&gs_l=psy-ab.3.3.0i457i13k1j0i13i30k1l2j0i22i10i30k1j0i22i30k1j0i13i30k1l5.65334.67903.0.71202.16.14.0.0.0.0.365.2100.0j7j1j2.10.0....0...1c.1.64.psy-ab..6.10.2096...0j46j46i199i175i39k1j35i39k1j46i457i273k1j46i199i175k1j0i10k1j0i457i20i263k1j0i20i263k1j0i10i203k1j46i199i175i10i203k1j0i457i22i10i30k1j0i8i13i30k1.0.PjrlXGexoPQ#rlfi=hd:;si:;mv:[[42.152012441606445,24.76224121405444],[42.14563300874389,24.746147959965086],null,[42.148822805538295,24.754194587009763],17]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("Resturants")}</span>
                <div>
                  <img src={resturant} alt="resturant"></img>
                </div>

                <p>{t("Resturants-description")}</p>
                <button>Take me there</button>
              </a>

              <a
                className="home-page__landmarks_landmark"
                draggable="false"
                href="https://www.google.com/search?tbm=lcl&sxsrf=ALeKk00TVSJy3_mW_rJcBzZx4kdfciYlwg%3A1603724976075&ei=sOaWX-aSBJKQlwTz-7LADQ&q=plovdiv+shops&oq=plovdiv+shops&gs_l=psy-ab.3..0i457k1j0i22i10i30k1j0i22i30k1l8.211678.213468.0.214881.13.12.0.0.0.0.287.2085.0j2j7.9.0....0...1c.1.64.psy-ab..4.9.2082...0j38j46j35i457i39k1j46i199i175i39k1j35i39k1j46i67k1j46i199i175k1j0i67k1j46i199i175i67k1j0i203k1j0i457i20i263k1j0i10i203k1j0i10k1.0.cZGtEVa4aOc#rlfi=hd:;si:;mv:[[42.151790061927414,24.761896425657685],[42.14541060665281,24.74580317156833],null,[42.148600414653174,24.753849798613007],17]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("Various shopping boutiques")}</span>
                <div>
                  <img src={shop} alt="shop"></img>
                </div>

                <p>{t("Various shopping boutiques-description")}</p>
                <button>Take me there</button>
              </a>

              <a
                className="home-page__landmarks_landmark"
                draggable="false"
                href="https://goo.gl/maps/Fsy6FQq1P5woRNCG8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("Plovdiv Airport")}</span>
                <div>
                  <img src={airport} alt="airport"></img>
                </div>

                <p>{t("Plovdiv Airport-description")}</p>
                <button>Take me there</button>
              </a>

              <a
                className="home-page__landmarks_landmark"
                draggable="false"
                href="https://goo.gl/maps/QX4BQuNzjthcN79J9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("Kapana-Creative District")}</span>
                <div>
                  <img src={bar} alt="bar"></img>
                </div>

                <p>{t("Kapana-Creative District-description")}</p>
                <button>Take me there</button>
              </a>
            </Slider>

            <NavLink
              to={`/reservation/${
                Boolean(history.location.search) ? "?lang=bg" : ""
              }`}
              className={
                showReservationButton
                  ? "home-page__reservation-button show"
                  : "home-page__reservation-button"
              }
            >
              <FontAwesomeIcon icon={faConciergeBell} />
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation("HomePage")(HomePage);
