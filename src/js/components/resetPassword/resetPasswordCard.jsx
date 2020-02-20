import React from "react";

import Card from "../card/card";
import ResetPasswordForm from "./resetPasswordForm";
import { getUrl } from "../../../../server/helpers/routing";

const ResetPasswordCard = ({
  url,
  title,
  messages,
  apiErrorMessage,
  handleSubmit,
  handleClose
}) => (
  <Card className="forgot-password-card">
    <div className="forgot-password-card__header">
      <h2 className="forgot-password-card__title">{title}</h2>
      <div className="card-close">
        <span className="card-close__button" onClick={handleClose} />
      </div>
    </div>
    <div className="forgot-password-card__content forgot-password-card__content--columns">
      <div className="forgot-password-card__content-section">
        <ResetPasswordForm
          action={getUrl(url)}
          method="post"
          messages={messages}
          apiErrorMessage={apiErrorMessage}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  </Card>
);

export default ResetPasswordCard;
