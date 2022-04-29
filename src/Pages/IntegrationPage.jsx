import React from "react";
import AppBarIntegration from "../Components/AppBars/AppBarIntegration";
import MainLayout from "../Components/Layouts/MainLayout";

function IntegrationPage() {
  const { AppLayout } = MainLayout();

  return <>{AppLayout(AppBarIntegration)}</>;
}

export default IntegrationPage;
