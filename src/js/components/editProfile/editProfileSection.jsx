import React from "react";

import EditProfileForm from "./editProfileForm";
import { getUrl } from "../../../../server/helpers/routing";

const EditProfileSection = ({
  url,
  userProfile,
  messages,
  apiErrorMessage,
  handleSubmit,
  handleClose,
  returnUrl
}) => (
  <div className="edit-profile__content">
    <div className="edit-profile__content-section">
      <EditProfileForm
        initialValues={userProfile}
        action={getUrl(url)}
        method="post"
        messages={messages}
        apiErrorMessage={apiErrorMessage}
        onSubmit={handleSubmit}
        returnUrl={returnUrl}
        onCancel={handleClose}
      />
    </div>
  </div>
);

export default EditProfileSection;
