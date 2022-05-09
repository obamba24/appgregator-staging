import React from "react";
import AppBarUsersProjects from "../Components/AppBars/AppBarUsersProjects";
import MainLayout from "../Components/Layouts/MainLayout";

function UsersProjectsPage() {
  const { AppLayout } = MainLayout();

  return <>{AppLayout(AppBarUsersProjects)}</>;
}

export default UsersProjectsPage;
