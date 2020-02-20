import React from "react";
import { hydrate } from "react-dom";

import App from "./containers/app";

hydrate(<App />, document.getElementById("root"));
