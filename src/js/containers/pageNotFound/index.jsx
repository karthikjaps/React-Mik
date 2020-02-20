import React from "react";
import { connect } from "react-redux";

import { fetchPageNotFound } from "./actions";
import { selectTitle, selectHtml } from "./reducer";
import { createStructuredSelector } from "reselect";

const URL = "/page-not-found";

class PageNotFound extends React.PureComponent {
  componentDidMount() {
    const { onLoadPageNotFound, title } = this.props;
    if (!title) {
      onLoadPageNotFound({ url: URL });
    }
  }

  // returns the JSX that will be rendered for this component
  render() {
    const { title, html } = this.props;
    return (
      <section className="container-section page-section">
        <section className="page-content">
          {!!html && [
            <h1 key="page-content__title" className="page-content__title">
              {title}
            </h1>,
            <div
              key="page-content__richtext"
              className="page-content__richtext"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ]}
        </section>
      </section>
    );
  }

  static fetchData(store) {
    return store.dispatch(fetchPageNotFound({ url: URL }));
  }
}

const mapStateToProps = createStructuredSelector({
  title: selectTitle,
  html: selectHtml
});

const mapDispatchToProps = dispatch => {
  return {
    onLoadPageNotFound: data => dispatch(fetchPageNotFound(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNotFound);
