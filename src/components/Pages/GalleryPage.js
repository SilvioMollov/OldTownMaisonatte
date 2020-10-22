import React, { Component } from "react";
import Slider from "react-slick";
import Modal from "../Utilities/Modal";

import "../../styles/GalleryPage.scss";
import { images } from "../Utilities/images";

class Gallery extends Component {
  state = {
    showPic: false,
    headSliderSettings: {
      initialSlide: 0,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    },
  };

  pictureViewHandler = (id) => {
    this.setState({
      headSliderSettings: {
        ...this.state.headSliderSettings,
        initialSlide: id - 1,
      },
      showPic: !this.state.showPic,
    });
  };

  

  closeModalHandler = () => {
    this.setState({ showPic: false });
  };

  render() {
    const { showPic, headSliderSettings } = this.state;

    console.log(headSliderSettings.initialSlide);

    return (
      <div className="gallery-page__container">
        <h2>Gallery</h2>
        <ul className="gallery-page__grid-container">
          {images.map(({ src, id, title }) => {
            return (
              <li
                className="gallery-page__grid-item"
                key={id}
                onClick={() => this.pictureViewHandler(id)}
              >
                <figure>
                  <img src={src} alt={title} />
                </figure>
              </li>
            );
          })}
        </ul>
        {showPic ? (
          <Modal showModal={showPic} closeModal={this.closeModalHandler}>
            <Slider {...headSliderSettings} className="gallery-page__slider">
              {images.map(({ src, id, title }) => {
                return <img src={src} alt={title} key={id}></img>;
              })}
            </Slider>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default Gallery;
