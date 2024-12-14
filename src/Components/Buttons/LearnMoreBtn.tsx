import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface LearnMoreBtnProps {
    btnLink: string;
}

function LearnMoreBtn({btnLink}: LearnMoreBtnProps) {
    const { t } = useTranslation();

    
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
            w-36 
            text-sm
            xxs:text-lg 
            font-bold 
            text-gray-700 
            px-5 
            py-2 
            mt-14
            mx-auto
            flex
            justify-center
            items-center"
    >
      {t("learnMoreBtn")}
    </Link>
  );
}

export default LearnMoreBtn