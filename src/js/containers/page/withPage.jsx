import React from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import { connect } from "react-redux";
import { compose } from "redux";
import { default as pathToRegexp } from "path-to-regexp";

import { selectPage, createReducer } from "./reducer";
import { renderPage } from "./actions";
import { REDUCER_NAME } from "./constants";
import { setTitle, setMeta } from "../app/actions";
import { selectUrl } from "../app/reducer";
import { createStructuredSelector } from "reselect";

const withPage = (WrappedComponent, getData, reducerName) => {
  createReducer(reducerName);

  class Page extends React.PureComponent {
    componentDidMount() {
      const { url, onLoadPage, match, onSetTitle, onSetMeta } = this.props;

      // test if url changed since the last call of onLoadPage
      const pageData = this.props[REDUCER_NAME].get(reducerName);
      const previousUrl = pageData ? pageData.get("url") : undefined;

      if (!pathToRegexp(match.path).test(previousUrl)) {
        // content doesn't exist in store
        onLoadPage(reducerName, getData, { url: match.url });
      } else if (!pathToRegexp(match.path).test(url)) {
        // content exists in store and user has navigated to a new URL
        onSetTitle(pageData.get("title"));
        onSetMeta(pageData.get("meta"));
      }
    }

    render() {
      const { page, ...rest } = this.props;

      return <WrappedComponent page={page.get(reducerName)} {...rest} />;
    }
  }
  hoistNonReactStatic(Page, WrappedComponent);
  return Page;
};

const mapStateToProps = createStructuredSelector({
  page: selectPage,
  url: selectUrl
});

const mapDispatchToProps = dispatch => ({
  onLoadPage: (reducerName, get, data) =>
    dispatch(renderPage({ reducerName, get, data })),
  onSetTitle: data => dispatch(setTitle(data)),
  onSetMeta: data => dispatch(setMeta(data))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withPage
);
