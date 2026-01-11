import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PortalLayout from "./layouts/PortalLayout";

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

        {/* ✅ must match Listing.tsx useParams<{ id: string }>() */}
        <Route path="/listing/:id" element={<Listing />} />

        {/* ✅ sensible fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
