import React from "react";

import EmailSentCard from "../../components/resetPassword/emailSentCard";
import Modal from "../../components/modal/modal";

class EmailSent extends React.PureComponent {
  render() {
    const { title, html, url, history } = this.props;

    return (
      <Modal narrow={true} onClick={history.goBack}>
        <EmailSentCard
          url={url}
          title={title}
          html={html}
          handleClose={history.goBack}
        />
      </Modal>
    );
  }
}

export default EmailSent;
