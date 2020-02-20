import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import hoistNonReactStatic from "hoist-non-react-statics";
import { createStructuredSelector } from "reselect";
import { fromJS } from "immutable";

import { selectTranslations } from "../translations/reducer";

function withTranslations(ComposedComponent, params) {
  class Translations extends React.PureComponent {
    constructor(props) {
      super(props);

      const { translationsPack } = this.props;

      if (translationsPack) {
        const selectedKeys = translationsPack.filter((value, key) =>
          params.includes(key)
        );
        this.state = { selectedKeys };
      } else {
        this.state = { selectedKeys: {} };
      }
    }

    render() {
      const { selectedKeys } = this.state;
      return <ComposedComponent translations={selectedKeys} {...this.props} />;
    }
  }

  hoistNonReactStatic(Translations, ComposedComponent);

  return Translations;
}

const mapStateToProps = createStructuredSelector({
  translationsPack: selectTranslations
});

export default compose(
  connect(mapStateToProps),
  withTranslations
);
