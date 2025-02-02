import { Outlet } from "react-router-dom";
import { DemoAppBar } from "@components";

export default function Dashboard() {
  return (
    <>
      <DemoAppBar/>
      <Outlet />
    </>
  );
}