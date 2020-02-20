import React from "react";

import Overlay from "../overlay/overlay";

class Drawer extends React.PureComponent {
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
    const { className, drawerClassName, children, onClick } = this.props;
    return (
      <section className={className || ""}>
        <Overlay isVisible={true} onClick={onClick} />
        <div
          className={`drawer ${
            drawerClassName ? `drawer--${drawerClassName}` : ""
          }`}
        >
          {children}
        </div>
      </section>
    );
  }
}

export default Drawer;
