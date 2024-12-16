

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