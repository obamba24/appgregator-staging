import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import AppBarDashboard from "../Components/AppBars/AppBarDashboard";

function DashboardPage() {
  const { AppLayout } = MainLayout();

  return <>{AppLayout(AppBarDashboard)}</>;
}

export default DashboardPage;
