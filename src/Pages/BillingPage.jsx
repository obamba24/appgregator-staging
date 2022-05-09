import React from "react";

import AppBarAppgregate from "../Components/AppBars/AppBarAppgregate";
import AppBarBilling from "../Components/AppBars/AppBarBilling";
import AppBarHistory from "../Components/AppBars/AppBarHistory";
import MainLayout from "../Components/Layouts/MainLayout";

function BillingPage() {
  const { AppLayout } = MainLayout();

  return <>{AppLayout(AppBarBilling)}</>;
}

export default BillingPage;
