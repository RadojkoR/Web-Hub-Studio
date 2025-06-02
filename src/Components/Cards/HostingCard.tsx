import i18n from "../../i18n";
import { HostPackageProps } from "../../types/interfaces";


function HostingCard({ hostPackage }: HostPackageProps) {
    const hostingFeatures = hostPackage.ulEl
    const lang = i18n.language;
  return (
    <>
      <div className="max-w-sm mx-auto mt-20 mb-10 p-8 bg-white border border-gray-300 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
        <p className="xxs:text-5xl text-3xl font-extrabold bg-gradient-to-r from-[#00AEE6] to-[#04c2c9] bg-clip-text text-transparent">
          {lang === "en"
            ? `${hostPackage.currency}${hostPackage.price}`
            : `${hostPackage.price}${hostPackage.currency}`}
        </p>
        <p className="xxs:text-3xl text-xl text-brandColor mb-3 font-bold ">
          {hostPackage.billingCycle}
        </p>

        <h3 className="xxs:text-2xl text-xl font-bold mb-6 text-gray-800">
          {hostPackage.title}
        </h3>

        <ul className="text-gray-700 text-sm space-y-3 mb-8 text-left">
          {hostingFeatures.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-[#00AEE6] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature.name}
            </li>
          ))}
        </ul>

        {/* <button
          className="w-full py-3 font-semibold rounded-xl text-white"
          style={{
            background: "linear-gradient(90deg, #00AEE6, #04c2c9)",
            boxShadow: "0 4px 14px 0 rgba(0,174,230,0.39)",
          }}
        >
          Započni sada
        </button> */}
      </div>
    </>
  );
}

export default HostingCard