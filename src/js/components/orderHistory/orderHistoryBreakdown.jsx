import React, { Fragment } from "react";

import OrderHistoryBreakdownItem from "./orderHistoryBreakdownItem";
import withTranslations from "../../containers/translations/withTranslations";

class OrderHistoryBreakdown extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { items, currencyCode, translations } = this.props;

    return (
      <Fragment>
        <span
          className={`breakdown-toggle ${
            this.state.isOpen ? "breakdown-toggle--open" : ""
          }`}
          onClick={this.toggleOpen}
        >
          {translations.get("show_order_items") || "Show items"}
        </span>
        {this.state.isOpen && (
          <div className="breakdown-section">
            <div className="breakdown-section__list">
              {items &&
                items.size > 0 &&
                items.map((item, index) => (
                  <OrderHistoryBreakdownItem
                    item={item}
                    currencyCode={currencyCode}
                    key={index}
                  />
                ))}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withTranslations(OrderHistoryBreakdown, ["show_order_items"]);
