import { IoChevronForwardOutline } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

const drawerWidth = "w-72 flex-grow"; // Equivalent to 240px in Tailwind

export default function DaisyUIDrawer() {
  const [open, setOpen] = useState(
    () => localStorage.getItem("navOpen") === "true"
  );
  const { pathname } = useLocation();

  useEffect(() => {
    localStorage.setItem("navOpen", open.toString());
  }, [open]);

  const drawerToggler = () => {
    setOpen((open) => !open);
  };

  return (
    <div className="flex h-screen ">
      {/* Drawer */}
      <div
        className={`${
          open ? drawerWidth : "w-16"
        } bg-secondary-0 overflow-hidden h-full transition-all px-3 duration-300 flex flex-col`}
      >
        <div className=" p-4 flex items-start  ">
          <label className="swap">
            <input type="checkbox" />

            <IoChevronForwardOutline
              className="swap-on fill-current"
              onClick={drawerToggler}
              size={20}
            />
            <TiThMenuOutline
              className=" swap-off fill-current"
              onClick={drawerToggler}
              size={20}
            />
          </label>
        </div>

        <ul className="menu bg-secondary-100 rounded-box w-56">
          <li>
            <NavLink
              to={"dashboard"}
              className={clsx(
                `flex items-center text-sm `,
                pathname.includes("dashboard") ? `  text-primary-900` : `  `
                // : `  text-secondary-600`
              )}
            >
              پیشخوان
            </NavLink>
          </li>
          <li>
            <details>
              <summary className="text-sm">پشتیبانی</summary>
              <ul>
                <li>
                  <NavLink
                    to={"support/create-ticket"}
                    className={clsx(
                      `flex items-center text-sm `,
                      pathname.includes("create-ticket")
                        ? `  text-primary-900`
                        : `  `
                      // : `  text-secondary-600`
                    )}
                  >
                    ایجاد تیکت
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"support/tickets-list"}
                    className={clsx(
                      `flex items-center text-sm `,
                      pathname.includes("tickets-list")
                        ? `  text-primary-900`
                        : `  `
                      // : `  text-secondary-600`
                    )}
                  >
                    تیکت های پشتیبانی
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink
              to={"support/tickets-list"}
              className={clsx(
                `flex items-center text-sm `,
                pathname.includes("tickets-list") ? `  text-primary-900` : `  `
                // : `  text-secondary-600`
              )}
            >
              درگاه های پرداخت
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className=" p-6 w-full h-full bg-red-100 ">
        <div className="">asdf</div>
        <h2 className="text-2xl font-bold mb-4">Main Content Area</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras.
        </p>
      </div>
    </div>
  );
}
