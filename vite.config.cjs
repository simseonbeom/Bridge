module.exports = {
  root: './public',
  base: process.env.NODE_ENV.includes('production') ? '/Bridge/build/' : '/',
  build: {
    outDir: '../build',
  },
};
