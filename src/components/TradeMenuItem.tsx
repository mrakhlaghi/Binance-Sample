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
import {
  FaChartLine,
  FaRobot,
  FaCopy,
  FaKey,
  FaExchangeAlt,
  FaHandHoldingUsd,
  FaCoins,
  FaAngleDown,
} from "react-icons/fa";

const TradeMenuItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={clsx(
          " flex justify-center items-center gap-x-1 text-secondary-700 hover:text-primary-900 dark:text-secondary-900 !text-sm py-4  cursor-pointer",
          isOpen && "text-primary-900"
        )}
      >
        <span className={clsx(" text-sm", isOpen && "text-primary-900")}>
          Trade
        </span>
        <FaAngleDown
          className={clsx(
            "w-2 h-5 px-0 p-1 ",
            isOpen && "rotate-180 text-primary-900"
          )}
        />
      </span>

      {/* Submenu */}
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-0  w-[36rem] py-3 px-4 rounded-lg shadow-lg bg-white dark:bg-secondary-100 ring-1 ring-black ring-opacity-5"
        >
          <div className="flex gap-x-10  ">
            {/* Basic Column */}
            <div className="p-4 w-1/2    flex flex-col  gap-y-3">
              <p className="text-secondary-300 font-bold !text-sm text-start">
                Basic
              </p>
              <ul className="flex flex-col justify-start items-start  gap-y-4 pt-6">
                <li className="flex justify-between items-start cursor-pointer ">
                  <div className="flex justify-end gap-x-3">
                    <FaChartLine className="  text-yellow-500 mt-1 " />
                    <div className="flex flex-col justify-start items-start text-start">
                      <span className="text-secondary-700 hover:text-primary-900 !text-sm ">
                        Spot
                      </span>
                      <span className="text-secondary-500 text-xs mt-2 ">
                        Buy and sell on the Spot market with advanced tools
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-start cursor-pointer ">
                  <div className="flex justify-end gap-x-3">
                    <FaHandHoldingUsd className="  text-yellow-500 mt-1" />
                    <div className="flex flex-col justify-start items-start text-start">
                      <span className="text-secondary-700 hover:text-primary-900 !text-sm ">
                        Margin
                      </span>
                      <span className="text-secondary-500 text-xs mt-2 ">
                        Increase your profits with leverage
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-start cursor-pointer">
                  <div className="flex justify-end gap-x-3">
                    <FaCoins className="  text-yellow-500 mt-1" />
                    <div className="flex flex-col justify-start items-start text-start">
                      <span className="text-secondary-700 hover:text-primary-900 !text-sm ">
                        P2P
                      </span>
                      <span className="text-secondary-500 text-xs mt-2 ">
                        Buy & sell cryptocurrencies using bank transfer and 800+
                        options{" "}
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-start cursor-pointer">
                  <div className="flex justify-end gap-x-3">
                    <FaExchangeAlt className="  text-yellow-500 mt-1" />
                    <div className="flex flex-col justify-start items-start text-start">
                      <span className="text-secondary-700 hover:text-primary-900 !text-sm ">
                        Convert & Block Trade
                      </span>
                      <span className="text-secondary-500 text-xs mt-2 ">
                        The easiest way to trade at all sizes
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Advanced Column */}
            <div className="p-4 w-1/2    flex flex-col  gap-y-3  ">
              <p className="text-secondary-300 font-bold !text-sm  text-start">
                Advanced
              </p>
              <ul className="flex flex-col justify-start items-start  gap-y-4 pt-6">
                <li className="flex justify-between items-start cursor-pointer">
                  <div className="flex justify-end gap-x-3">
                    <FaRobot className="  text-yellow-500 mt-1" />
                    <div className="flex flex-col justify-start items-start text-start">
                      <span className="text-secondary-700 hover:text-primary-900 !text-sm ">
                        Trading Bots
                      </span>
                      <span className="text-secondary-500 text-xs mt-2 ">
                        Trade smarter with our various automated strategies -
                        easy, fast and reliable
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-start cursor-pointer">
                  <div className="flex justify-end gap-x-3">
                    <FaCopy className="  text-yellow-500 mt-1" />
                    <div className="flex flex-col justify-start items-start text-start">
                      <span className="text-secondary-700 hover:text-primary-900 !text-sm ">
                        Copy Trading
                      </span>
                      <span className="text-secondary-500 text-xs mt-2 ">
                        Follow the most popular traders
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-start cursor-pointer">
                  <div className="flex justify-end gap-x-3">
                    <FaKey className="  text-yellow-500 mt-1" />
                    <div className="flex flex-col justify-start items-start text-start">
                      <span className="text-secondary-700 hover:text-primary-900 !text-sm ">
                        APIs
                      </span>
                      <span className="text-secondary-500 text-xs mt-2 ">
                        Unlimited opportunities with one key{" "}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeMenuItem;
