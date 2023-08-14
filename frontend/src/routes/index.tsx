import {
  BrowserRouter,
  Routes as RouterDOMRoutes,
  Route,
} from "react-router-dom";

import CSVDataSeacherPage from '../components/views/CSVDataSeacherPage';
import React from "react";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterDOMRoutes>
        <Route path="/" element={<CSVDataSeacherPage />} />        
      </RouterDOMRoutes>
    </BrowserRouter>
  );
}
