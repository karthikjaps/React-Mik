import React from "react";

import withPage from "./withPage";
import { fetchPage, getPage } from "./actions";
import { REDUCER_NAME } from "./constants";

class Page extends React.PureComponent {
  render() {
    const { page } = this.props;

    const template = page.get("template") && page.get("template").toLowerCase();

    return (
      <section
        className={`container-section page-section ${
          template ? `page-section--${template}` : ""
        }`}
      >
        <section className="page-content">
          <h1
            key="page-content__title"
            className={`page-content__title ${
              template ? `page-content__title--${template}` : ""
            }`}
          >
            {page.get("title")}
          </h1>
          <div
            key="page-content__richtext"
            className={`page-content__richtext ${
              template ? `page-content__richtext--${template}` : ""
            }`}
            dangerouslySetInnerHTML={{ __html: page.get("html") }}
          />
        </section>
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(fetchPage({ url }, REDUCER_NAME));
  }
}

export default withPage(Page, getPage, REDUCER_NAME);
