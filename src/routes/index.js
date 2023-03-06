import React from "react";
import { Route, Routes as Switch } from 'react-router-dom';

import Login from "../pages/Login";
import Page404 from "../pages/Page404";

export default function Routes() {
  return (
    <Switch>
      <Route path='/' element={<Login />} exact />
      <Route path='*' element={<Page404 />} />
    </Switch>
  );
}
