import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navbar } from "../utils/navbar";
import FlowersProvider from "../context/flowers";
const Root = () => {
  return (
    <div>
      <FlowersProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              {navbar.map(({ path, id, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </FlowersProvider>
    </div>
  );
};
export default Root;
