import React from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form/immutable";

class ImageSlide extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    };
  }

  componentDidMount() {
    const { data, selectedOptionId } = this.props;
    this.setState({
      images: this.slider
    });

    if (this.slider && selectedOptionId) {
      this.setImage(data, selectedOptionId);
    }
  }
  setSliderOffOrOn(data) {
    if (data.get("swatchOptions")) return false;
    else return true;
  }

  componentDidUpdate(prevProps) {
    const { data, selectedOptionId } = this.props;
    if (prevProps.selectedOptionId !== selectedOptionId) {
      if (this.slider && selectedOptionId) {
        this.setImage(data, selectedOptionId);
      }
    }
  }

  setImage(data, selectedOptionId) {
    const selectedOption =
      data.get("swatchOptions") &&
      data.get("swatchOptions").find(n => n.get("id") === selectedOptionId);

    const selectedImage = this.slider.props.children.find(
      n => n.props.children.props.src === selectedOption.get("image")
    );

    selectedImage && this.slider.slickGoTo(selectedImage.key);
  }

  render() {
    const { data, selectedOptionId } = this.props;

    if (data) {
      return (
        <div className="image-slide">
          <div className="image-slide__slider">
            <Slider
              ref={n => (this.slider = n)}
              dots={this.setSliderOffOrOn(data)}
              arrows={false}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={this.setSliderOffOrOn(data)}
              autoplaySpeed={7000}
              pauseOnHover={false}
              pauseOnFocus={false}
            >
              {data.get("images") &&
                data.get("images").size &&
                data.get("images").map((imgUrl, index) => {
                  return (
                    <div key={index} className="image-slide__slider__image">
                      <img src={imgUrl} />
                    </div>
                  );
                })}
            </Slider>
          </div>
          {!!data.get("discount") && (
            <div className="product__header image-slide__label image-slide__label--left">
              <span className="product__header__info image-slide__label__text">{`${data.get(
                "discount"
              )}% discount`}</span>
            </div>
          )}
        </div>
      );
    }
    return null;
  }
}

const selector = formValueSelector("addToBagForm");

export default connect(state => ({
  selectedOptionId: selector(state, "swatchOptionId")
}))(ImageSlide);
