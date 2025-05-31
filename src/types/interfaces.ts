

// META TYPES
export interface MetaProps {
  metaTitle: string;
  metaDescription: string;
}

// SECONDARY HEADER
interface ContactHeader {
  headerBgClass: string;
  headerSloganBold: string;
  headerSloganRegular: string;
}

export interface SecondaryHeaderProps {
  headerInfo: ContactHeader[];
}

// SERVICE
export interface Service {
  name: string;
}

export interface ServiceCardType {
  title: string;
  description: string;
  services: { name: string }[];
  lastPara: string;
  icon?: string;
  learnMoreBtnLink: string;
  learnMoreBtnTxt: string;
  cardBgColor: string;
  cardIconColor: string;
};

export interface CardProps {
  service: ServiceCardType;
}