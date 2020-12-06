export default {
  ssr: false,
  target: "static",
  head: {
    title: "Favisnatch - Get any website's icon instantly",
    link: [
      {
        rel: "icon",
        href: "/favicon.png",
      },
    ],
  },
  css: ["~/assets/style.css"],
};
