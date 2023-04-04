import React from "react";
import { Route, Routes } from "react-router-dom";
import { Catalog, Detail, Home, Movies, TvSeries } from "../pages";

export function RoutesContents() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvseries" element={<TvSeries />} />
      <Route path="/:id" element={<Detail />} />
      {/* <Route path="/:category" element={<Catalog />} /> */}
      {/* <Route path="/:category/:id" element={<Detail />} /> */}
      {/* <Route path="/:category/search/:keyword" element={<Catalog />} /> */}
    </Routes>
  );
}
