import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import View from "./view";

class ProductVideoBottom extends React.PureComponent {
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
    const { items, className } = this.props;
    const { modalIsOpen, currentModal } = this.state;
    const itemsArray = items && items.slice(0, 2);

    return (
      <div className={className}>
        {itemsArray &&
          itemsArray.map((item, index) => (
            <img
              key={index}
              src={item.get("imageUrl")}
              onClick={() => this.toggleModal(index)}
            />
          ))}

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
}

export default ProductVideoBottom;
