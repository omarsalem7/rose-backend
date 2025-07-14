import favicon from "./extensions/favicon.ico";
const config = {
  locales: [
    "ar",
    // 'fr',
  ],
  head: {
    favicon: favicon,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
