import React from "react";
import AppBarAppgregate from "../Components/AppBars/AppBarAppgregate";
import MainLayout from "../Components/Layouts/MainLayout";

function AppgregatePage() {
  const { AppLayout } = MainLayout();

  return <>{AppLayout(AppBarAppgregate)}</>;
}

export default AppgregatePage;
