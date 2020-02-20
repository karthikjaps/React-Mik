import React from "react";
import { connect } from "react-redux";

import { logout } from "./actions";
import { getUrl } from "../../../../server/helpers/routing";

const RETURN_URL = "/";

class Logout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.props.onLogout();
    this.props.history.push(getUrl(RETURN_URL));
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
