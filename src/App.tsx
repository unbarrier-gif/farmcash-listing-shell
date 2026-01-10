import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Wanted from "./pages/Wanted";
import PortalHeader from "./components/PortalHeader";
import PortalFooter from "./components/PortalFooter";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header (single source of truth) */}
      <PortalHeader />

      {/* Page content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          Replace Home with a proper ForSale page later. */}
          <Route path="/for-sale" element={<Home />} />

          <Route path="/listing/:slug" element={<Listing />} />
          <Route path="/wanted" element={<Wanted />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer (leave as-is for now; we'll refactor next) */}
      <PortalFooter />
    </div>
  );
};

export default App;
