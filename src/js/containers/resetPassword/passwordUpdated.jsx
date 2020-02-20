import React from "react";

import PasswordUpdatedCard from "../../components/resetPassword/passwordUpdatedCard";
import Modal from "../../components/modal/modal";

class PasswordUpdated extends React.PureComponent {
  render() {
    const { title, html, url, history } = this.props;

    return (
      <Modal narrow={true} onClick={history.goBack}>
        <PasswordUpdatedCard
          url={url}
          title={title}
          html={html}
          handleClose={history.goBack}
        />
      </Modal>
    );
  }
}

export default PasswordUpdated;
