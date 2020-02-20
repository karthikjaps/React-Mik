import React from "react";

class CollapsibleList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.toggle();
  }

  render() {
    const { items, className } = this.props;

    return (
      <div
        ref={n => {
          this.collapsibleList = n;
        }}
        className={`collapsible-list ${className || ""}`}
      >
        <ul className="collapsible-list__list">
          {items &&
            items.map((n, index) => (
              <li key={index} className="collapsible-item">
                <input
                  id={`collapsible-item-${index}`}
                  className="collapsible-item__toggle"
                  type="radio"
                  name="collapsible-item__toggle"
                  defaultChecked={index === 0}
                  onClick={e => this.toggle()}
                />
                <label
                  htmlFor={`collapsible-item-${index}`}
                  className="collapsible-item__label"
                >
                  {n.name}
                </label>
                <div className="collapsible-item__content">
                  <div
                    className="collapsible-item__content__inner"
                    dangerouslySetInnerHTML={{ __html: n.content }}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }

  toggle() {
    let collapsibleList = this.collapsibleList;
    collapsibleList.style.height = "";

    setTimeout(() => {
      if (collapsibleList.scrollHeight === collapsibleList.clientHeight) {
        const height = collapsibleList.querySelector(
          ":checked + .collapsible-item__label + .collapsible-item__content"
        ).clientHeight;
        collapsibleList.style.height = `${height + 74}px`;
      }
    });
  }
}

export default CollapsibleList;
