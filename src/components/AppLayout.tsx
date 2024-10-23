import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="  flex  dark:bg-[#181A20] h-screen  ">
      {/* <Sidebar /> */}
      <div className="w-full h-full ">
        <Header />
        <div className="p-3  ">
          {/* <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12"> */}
          <div className="mx-auto  flex flex-col gap-y-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
