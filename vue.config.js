const path = require('path');
const resolve = dir => path.join(__dirname, dir)

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8989',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api':''
        }
      }
    }
  }
});
