import React from "react";

import Modal from "../../components/modal/modal";
import Card from "../../components/card/card";
import { getUrl } from "../../../../server/helpers/routing";

const ConfirmForm = ({
  action,
  method,
  onSubmit,
  onDelete,
  onCancel,
  title,
  text
}) => {
  return (
    <section className="confirm">
      <Modal>
        <Card title={title} html={text} cardClassName="fullscreen">
          <form
            onSubmit={onSubmit}
            action={getUrl(action)}
            method={method}
            className="form"
          >
            <div className="form-field confirm__form__field">
              <input
                type="submit"
                value="Confirm"
                className="form__buttons__button button button--danger"
              />
            </div>

            <div className="form-field confirm__form__field">
              <input
                type="button"
                value="Cancel"
                className="form__buttons__button button"
                onClick={onCancel}
              />
            </div>
          </form>
        </Card>
      </Modal>
    </section>
  );
};

export default ConfirmForm;
