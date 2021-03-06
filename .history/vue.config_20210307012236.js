let path = require("path");
module.exports = {
    publicPath:process.env.NODE_ENV === 'production' ? './',
     // 为路径配置别名,美观和简化路径写法
     chainWebpack: (config) => {
        config.resolve.alias
            // .set(别名名称,别名指向路径)
            .set('@coms', resolve('src/components'))// 用了上方封装好的函数
            .set('@views', path.join(__dirname, './src/views'))// 直接使用path.join
    },
    // 运行 dev 开发时 的代理服务配置,切记build打包之后就没有这个配置了
    devServer: {
        // open:true,//编译完默认打开浏览器
        // 一. 简单配置,适用于所有接口都在同一服务下
        // proxy: 'http://localhost:8080'
        // 二. 如果需要更详细的配置,proxy可以接收一个对象,包含多个需要代理的服务域名
        proxy: {
            // 当开发时的请求,包含 '/api' 时,自动转发到target目标服务上
            '/api': { // 后台服务器1
                target: 'http://corsapi.couchpotato.fun', // 需要代理的目的服务
                ws: true,
                changeOrigin: true,
            },
        }
    },
    // 引入scss,适用于需要引入全局变量的情况
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/index.scss";`
            }
        }
    }
}