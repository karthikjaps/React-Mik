import React from "react";

import Overlay from "../overlay/overlay";

class Modal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.keydownHandler = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keydownHandler);
    document.body.style.overflowY = "hidden";
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler);
    document.body.style.overflowY = "visible";
  }

  handleKeyDown(e) {
    if (e.key === "Escape" && !document.activeElement.type) {
      this.props.onClick();
    }
  }

  render() {
    const {
      className,
      modalClassName,
      children,
      onClick,
      wide,
      narrow
    } = this.props;
    return (
      <section className={className || ""}>
        <Overlay isVisible={true} onClick={onClick} />
        <div
          className={`modal ${
            modalClassName ? `modal--${modalClassName}` : ""
          } ${wide ? "modal--wide" : ""} ${narrow ? "modal--narrow" : ""}`}
        >
          {children}
        </div>
      </section>
    );
  }
}

export default Modal;
