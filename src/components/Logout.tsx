import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Loading from "./Loading";
import { useState } from "react";

function Logout() {
const [isPending] = useState(false)

  return isPending ? (
    <Loading />
  ) : (
    <button
    //  onClick={null}
    >
      <HiArrowRightOnRectangle className="w-5 h-5 text-red-400 hover:text-error" />
    </button>
  );
}
export default Logout;
