import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
import clsx from "clsx";
import MobileDrawer from "./MobileDrawer";
import useResponsiveWidth from "../hooks/UseResponsiveWidth";
import IButton from "./IButton";
import DarkModeToggle from "./DarkModeToggle";
import LanguageCurrencyBtn from "./LanguageCurrencyBtn";
import DownloadPopup from "./DownloadPopup";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  // const { isLoading } = useUser();
  const [isLoading] = useState(false);
  // const [isOpenSearch, setIsOpenSearch] = useState(false);
  const size = useResponsiveWidth();

  return (
    <div className="  px-5 md:px-8 rounded-lg ">
      <div
        className={clsx(
          " flex justify-between items-center gap-x-8",
          isLoading && "blur-sm opacity-50"
        )}
      >
        <div className=" flex justify-start items-center gap-x-6">
          <Link to="https://www.binance.com/en">
            <img
              src="/images/binance.png"
              className=" min-w-20 max-w-28"
            />
          </Link>{" "}
          {!size.sm && !size.md && !size.lg && <HeaderMenu />}
        </div>
        <div className="flex justify-center items-center gap-x-3 ">
          <IoIosSearch
            className={clsx(
              "w-6 h-12 hidden md:block  text-gray-700 dark:text-gray-300 hover:!text-primary-900 cursor-pointer"
            )}
          />

          <div className="flex justify-start items-center gap-x-3">
            <Link to="https://accounts.binance.com/en/login?loginChannel=SEO_page&return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4vcHJpY2UvYml0Y29pbi9UV0Q%3D">
              <IButton
                title="Log In"
                className="  !w-14 h-6 hidden md:block !text-xs   bg-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:!bg-gray-800 !text-bold !text-gray-900 dark:!text-white  text-nowrap "
              />
            </Link>
            <Link to="https://accounts.binance.com/en/register?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4vcHJpY2UvYml0Y29pbi9UV0Q%3D">
              <IButton
                title="Sign Up"
                className=" !w-14 h-6 bg-primary-900 !text-xs !text-bold !text-gray-900 hover:bg-primary-800 text-nowrap "
              />
            </Link>
          </div>

          <DownloadPopup className="hidden lg:block z-50" />
          <LanguageCurrencyBtn className="hidden lg:block z-50 " />
          <DarkModeToggle className="hidden lg:block " />
          <MobileDrawer />
        </div>
        {/* {isOpenSearch && !size.sm &&<HeaderMenu />} */}
      </div>
    </div>
  );
}
export default Header;
