import "./core/ui/style/reference/_color.scss";
import "./core/ui/style/reference/_measure.scss";
import "./core/ui/style/_overrides.scss";
import "./core/ui/style/_state-hooks.scss";
import "./core/ui/style/typography/_typography.scss";
import "./core/ui/style/_font.scss";

import React from "react";
import ReactDom from "react-dom";

import RootApp from "./core/root-app/RootApp";

ReactDom.render(<RootApp />, document.getElementById("root"));
