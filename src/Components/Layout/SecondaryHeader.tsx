

interface ServiceHeader {
  headerBgClass: string;
  headerSlogan: string;
}

interface SecondaryHeaderProps {
    headerInfo: ServiceHeader[];
}

function SecondaryHeader({ headerInfo }: SecondaryHeaderProps) {
  const headerBgClass = headerInfo[0].headerBgClass;
  const headerSlogan = headerInfo[0].headerSlogan;
//   const headerImg = servicesHeader[0].headerImg;
  
  return (
    <header
      className={`${headerBgClass} relative w-full overflow-hidden -z-50`}
    >
      <section
        className="
        fixed 
        lg:w-rem40
        sm:w-rem35
        xs:w-rem30
        xxs:w-96
        xxxs:w-72
        p-10 
        right-0
        top-40 
        bg-gray-900 
        bg-opacity-70
        "
      >
        <h1 className="text-teal-200 lg:text-7xl sm:text-6xl xs:text-6xl xxs:text-5xl text-4xl font-bold">
          {headerSlogan}
        </h1>
      </section>
    </header>
  );
}

export default SecondaryHeader;
