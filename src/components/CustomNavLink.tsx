import clsx from "clsx";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function CustomNavLink({
  children,
  subMenu,
  to,
  path,
  title,
}: {
  children?: any;
  subMenu?: any;
  to?: string|null;
  path?: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.className.includes("navLink")
    ) {
      setIsOpen(!isOpen);
    }
  };

  // useEffect(() => {
  //   if (subMenu) {
  //     const pathes = subMenu.map((item) => item.to);
  //     const subMenuPath = pathes.map((path) => path.split("/")[1]);

  //     setSubMenuPathes(subMenuPath);
  //   }
  // }, []);

  return (
    <li
      key={Math.random()}
      className={clsx(" flex flex-col ")}
      onClick={handleClick}
    >
      <NavLink
        to={to!}
        className={
          `navLink flex  items-center justify-between  hover:text-primary-900 px-2 py-1.5 rounded-lg  transition-all duration-300 ` +
          (pathname.includes(path ?? "")
            ? `  text-primary-900`
            : `  text-secondary-600`)
        }
      >
        <div className="flex justify-start gap-x-2 navLink">
          {children}
          <span className="flex items-center text-sm navLink">{title}</span>
        </div>
        {subMenu && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={clsx(
              " min-w-3 w-5 transition-transform duration-300 navLink`",
              isOpen ? " -rotate-90 " : "",
              ""
            )}
          >
            <path
              d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95 13.93C6.89 12.87 6.89 11.13 7.95 10.07L14.47 3.55C14.76 3.26 15.24 3.26 15.53 3.55C15.82 3.84 15.82 4.32 15.53 4.61L9.01 11.13C8.53 11.61 8.53 12.39 9.01 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z"
              fill="none"
              className={clsx(
                "transition-transform duration-300 navLink",
                isOpen ? "fill-primary-900" : "fill-secondary-500"
              )}
            />
          </svg>
        )}
      </NavLink>
      {subMenu && isOpen && (
        <ul className="w-full h-fit space-y-1 p-1 rounded-md bg-secondary-100">
          {subMenu.map((item: any, index: number) => {
            return (
              <React.Fragment key={index}>
                <li
                  className={clsx(
                    " w-full pr-7  rounded-[4px] ",
                    pathname.includes(item.to) ? "bg-primary-700" : ""
                  )}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => {
                      return (
                        `flex items-center justify-between  hover:text-primary-900 px-2 py-1.5 rounded-lg  transition-all duration-300 ` +
                        (isActive
                          ? `text-white hover:text-secondary-200 `
                          : ` text-secondary-600`)
                      );
                    }}
                  >
                    <div className="flex gap-x-3 items-center text-xs p-1  ">
                      <div className=" ring-[2px] ring-white rounded-full">
                        <div
                          className={clsx(
                            " p-1 rounded-full",
                            pathname.includes(item.to)
                              ? "bg-primary-900"
                              : "bg-black"
                          )}
                        ></div>
                      </div>
                      {item.title}
                    </div>
                  </NavLink>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default CustomNavLink;
