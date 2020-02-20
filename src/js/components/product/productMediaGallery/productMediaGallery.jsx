import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import View from "./view";

class ProductMediaGallery extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false, currentModal: null };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(index) {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen,
      currentModal: index
    }));
  }

  render() {
    const { items } = this.props;
    const { modalIsOpen, currentModal } = this.state;
    const itemsArray = items && items.slice(0, 3);

    if (items) {
      return (
        <div className="video__media__galery">
          {itemsArray &&
            itemsArray.map((item, index) =>
              item.get("type") === "video" ? (
                <img
                  className="desktop-two-column__column--aside_img"
                  src={item.get("thumbnailImage")}
                  onClick={() => this.toggleModal(index)}
                />
              ) : (
                <img
                  className="desktop-two-column__column--aside_img"
                  src={item.get("url")}
                  onClick={() => this.toggleModal(index)}
                />
              )
            )}
          <ModalGateway>
            {modalIsOpen ? (
              <Modal
                allowFullscreen={false}
                closeOnBackdropClick={false}
                onClose={this.toggleModal}
              >
                <Carousel
                  currentIndex={currentModal}
                  components={{ Footer: null, View }}
                  frameProps={{ autoSize: "height" }}
                  views={itemsArray.toJS()}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      );
    }
    return null;
  }
}

export default ProductMediaGallery;
