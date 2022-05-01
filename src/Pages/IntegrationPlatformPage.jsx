import React from "react";
import AppBarConnect from "../Components/AppBars/AppBarConnect";
import MainLayout from "../Components/Layouts/MainLayout";

function IntegrationPlatformPage() {
  const { AppLayout } = MainLayout();

  return <>{AppLayout(AppBarConnect)}</>;
}

export default IntegrationPlatformPage;
