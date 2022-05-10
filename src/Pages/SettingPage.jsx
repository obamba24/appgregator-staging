import React from "react";

import AppBarBilling from "../Components/AppBars/AppBarBilling";
import AppBarSetting from "../Components/AppBars/AppBarSetting";
import MainLayout from "../Components/Layouts/MainLayout";

function SettingPage() {
  const { AppLayout } = MainLayout();

  return <>{AppLayout(AppBarSetting)}</>;
}

export default SettingPage;
