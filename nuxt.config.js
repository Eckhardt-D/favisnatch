export default {
  ssr: false,
  target: "static",
  head: {
    title: "Favisnatch - Get any website's icon instantly",
    meta: [
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
      },
    ],
    link: [
      {
        rel: "icon",
        href: "/favicon.png",
      },
    ],
  },
  css: ["~/assets/style.css"],
};
