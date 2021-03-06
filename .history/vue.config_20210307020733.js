let path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
     // 为路径配置别名,美观和简化路径写法
     // 为路径配置别名,美观和简化路径写法
        chainWebpack: (config) => {
        config.resolve.alias
            // .set(别名名称,别名指向路径)
            // 例:
            // __dirname(当前文所在的目录绝对路径); C:/project/bluej/v-config/

            // path.join:用于处理拼接路径,比如下方 path.join 会得到正确路径如下
            // C:/project/bluej/v-config/src/views
            .set('@views', path.join(__dirname + '/src/views'))// 直接使用path.join
            .set('@coms', path.join(__dirname + '/src/components'))
    },
    // 引入scss,适用于需要引入全局变量的情况
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/common.scss";`
            }
        }
    }
}