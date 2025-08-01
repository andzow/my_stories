import axios from "axios";

export default defineSitemapEventHandler(async (e) => {
  const { data } = await axios.get(
    `https://xn--80aqckmmfdf.xn--p1ai/api/product/getSiteMap`
  );
  data.push(
    {
      _path: "/lookbook/awakening",
    },
    {
      _path: "/lookbook/letniy-veter",
    }
  );
  return data.map((p) => {
    return {
      loc: p._path,
      lastmod: new Date(),
    };
  });
});
