// function MenuHasSubMenu({ submenus }: { submenus: any }) {
//   return (
//     <ul className="">
//       {submenus.map(() => {
//         return <li></li>;
//       })}
//     </ul>
//   );
// }

// export default MenuHasSubMenu;
import clsx from "clsx";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const MenuItem = ({ title, submenus }: { title: string; submenus: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className=" flex justify-center items-center gap-x-1 text-secondary-700 hover:text-primary-900 dark:text-secondary-900 text-sm py-4  cursor-pointer"
      >
        <span className={clsx(isOpen && "text-primary-900")}>{title}</span>
        <FaAngleDown
          className={clsx("w-2 h-5 px-0 p-1 ", isOpen && "rotate-180 text-primary-900")}
        />
      </span>

      {/* Submenu */}
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-0  min-w-80 rounded-lg shadow-lg bg-white dark:bg-secondary-100 ring-1 ring-black ring-opacity-5"
        >
          <div className="flex gap-x-10  ">
            {/* Basic Column */}
            <div className="py-4  px-8 flex flex-col gap-y-3 ">
              <ul className="flex flex-col justify-start items-start gap-y-6 pt-4">
                {submenus.map((submenu: any) => (
                  <li className="flex justify-between items-start   cursor-pointer ">
                    <div className="flex justify-end gap-x-3">
                      {submenu.icon}
                      <div className="flex flex-col justify-start items-start text-start">
                        <span className="text-secondary-700 hover:!text-primary-900 text-sm ">
                          {submenu.title}
                        </span>
                        <span className="text-secondary-500 text-xs mt-2 ">
                          {submenu.subTitle}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
