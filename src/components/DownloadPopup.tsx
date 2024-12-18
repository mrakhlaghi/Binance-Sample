import { useState } from "react";
import IButton from "./IButton";
import { HiOutlineDownload } from "react-icons/hi";
import clsx from "clsx";

function DownloadPopup({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx("relative inline-block", className)}>
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className=" flex justify-center items-center gap-x-1   text-lg py-4  cursor-pointer"
      >
        <HiOutlineDownload
          className={clsx(
            "w-5 h-12  text-secondary-900 ",
            isOpen && "stroke-primary-800 "
          )}
        />
      </span>
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute top-20 right-0  flex flex-col justify-center items-center gap-y-5 p-6 w-44 rounded-lg shadow-lg bg-white dark:bg-secondary-100 ring-1 ring-black ring-opacity-5"
        >
          <div className="flex flex-col justify-center items-center gap-y-2">
            <svg
              height="136"
              className="p-3 bg-white rounded"
              width="136"
              viewBox="0 0 29 29"
            >
              <path
                fill="#FFFFFF"
                d="M0,0 h29v29H0z"
                shapeRendering="crispEdges"
              ></path>
              <path
                fill="#000000"
                d="M0 0h7v1H0zM8 0h1v1H8zM11 0h1v1H11zM15 0h6v1H15zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM10 1h3v1H10zM14 1h2v1H14zM17 1h2v1H17zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM10 2h6v1H10zM18 2h1v1H18zM20 2h1v1H20zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM17 3h3v1H17zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM10 4h1v1H10zM13 4h1v1H13zM19 4h1v1H19zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM9 5h2v1H9zM14 5h1v1H14zM16 5h5v1H16zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h1v1H8zM10 7h1v1H10zM13 7h2v1H13zM16 7h5v1H16zM0 8h1v1H0zM2 8h2v1H2zM5 8h3v1H5zM9 8h3v1H9zM13 8h2v1H13zM16 8h4v1H16zM22 8h1v1H22zM25 8h1v1H25zM27,8 h2v1H27zM0 9h1v1H0zM3 9h1v1H3zM5 9h1v1H5zM7 9h3v1H7zM11 9h2v1H11zM16 9h1v1H16zM18 9h7v1H18zM28,9 h1v1H28zM1 10h2v1H1zM6 10h1v1H6zM8 10h3v1H8zM14 10h1v1H14zM16 10h3v1H16zM20 10h1v1H20zM23 10h2v1H23zM26 10h2v1H26zM1 11h3v1H1zM5 11h1v1H5zM7 11h2v1H7zM11 11h4v1H11zM16 11h1v1H16zM18 11h1v1H18zM20 11h1v1H20zM23 11h2v1H23zM28,11 h1v1H28zM0 12h4v1H0zM5 12h4v1H5zM10 12h1v1H10zM15 12h1v1H15zM17 12h1v1H17zM19 12h1v1H19zM25 12h2v1H25zM0 13h1v1H0zM3 13h1v1H3zM5 13h1v1H5zM7 13h1v1H7zM9 13h1v1H9zM11 13h1v1H11zM13 13h1v1H13zM15 13h2v1H15zM19 13h2v1H19zM22 13h2v1H22zM26,13 h3v1H26zM0 14h1v1H0zM2 14h1v1H2zM4 14h1v1H4zM6 14h2v1H6zM10 14h2v1H10zM14 14h1v1H14zM17 14h4v1H17zM23 14h2v1H23zM26,14 h3v1H26zM0 15h1v1H0zM3 15h1v1H3zM8 15h2v1H8zM11 15h3v1H11zM16 15h1v1H16zM18 15h1v1H18zM20 15h1v1H20zM23 15h2v1H23zM27 15h1v1H27zM1 16h1v1H1zM4 16h1v1H4zM6 16h1v1H6zM8 16h1v1H8zM11 16h1v1H11zM15 16h1v1H15zM20 16h2v1H20zM24 16h2v1H24zM27 16h1v1H27zM1 17h2v1H1zM5 17h1v1H5zM8 17h4v1H8zM13 17h1v1H13zM15 17h1v1H15zM17 17h1v1H17zM20 17h1v1H20zM23 17h1v1H23zM25 17h3v1H25zM0 18h1v1H0zM6 18h1v1H6zM9 18h1v1H9zM11 18h2v1H11zM15 18h1v1H15zM17 18h1v1H17zM20 18h1v1H20zM22 18h2v1H22zM26 18h1v1H26zM2 19h3v1H2zM10 19h1v1H10zM12 19h1v1H12zM16 19h5v1H16zM22 19h1v1H22zM26 19h1v1H26zM1 20h2v1H1zM4 20h1v1H4zM6 20h2v1H6zM10 20h4v1H10zM15 20h12v1H15zM8 21h1v1H8zM10 21h5v1H10zM16 21h1v1H16zM18 21h1v1H18zM20 21h1v1H20zM24,21 h5v1H24zM0 22h7v1H0zM8 22h2v1H8zM12 22h2v1H12zM17 22h4v1H17zM22 22h1v1H22zM24 22h2v1H24zM27 22h1v1H27zM0 23h1v1H0zM6 23h1v1H6zM8 23h5v1H8zM15 23h1v1H15zM20 23h1v1H20zM24 23h2v1H24zM27 23h1v1H27zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM9 24h2v1H9zM12 24h1v1H12zM14 24h1v1H14zM17 24h1v1H17zM20 24h5v1H20zM26 24h2v1H26zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h1v1H8zM10 25h2v1H10zM13 25h4v1H13zM21 25h1v1H21zM24 25h2v1H24zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h2v1H8zM13 26h1v1H13zM17 26h2v1H17zM20 26h1v1H20zM23 26h1v1H23zM26 26h1v1H26zM28,26 h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM10 27h2v1H10zM13 27h2v1H13zM16 27h1v1H16zM20 27h2v1H20zM23 27h1v1H23zM25 27h1v1H25zM27 27h1v1H27zM0 28h7v1H0zM8 28h3v1H8zM12 28h2v1H12zM16 28h1v1H16zM18 28h4v1H18zM25 28h1v1H25zM27 28h1v1H27z"
                shapeRendering="crispEdges"
              ></path>
            </svg>
            <span className="text-xs text-center">
              Scan to Download App iOS & Android
            </span>
          </div>
          <IButton
            title="More Download Options"
            className="bg-primary-900 !text-xs !text-bold !text-gray-900 hover:bg-primary-800 text-nowrap "
            onclick={() =>
              window.open("https://www.binance.com/en/download", "_blank")
            }
          />
        </div>
      )}
    </div>
  );
}

export default DownloadPopup;
