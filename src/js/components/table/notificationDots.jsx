import React from "react";

import LinkButton from "../buttons/linkButton";

export default class NotificationDots extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

    this.onWindowOpen = this.onWindowOpen.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isVisible !== this.state.isVisible) {
      if (!this.state.isVisible) {
        this.list.style.bottom = "auto";
      }
    }
  }

  onWindowOpen(e) {
    e.persist();
    this.setState(
      prevState => {
        return {
          isVisible: !prevState.isVisible
        };
      },
      () => {
        if (this.list) {
          const bounding = this.list.getBoundingClientRect();
          const top = e.clientY + 20;

          this.list.style.top = `${top}px`;

          if (
            !(
              top - bounding.top + bounding.bottom <=
              (window.innerHeight || document.documentElement.clientHeight)
            )
          ) {
            this.list.style.top = "auto";
            this.list.style.bottom = "20px";
          }
        }
      }
    );
  }

  handleEvent(e) {
    if (
      !(
        e.target.classList.contains("notification-dots__dots-icon") ||
        e.target.classList.contains("notification-dots__dots-icon")
      ) ||
      parseInt(e.target.getAttribute("data-reference")) !== this.props.id
    ) {
      this.setState({
        isVisible: false
      });
    }
  }

  componentDidMount() {
    document.addEventListener("click", this.handleEvent);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleEvent);
  }

  render() {
    const { items, id } = this.props;

    return (
      <span className="notification-dots__anchor" onClick={this.onWindowOpen}>
        <i
          data-reference={id}
          className="material-icons notification-dots__dots-icon"
        >
          more_vert
        </i>
        <div
          className={`notification-dots__content ${
            this.state.isVisible ? "open" : ""
          }`}
          ref={n => (this.list = n)}
        >
          <ul className="notification-dots__list">
            {items &&
              items.map((item, index) => {
                if (item.show) {
                  return (
                    <li key={index}>
                      <div className={item.clasName} />
                      <LinkButton
                        toUrl={item.link}
                        title={item.title}
                        text={item.title}
                        onLinkClick={item.onClick}
                        className="notification-dots__link-item"
                        touchClassName="popup-link-touch"
                      />
                    </li>
                  );
                } else {
                  return null;
                }
              })}
          </ul>
        </div>
      </span>
    );
  }
}
