import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { HiFolder } from "react-icons/hi";
import IButton from "./IButton";
import SearchInput from "./SearchInput";
import { FaBitcoin, FaBook, FaChartBar, FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdGridOn } from "react-icons/md";
import DarkModeToggle from "./DarkModeToggle";
import { AiFillSkin } from "react-icons/ai";

function MobileDrawer() {
  return (
    <div className=" lg:hidden drawer w-fit drawer-end z-50 ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button">
          <CgMenu
            className=" swap-off text-secondary-900 hover:text-primary-800 cursor-pointer"
            //   onClick={drawerToggler}
            size={20}
          />
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="  min-h-screen max-h-screen overflow-y-scroll w-72 sm:w-96 bg-[#ffffff] dark:bg-[#1E2329] flex flex-col justify-start items-center  gap-y-5 p-3 pt-5 pr-5">
          <div className=" md:hidden mt-4  w-full flex justify-start items-center gap-x-3">
            <Link
              className="w-full"
              to="https://accounts.binance.com/en/login?loginChannel=SEO_page&return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4vcHJpY2UvYml0Y29pbi9UV0Q%3D"
            >
              <IButton
                title="Log In"
                className="  !w-full  bg-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:!bg-gray-800 !text-xs !text-bold !text-gray-900 dark:!text-white   text-nowrap "
              />
            </Link>
            <Link
              className="w-full"
              to="https://accounts.binance.com/en/register?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4vcHJpY2UvYml0Y29pbi9UV0Q%3D"
            >
              <IButton
                title="Sign Up"
                className=" !w-full bg-primary-900 !text-xs !text-bold !text-gray-900 hover:bg-primary-800 text-nowrap "
              />
            </Link>
          </div>
          
          <SearchInput className="md:hidden" />
          {/* <MobileHeaderMenu className="flex-col" /> */}

          <ul className="menu w-full rounded-box md:mt-6 gap-y-2 ">
            <li>
              <NavLink
                to={"https://www.binance.com/en/crypto/buy"}
                className={clsx(
                  `flex justify-start items-center  text-sm  hover:!text-primary-900 `
                  // : `  text-secondary-600`
                )}
              >
                <FaBitcoin size={16} />
                <span className={clsx("text-nowrap")}> Buy Crypto</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"https://www.binance.com/en/markets/overview"}
                className={clsx(
                  `flex justify-start items-center  text-sm  hover:!text-primary-900 `
                  // : `  text-secondary-600`
                )}
              >
                <FaChartBar size={16} />
                <span className={clsx("text-nowrap")}> Markets</span>
              </NavLink>
            </li>
            <li key={"Trade-li"}>
              <details>
                <summary className="text-sm  ">
                  <FiSettings size={16} />
                  <span
                    className={clsx("text-nowrap  hover:!text-primary-900")}
                  >
                    Trade
                  </span>
                </summary>
                <ul>
                  <li>
                    <HiFolder size={16} />
                    <span
                      className={clsx("text-nowrap pl-1 text-secondary-400")}
                    >
                      Basic
                    </span>
                  </li>

                  {[
                    {
                      title: "spot",
                      link: "https://www.binance.com/en/trade/BTC_USDT?type=spot",
                    },
                    {
                      title: "margin",
                      link: "https://www.binance.com/en/trade?type=cross",
                    },
                    { title: "P2P", link: "https://p2p.binance.com/en" },
                    {
                      title: "Convert & Block Trade",
                      link: "https://www.binance.com/en/convert",
                    },
                  ].map(({ title, link }) => (
                    <li>
                      <NavLink
                        to={link}
                        className={clsx(
                          `flex justify-start items-center  text-sm  hover:!text-primary-900 `
                          // : `  text-secondary-600`
                        )}
                      >
                        <span className={clsx("text-nowrap")}>{title}</span>
                      </NavLink>
                    </li>
                  ))}

                  <li>
                    <HiFolder size={16} />
                    <span
                      className={clsx("text-nowrap pl-1 text-secondary-400")}
                    >
                      Advanced
                    </span>
                  </li>
                  {[
                    {
                      title: "Trading Bots",
                      link: "https://www.binance.com/en/trading-bots",
                    },
                    {
                      title: "Copy Trading",
                      link: "https://www.binance.com/en/copy-trading",
                    },
                    {
                      title: "APIs",
                      link: "https://www.binance.com/en/binance-api",
                    },
                  ].map(({ title, link }) => (
                    <li>
                      <NavLink
                        to={link}
                        className={clsx(
                          `flex justify-start items-center  text-sm  hover:!text-primary-900 `
                          // : `  text-secondary-600`
                        )}
                      >
                        <span className={clsx("text-nowrap")}>{title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-sm">
                  <MdGridOn size={16} />
                  <span className={clsx("text-nowrap  ")}>Futures </span>
                </summary>
                <ul>
                  {[
                    {
                      title: "USDⓈ-M Futures",
                      link: "https://www.binance.com/en/trade/BTC_USDT?type=spot",
                    },
                    {
                      title: "COIN-M Futures",
                      link: "https://www.binance.com/en/trade?type=cross",
                    },
                    { title: "Options", link: "https://p2p.binance.com/en" },
                  ].map(({ title, link }) => (
                    <li>
                      <NavLink
                        to={link}
                        className={clsx(
                          `flex justify-start items-center  text-sm  hover:!text-primary-900 `
                          // : `  text-secondary-600`
                        )}
                      >
                        <span className={clsx("text-nowrap")}>{title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <NavLink
                to={"https://www.binance.com/en/earn"}
                className={clsx(
                  `flex justify-start items-center  text-sm  hover:!text-primary-900 `
                  // : `  text-secondary-600`
                )}
              >
                <FaUserCircle size={16} />
                <span className={clsx("text-nowrap")}>Earn</span>
              </NavLink>
            </li>
            <li>
              <details>
                <summary className="text-sm  ">
                  <FaBook size={16} />
                  <span
                    className={clsx("text-nowrap  hover:!text-primary-900")}
                  >
                    Square
                  </span>
                </summary>
                <ul>
                  {[
                    {
                      title: "Square",
                      link: "https://www.binance.com/en/trade/BTC_USDT?type=spot",
                    },
                    {
                      title: "Academy (Learn & Earn)",
                      link: "https://www.binance.com/en/trade?type=cross",
                    },
                    { title: "Blog", link: "https://p2p.binance.com/en" },
                    { title: "Research", link: "https://p2p.binance.com/en" },
                  ].map(({ title, link }) => (
                    <li>
                      <NavLink
                        to={link}
                        className={clsx(
                          `flex justify-start items-center  text-sm  hover:!text-primary-900 `
                          // : `  text-secondary-600`
                        )}
                      >
                        <span className={clsx("text-nowrap")}>{title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li className="lg:hidden">
              <div
                className={clsx(
                  `flex justify-between items-center  text-sm  hover:!text-primary-900 `
                  // : `  text-secondary-600`
                )}
              >
                <div className="flex justify-start items-center gap-x-1 ">
                  <AiFillSkin className=" w-5 h-5" />

                  <span className={clsx("text-nowrap")}>Theme</span>
                </div>
                <DarkModeToggle className=" -mr-2" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileDrawer;
