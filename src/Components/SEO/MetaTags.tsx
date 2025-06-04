import { Helmet } from "react-helmet"
import { useMeta } from "../../hooks/useMeta"


function MetaTags() {
    const {title, description, keywords, canonicalUrl} = useMeta();
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={ogImage} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Web Hub Studio" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={ogImage} /> */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}

export default MetaTags