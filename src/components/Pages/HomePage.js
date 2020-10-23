import React, { Component } from "react";
import "../../styles/HomePage.scss";
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
    showFeatureSlider: false,
  };

  componentDidMount() {
    this.trackScreenSizeListener();
    window.addEventListener("resize", this.trackScreenSizeListener);
  }

  trackScreenSizeListener = () => {
    const { slidesToShow } = this.state;

    if (window.innerWidth < 600 && slidesToShow !== 1) {
      this.setState({ slidesToShow: 1, showFeatureSlider: true });
    } else if (
      window.innerWidth > 600 &&
      window.innerWidth <= 1200 &&
      this.state.slidesToShow !== 2
    ) {
      this.setState({ slidesToShow: 2, showFeatureSlider: false });
    } else if (window.innerWidth > 1200 && slidesToShow !== 3) {
      this.setState({ slidesToShow: 3 });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.trackScreenSizeListener);
  }

  render() {
    const { slidesToShow, showFeatureSlider } = this.state;

    const headSliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    const featureSliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };

    const landmarksSliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };

    return (
      <div className="home-page__container">
        <div className="home-page__contact-information"></div>
        <Slider {...headSliderSettings} className="home-page__slider slider">
          <div>
            <img src={Img1} alt="pic1"></img>
          </div>
          <div>
            <img src={Img2} alt="pic2"></img>
          </div>
          <div>
            <img src={Img3} alt="pic3"></img>
          </div>
        </Slider>

        <h2>Most popular Features</h2>

        {/* {showFeatureSlider ? (
          <ul className="home-page__grid-container__features">
            <Slider {...featureSliderSettings}>
              <li className="home-page__features_grid-item">
                <FontAwesomeIcon icon={faHome} />
                <span>Whole apartment</span>
              </li>
              <li className="home-page__features_grid-item">
                <h1 className="area">125 sqm</h1>
                <span>Size</span>
              </li>
              <li className="home-page__features_grid-item">
                <FontAwesomeIcon icon={faSeedling} />
                <span>Garden</span>
              </li>
              <li className="home-page__features_grid-item">
                <FontAwesomeIcon icon={faUtensils} />
                <span>BBQ facilities</span>
              </li>
              <li className="home-page__features_grid-item">
                <FontAwesomeIcon icon={faWifi} />
                <span>Free Wifi</span>
              </li>
              <li className="home-page__features_grid-item">
                <FontAwesomeIcon icon={faParking} />
                <span>Free Parking</span>
              </li>
              <li className="home-page__features_grid-item">
                <FontAwesomeIcon icon={faSnowflake} />
                <span>AC</span>
              </li>
              <li className="home-page__features_grid-item">
                <FontAwesomeIcon icon={faBath} />
                <span>Two Bathrooms</span>
              </li>
            </Slider>
          </ul>
        ) : ( */}
        <ul className="home-page__grid-container__features">
          <li className="home-page__features_grid-item">
            <FontAwesomeIcon icon={faHome} />
            <span>Whole apartment</span>
          </li>
          <li className="home-page__features_grid-item">
            <h1 className="area">125 sqm</h1>
            <span>Size</span>
          </li>
          <li className="home-page__features_grid-item">
            <FontAwesomeIcon icon={faSeedling} />
            <span>Garden</span>
          </li>
          <li className="home-page__features_grid-item">
            <FontAwesomeIcon icon={faUtensils} />
            <span>BBQ facilities</span>
          </li>
          <li className="home-page__features_grid-item">
            <FontAwesomeIcon icon={faWifi} />
            <span>Free Wifi</span>
          </li>
          <li className="home-page__features_grid-item">
            <FontAwesomeIcon icon={faParking} />
            <span>Free Parking</span>
          </li>
          <li className="home-page__features_grid-item">
            <FontAwesomeIcon icon={faSnowflake} />
            <span>AC</span>
          </li>
          <li className="home-page__features_grid-item">
            <FontAwesomeIcon icon={faBath} />
            <span>Two Bathrooms</span>
          </li>
        </ul>
        {/* )} */}

        <div className="home-page__grid-container__description">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.032340326501!2d24.74877871570581!3d42.14959475635865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd13ddbaa269f%3A0xf448e8ecd792d098!2sOld%20Town%20Maisonette!5e0!3m2!1sen!2sbg!4v1603276039920!5m2!1sen!2sbg"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: "0", width: "100%" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <h2>Stay in the heart of Plovdiv</h2>
          <p className="home-page__description_grid-item">
            Set in Plovdiv, within 700 m of Roman Theatre Plovdiv and 5 km of
            Plovdiv Plaza, Old Town Maisonette offers accommodation with free
            WiFi, air conditioning, a garden and barbecue facilities. Guests
            benefit from a balcony and a terrace. The apartment features 2
            bedrooms, a flat-screen TV with satellite channels, an equipped
            kitchen with a dishwasher and a microwave, and 2 bathrooms with a
            shower. International Fair Plovdiv is 6 km from the apartment, while
            Hisar Kapia is 200 m away. The nearest airport is Plovdiv
            International Airport, 14 km from Old Town Maisonette. This is our
            guests' favourite part of Plovdiv, according to independent reviews.
            We speak your language!
          </p>
        </div>

        <div className="home-page__landmarks_container">
          <h2>Popular atractions nearby</h2>
          <Slider
            {...landmarksSliderSettings}
            className="home-page__landmarks_slider"
          >
            <div className="home-page__landmarks_landmark">
              <span>Ancient Amphitheatre</span>
              <img src={amphitheatre} alt="ampthitheatre"></img>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="home-page__landmarks_landmark">
              <span>Ancient Roman Stadium</span>
              <img src={column} alt="column"></img>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="home-page__landmarks_landmark">
              <span>Ruins</span>
              <img src={ruins} alt="ruins"></img>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="home-page__landmarks_landmark">
              <span>Resturants</span>
              <img src={resturant} alt="resturant"></img>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="home-page__landmarks_landmark">
              <span>Various shopping boutiques</span>
              <img src={shop} alt="shop"></img>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="home-page__landmarks_landmark">
              <span>Plovdiv Airport</span>
              <img src={airport} alt="airport"></img>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="home-page__landmarks_landmark">
              <span>Kapana district</span>
              <img src={bar} alt="bar"></img>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default HomePage;
