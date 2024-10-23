import { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import TextField from "./TextField";
import { useForm } from "react-hook-form";
import clsx from "clsx";

const LanguageCurrencyBtn = ({ className }: { className: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [langInput] = useState("");
  useEffect(() => {}, [langInput]);

  const {
    register,
    // control,
    // handleSubmit,
    formState: { errors },
    // getValues,
  } = useForm({});
  return (
    <div className={clsx("relative inline-block", className)}>
      {/* Button to toggle popup */}
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className=" flex justify-center items-center gap-x-1 text-secondary-700 hover:text-primary-900 dark:text-secondary-900 text-lg py-4  cursor-pointer"
      >
        <FaGlobe
          className={clsx(
            "w-4 h-12  curser-pointer     text-secondary-900 hover:text-primary-900 ",
            isOpen && "stroke-primary-800 "
          )}
        />
      </span>

      {/* Popup */}
      {isOpen && (
        <div
          className="absolute right-0 top-20  w-96 bg-white dark:bg-secondary-100 text-secondary-700 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex p-4 gap-x-4">
            {/* Language Column */}
            <div className="w-1/2">
              <p className="text-gray-500 font-bold mb-2">Language</p>
              {/* Search input */}
              <TextField
                type="text"
                name="language"
                register={register}
                errors={errors}
                wrapperClass="w-full md:max-w-72 "
                labelClass="text-base"
                inputClass=" w-full text-secondary-700 px-3 py-2 !border-2 !bg-secondary-200  hover:border-[#f1dc1b] mb-4     text-sm focus:border-[#f1dc1b]"
                placeholder="Search"
              />
              <ul className="flex flex-col [&>li]:cursor-pointer gap-y-2 h-72 overflow-scroll ">
                <li>English</li>
                <li>العربية</li>
                <li>(البحرين) العربية</li>
                <li>български</li>
                <li>Čeština</li>
                <li>Dansk</li>
                <li>Deutsch (Schweiz)</li>
                <li>Ελληνικά</li>
                <li>English</li>
                <li>العربية</li>
                <li>(البحرين) العربية</li>
                <li>български</li>
                <li>Čeština</li>
                <li>Dansk</li>
                <li>Deutsch (Schweiz)</li>
                <li>Ελληνικά</li>
              </ul>
            </div>

            {/* Currency Column */}
            <div className="w-1/2">
              <p className="text-gray-500 font-bold mb-2">Currency</p>
              {/* Search input */}
              <TextField
                type="text"
                name="currency"
                register={register}
                errors={errors}
                wrapperClass="w-full md:max-w-72 "
                labelClass="text-base"
                inputClass=" w-full text-secondary-700 px-3 py-2 !border-2 !bg-secondary-200 hover:border-[#f1dc1b] mb-4     text-sm focus:border-[#f1dc1b]"
                placeholder="Search"
              />
              <ul className="flex flex-col [&>li]:cursor-pointer gap-y-2 h-72 overflow-scroll ">
                <li>USD-$</li>
                <li>AED-د.إ</li>
                <li>ARS-ARS$</li>
                <li>AUD-A$</li>
                <li>BDT-৳</li>
                <li>BGN-лв</li>
                <li>BHD-ب.د</li>
                <li>BOB-$b</li>
                <li>USD-$</li>
                <li>AED-د.إ</li>
                <li>ARS-ARS$</li>
                <li>AUD-A$</li>
                <li>BDT-৳</li>
                <li>BGN-лв</li>
                <li>BHD-ب.د</li>
                <li>BOB-$b</li>
                <li>USD-$</li>
                <li>AED-د.إ</li>
                <li>ARS-ARS$</li>
                <li>AUD-A$</li>
                <li>BDT-৳</li>
                <li>BGN-лв</li>
                <li>BHD-ب.د</li>
                <li>BOB-$b</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageCurrencyBtn;
