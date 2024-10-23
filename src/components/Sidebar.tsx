import { HiFolder } from "react-icons/hi2";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
// import { IoChevronForwardOutline } from "react-icons/io5";
// import { TiThMenuOutline } from "react-icons/ti";

function Sidebar() {
  const { pathname } = useLocation();


  // const drawerToggler = () => {
  //   setOpen((isOpen) => !isOpen);
  // };
  return (
    <div
      className={`w-72 flex-grow hidden md:flex bg-secondary-0 overflow-hidden min-h-screen h-screen  transition-all px-3 duration-300 pt-4 flex-col`}
    >
      {/* <div className=" p-4 flex items-start  ">
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
      </div> */}

      <ul className="menu  bg-secondary-100 rounded-box  ">
        <li>
          <NavLink
            to={"dashboard"}
            className={clsx(
              `flex justify-start items-center  text-sm `,
              pathname.includes("dashboard")
                ? "!text-primary-900 !bg-secondary-200"
                : ""
              // : `  text-secondary-600`
            )}
          >
            <HiFolder size={16} />
            <span className={clsx("text-nowrap")}>
              {" "}
              پیشخوان
            </span>
          </NavLink>
        </li>
        <li>
          <details>
            <summary className="text-sm  ">
              <HiFolder size={16} />
              <span className={clsx("text-nowrap  ")}>
                {" "}
                پشتیبانی
              </span>
            </summary>
            <ul>
              <li>
                <NavLink
                  to={"support/create-ticket"}
                  className={clsx(
                    `flex items-center text-sm `,
                    pathname.includes("create-ticket")
                      ? `  !text-primary-900  !bg-secondary-200`
                      : `  `
                    // : `  text-secondary-600`
                  )}
                >
                  <HiFolder size={16} />
                  <span className={clsx("text-nowrap")}>
                    {" "}
                    ایجاد تیکت
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"support/tickets-list"}
                  className={clsx(
                    `flex items-center text-sm  `,
                    pathname.includes("tickets-list")
                      ? `  !text-primary-900 !bg-secondary-200`
                      : `  `
                    // : `  text-secondary-600`
                  )}
                >
                  <HiFolder size={16} />

                  <span className={clsx("text-nowrap")}>
                    {" "}
                    تیکت های پشتیبانی
                  </span>
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
        {/* ----------------daisyUi----------------- */}
        <li>
          <details>
            <summary className="text-sm">
              <HiFolder size={16} />
              <span className={clsx("text-nowrap  ")}> پشتیبانی d </span>
            </summary>
            <ul>
              <li>
                <NavLink
                  to={"support/create-ticket-daisyui"}
                  className={clsx(
                    `flex items-center text-sm `,
                    pathname === "create-ticket-daisyui"
                      ? `  !text-primary-900  !bg-secondary-200`
                      : `  `
                    // : `  text-secondary-600`
                  )}
                >
                  <HiFolder size={16} />
                  <span className={clsx("text-nowrap")}> ایجاد تیکت d </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"support/tickets-list-daisyui"}
                  className={clsx(
                    `flex items-center text-sm  `,
                    pathname.includes("tickets-list-daisyui")
                      ? `  !text-primary-900 !bg-secondary-200`
                      : `  `
                    // : `  text-secondary-600`
                  )}
                >
                  <HiFolder size={16} />

                  <span className={clsx("text-nowrap")}>
                    {" "}
                    تیکت های پشتیبانی d
                  </span>
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <NavLink
            to={"support/sdfsd"}
            className={clsx(
              `flex items-center text-sm `,
              pathname.includes("sdfsd")
                ? `  !text-primary-900  !bg-secondary-200`
                : `  `
              // : `  text-secondary-600`
            )}
          >
            <HiFolder size={16} />
            <span className={clsx("text-nowrap")}>
              {" "}
              درگاه های پرداخت
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
