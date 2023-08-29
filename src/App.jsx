import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Detail, { fetchCountry } from "./pages/Detail";
import Home, { fetchApi } from "./pages/Home";
import Error from "./pages/Error";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} loader={fetchApi} errorElement={<Error/>}/>
          <Route path="/:name" element={<Detail />} loader={fetchCountry} errorElement={<Error/>}/>
      </Route>
    )
  );

  return (
      <RouterProvider router={router} />
  );
};

export default App;
