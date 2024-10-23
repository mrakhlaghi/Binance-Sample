import { Link } from "react-router-dom";
import clsx from "clsx";
import TradeMenuItem from "./TradeMenuItem";
import MenuItem from "./MenuItem";
import { FaHandHoldingUsd } from "react-icons/fa";
// import IButton from "./IButton";
// import { GetAndSetTokenApi } from "../services/authService";

function MobileHeaderMenu({ className }: { className?: string }) {
  return (
      
    <ul className={clsx("flex gap-x-5 items-center ", className)}>
      <li className="flex text-secondary-800 hover:text-primary-900 text-sm text-nowrap ">
        <Link to="https://www.binance.com/en/crypto/buy"> Buy Crypto</Link>
      </li>
      <li className="flex text-secondary-800 hover:text-primary-900 text-sm text-nowrap ">
        <Link to="https://www.binance.com/en/markets/overview">Markets</Link>
      </li>

      <TradeMenuItem />
      <li className="flex text-secondary-800 hover:text-primary-900 text-sm ">
        <MenuItem
          title="Futures"
          submenus={[
            {
              icon: <FaHandHoldingUsd className="  text-yellow-500 mt-1" />,
              title: "USDⓈ-M Futures",
              subTitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
              icon: <FaHandHoldingUsd className="  text-yellow-500 mt-1" />,
              title: "USDⓈ-M Futures",
              subTitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
              icon: <FaHandHoldingUsd className="  text-yellow-500 mt-1" />,
              title: "USDⓈ-M Futures",
              subTitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
          ]}
        />
      </li>
      <li className="flex text-secondary-800 hover:text-primary-900 text-sm ">
        <Link to="https://www.binance.com/en/earn"> Earn</Link>
      </li>
      <li className="flex text-secondary-800 hover:text-primary-900 text-sm ">
        <MenuItem
          title="Square"
          submenus={[
            {
              icon: <FaHandHoldingUsd className="  text-yellow-500 mt-1" />,
              title: "USDⓈ-M Futures",
              subTitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
              icon: <FaHandHoldingUsd className="  text-yellow-500 mt-1" />,
              title: "USDⓈ-M Futures",
              subTitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
              icon: <FaHandHoldingUsd className="  text-yellow-500 mt-1" />,
              title: "USDⓈ-M Futures",
              subTitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
          ]}
        />{" "}
      </li>

      <li className="flex text-secondary-800 hover:text-primary-900 text-sm ">
        <MenuItem
          title="More"
          submenus={[
            {
              icon: <FaHandHoldingUsd className="  text-yellow-500 mt-1" />,
              title: "USDⓈ-M Futures",
              subTitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
              icon: <FaHandHoldingUsd className="  text-yellow-500 mt-1" />,
              title: "USDⓈ-M Futures",
              subTitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
              icon: <FaHandHoldingUsd className="  text-yellow-500 mt-1" />,
              title: "USDⓈ-M Futures",
              subTitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
          ]}
        />
      </li>
    </ul>
  );
}
export default MobileHeaderMenu;
