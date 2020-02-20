import React from "react";

import { Helmet } from "react-helmet";

const Meta = ({ meta, url, lang, title }) => {
  let ogImage = "/img/logo.jpg";
  let imageSrc = "/img/logo.jpg";
  let langSel = lang ? lang.get("title") : "EN";

  let ogTitle = title ? title : meta.get("title");

  if (meta.get("thumbnail")) {
    ogImage = meta.get("thumbnail");
    imageSrc = meta.get("thumbnail");
  }
  return (
    <Helmet
      htmlAttributes={{
        lang: langSel.toLowerCase(),
        class: "no-js",
        dir: langSel.toLowerCase() === "ar" ? "rtl" : "ltr"
      }}
      title={ogTitle}
      meta={[
        {
          name: "description",
          content: meta.get("description")
        },
        {
          name: "keywords",
          content: meta.get("keywords")
        },
        {
          name: "og:title",
          content: ogTitle
        },
        {
          name: "og:image",
          content: ogImage
        }
      ]}
      link={[
        {
          rel: "canonical",
          value: url
        },
        {
          rel: "image_src",
          value: imageSrc
        }
      ]}
    />
  );
};

export default Meta;
