import { useTranslation } from "react-i18next";

interface ViewliveBtnProps {
    btnLink: string;
}

function ViewLiveBtn({btnLink}: ViewliveBtnProps) {
    const { t } = useTranslation();
  return (
    <a
      href={btnLink}
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
            xxs:text-base 
            font-bold 
            text-gray-700 
            px-5 
            py-2 
            my-10
            mb-6
            mx-auto
            flex
            justify-center
            items-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("viewLiveBtn")}
    </a>
  );
}

export default ViewLiveBtn