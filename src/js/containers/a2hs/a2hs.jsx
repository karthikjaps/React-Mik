import React from "react";
import { connect } from "react-redux";

import { setDeferredPrompt } from "../app/actions";
import { selectDeferredPrompt } from "../app/reducer";
import { createStructuredSelector } from "reselect";

class AddToHomeScreen extends React.PureComponent {
  render() {
    const {
      children,
      deferredPrompt,
      onSetDeferredPrompt,
      className,
      ...props
    } = this.props;

    return (
      <a
        {...props}
        className={(className || "") + (!deferredPrompt ? " disabled" : "")}
        onClick={e => {
          e.preventDefault();

          // if the prompt has been deferred, we are able to show it
          deferredPrompt.prompt();

          // follow what the user has done with the prompt.
          deferredPrompt.userChoice.then(choiceResult => {
            // dispose the prompt
            onSetDeferredPrompt(null);
          });
        }}
      >
        {children}
      </a>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  deferredPrompt: selectDeferredPrompt
});

const mapDispatchToProps = dispatch => {
  return {
    onSetDeferredPrompt: data => dispatch(setDeferredPrompt(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToHomeScreen);
