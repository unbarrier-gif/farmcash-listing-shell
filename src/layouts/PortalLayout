import React from "react";
import { Outlet } from "react-router-dom";
import PortalHeader from "../components/PortalHeader";
import PortalFooter from "../components/PortalFooter";

const PortalLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f4f6]">
      <PortalHeader />

      {/* This is the “big poster area” */}
      <main className="flex-1">
        <Outlet />
      </main>

      <PortalFooter />
    </div>
  );
};

export default PortalLayout;
