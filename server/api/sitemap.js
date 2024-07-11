import axios from "axios";

export default defineSitemapEventHandler(async (e) => {
  const { data } = await axios.get(
    `https://xn--80aqckmmfdf.xn--p1ai/api/product/getSiteMap`
  );
  const newArr = data.map((p) => {
    return {
      loc: p._path,
      lastmod: p.modifiedAt,
    };
  });
  return data.map((p) => {
    return {
      loc: p._path,
      lastmod: p.modifiedAt,
    };
  });
});
