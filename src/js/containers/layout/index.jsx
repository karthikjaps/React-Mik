import React from "react";
import { connect } from "react-redux";

import Header from "../header";
import Footer from "../footer";
import Snackbar from "../snackbar";
import ErrorMessage from "../errorBoundary/errorMessage";
import Breadcrumbs from "../breadcrumbs";
import Meta from "../../components/meta/meta";
import Credits from "../../components/credits/credits";
import Toast from "../cart/toast";
import FadeTransition from "../../components/transitions/fade";
import ScrollToTop from "../../components/routes/scrollToTop";
import EntryPopup from "../entryPopup";
import { selectIsLoading, selectMeta, selectUrl } from "../app/reducer";
import { selectCategoryTitle } from "../catalogue/reducer";
import { selectProductTitle } from "../product/reducer";
import { selectTranslations } from "../translations/reducer";
import { selectSelectedLang } from "../multiLanguage/reducer";
import { createStructuredSelector } from "reselect";

class Layout extends React.PureComponent {
  // returns the JSX that will be rendered for this component
  render() {
    const {
      children,
      meta,
      url,
      isLoading,
      showBreadcrumbs,
      lang,
      selectedlang,
      categoryTitle,
      productTitle
    } = this.props;
    return (
      <div className={(isLoading ? "is-loading" : "") + " layout"}>
        <ScrollToTop />
        <Meta
          meta={meta}
          url={url}
          lang={selectedlang}
          title={productTitle ? productTitle : categoryTitle}
        />
        <Header />
        <FadeTransition in={!isLoading}>
          <main
            id="main"
            className={`main ${
              process.env.ALWAYS_SHOW_NAV
                ? "main__side-nav--always-open-on-dekstop"
                : ""
            }`}
          >
            <Toast />
            <Snackbar />
            <ErrorMessage />
            {showBreadcrumbs && <Breadcrumbs />}
            {children}
          </main>
        </FadeTransition>
        <Footer />
        <Credits />
        <EntryPopup />
      </div>
    );
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  meta: selectMeta,
  productTitle: selectProductTitle,
  categoryTitle: selectCategoryTitle,
  url: selectUrl,
  lang: selectTranslations,
  selectedlang: selectSelectedLang
});

export default connect(mapStateToProps)(Layout);
