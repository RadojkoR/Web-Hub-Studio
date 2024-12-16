import { Helmet } from "react-helmet"
import { Header } from "../Components/Layout"
import { MetaProps } from "../types/interfaces"

function Contact({metaTitle, metaDescription}: MetaProps) {
  return (
    <>
      <Helmet>
        <title>Web Hub Studio - {metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Header />
    </>
  );
}

export default Contact