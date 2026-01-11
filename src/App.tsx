import React from "react";
import { Routes, Route } from "react-router-dom";
import PortalLayout from "./layouts/PortalLayout";
import { Navigate } from "react-router-dom";

<Route path="*" element={<Navigate to="/" replace />} />


import Home from "./pages/Home";
import ForSale from "./pages/ForSale";
import Wanted from "./pages/Wanted";
import Listing from "./pages/Listing";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<PortalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/for-sale" element={<ForSale />} />
        <Route path="/wanted" element={<Wanted />} />
        <Route path="/listing/:id" element={<Listing />} />
      </Route>
    </Routes>
  );
};

export default App;
