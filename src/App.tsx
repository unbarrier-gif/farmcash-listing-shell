import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Wanted from "./pages/Wanted";
import PortalHeader from "./components/PortalHeader";
import PortalFooter from "./components/PortalFooter";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <PortalHeader />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/for-sale" element={<Home />} />
            <Route path="/listing/:slug" element={<Listing />} />
            <Route path="/wanted" element={<Wanted />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      <PortalFooter />
    </div>
  );
};

export default App;
