import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import OfflineManager from "../../util/offlineManager";
import { configureStore } from "../../util/store";
import { selectRoutes } from "../routes/reducer";
import Routes from "../routes";
import { TopLevelErrorBoundary } from "../errorBoundary";
import { USER_PROFILE_STORAGE_KEY } from "../../../../service/constants";
import { setProfile } from "../profile/actions";
import { STORE_ID } from "../../../../service/catalogueConfig/constants";
import { fetchCatalogueConfig } from "../catalogueSort/actions";

/**
 * Root component that renders the client-side application
 */
export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false
    };

    // grab the state from a global variable injected into the server-generated HTML
    const preloadedState = window.__PRELOADED_STATE__;

    // allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__;

    const user = window.__USER_PROFILE__;
    localStorage.setItem(USER_PROFILE_STORAGE_KEY, user);
    delete window.__USER_PROFILE__;

    const _lang = window.__LANG__;
    localStorage.setItem("LANG", _lang);
    delete window.__LANG__;

    const _storeId = window.__STORE_ID__;
    localStorage.setItem("STORE_ID", _storeId);
    // delete window.__STORE_ID__;

    this.store = configureStore(preloadedState);
  }

  componentDidMount() {
    // install service worker
    initServiceWorker();
    initOffline();
    initNoJSObserver();

    let storeId = localStorage.getItem("STORE_ID") || STORE_ID;
    this.store.dispatch(fetchCatalogueConfig({ storeId }));

    const profile = localStorage.getItem(USER_PROFILE_STORAGE_KEY);
    if (profile) {
      this.store.dispatch(setProfile(JSON.parse(profile)));
    }
  }

  render() {
    const routes = selectRoutes(this.store.getState());
    return (
      <Provider store={this.store}>
        <div id="app">
          <TopLevelErrorBoundary>
            <BrowserRouter>
              <Routes routes={routes} />
            </BrowserRouter>
          </TopLevelErrorBoundary>
        </div>
      </Provider>
    );
  }
}

const initNoJSObserver = () => {
  let targetNode = document.querySelector("html");

  const config = { attributes: true, childList: false, subtree: false };

  const callback = (mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (mutation.type == "attributes") {
        if (targetNode.classList.contains("no-js")) {
          targetNode.classList.remove("no-js");
        }
      }
    }
  };

  let observer = new MutationObserver(callback);

  observer.observe(targetNode, config);
};

const initServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(reg => {
        console.log("Successfully registered service worker", reg);
      })
      .catch(err => {
        console.warn("Error whilst registering service worker", err);
      });
  }
};

const initOffline = () => {
  window.addEventListener(
    "online",
    e => {
      OfflineManager.setOffline(false);
    },
    false
  );

  window.addEventListener(
    "offline",
    e => {
      OfflineManager.setOffline(true);
    },
    false
  );

  if (!navigator.onLine) {
    OfflineManager.setOffline(true);
  }
};
