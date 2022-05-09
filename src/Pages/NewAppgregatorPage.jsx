import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import AppBarNewAppgregator from "../Components/AppBars/AppBarNewAppgregator";

function NewAppgregatorPage() {
  const { AppLayout } = MainLayout();

  return <>{AppLayout(AppBarNewAppgregator)}</>;
}

export default NewAppgregatorPage;
