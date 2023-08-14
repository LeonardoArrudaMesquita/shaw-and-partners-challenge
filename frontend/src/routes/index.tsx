import {
  BrowserRouter,
  Routes as RouterDOMRoutes,
  Route,
} from "react-router-dom";

import App from "../App";
import React from "react";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterDOMRoutes>
        <Route path="/" element={<App />} />        
      </RouterDOMRoutes>
    </BrowserRouter>
  );
}
