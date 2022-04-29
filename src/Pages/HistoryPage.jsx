import React from "react";
import AppBarAppgregate from "../Components/AppBars/AppBarAppgregate";
import AppBarHistory from "../Components/AppBars/AppBarHistory";
import MainLayout from "../Components/Layouts/MainLayout";

function HistoryPage() {
  const { AppLayout } = MainLayout();

  return <>{AppLayout(AppBarHistory)}</>;
}

export default HistoryPage;
