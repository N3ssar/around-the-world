import { Outlet } from "react-router-dom";
import Header from "../HeaderSection";

function Layout() {
  return (
    <div className="font-inter min-h-screen bg-[#F3F4F6] text-gray-900 dark:bg-[#111827] dark:text-[#F3F4F6]">
      <Header />
      <Outlet />
    </div>
  );
}
export default Layout;
