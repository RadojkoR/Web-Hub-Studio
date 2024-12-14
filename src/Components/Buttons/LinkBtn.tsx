import { Link } from "react-router-dom";

interface LinkBtnProps {
    btnLink: string;
    btnTxt: string;
}

function LinkBtn({btnLink, btnTxt}: LinkBtnProps) {
  return (
    <Link
      to={btnLink}
      className=" bg-cyan-300 
            hover:bg-cyan-700 
            focus:bg-cyan-700 
            hover:text-gray-200 
            focus:text-gray-200 
            transition-all
            duration-300
            ease-in-out
            w-40 
            text-sm
            xxs:text-lg 
            font-bold 
            text-gray-700 
            px-5 
            py-2
            flex
            justify-center
            items-center"
    >
      {btnTxt}
    </Link>
  );
}

export default LinkBtn