import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

const SERVICE_WORKER_PATH = "/service-worker.js";

if ("serviceWorker" in navigator) {
  window.navigator.serviceWorker
    .register(SERVICE_WORKER_PATH)
    .then(function () {
      console.log("Service Worker Registered");
    });
}

ReactDOM.render(<App />, document.getElementById("root"));

/* eslint-disable @typescript-eslint/ban-ts-comment, no-console */
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept((error) => {
    console.error("An error occurred while accepting new version");
    console.error(error);
  });
}
