<template>
    <div class="nav"> 
        <div class="nav-heade">
        <!-- 导航logo -->
            <div class="logo"></div>
        <!-- 登录/注册 -->
            <div class="nav-count">
                <div class='nav-user'>
                    <span> 登录 </span>
                    <span> / </span>
                    <span> 注册 </span>
                    <!-- <i class="el-icon-user"></i> -->
                    <div>
                    <a title="登录/注册"></a>
                    </div>
                </div>

                <div class="nav-shopcar">
                    <span>购物车</span>
                    <i class="el-icon-goods"></i>
                </div>
                <div class="search">
                    <a alt="搜索"></a>
                </div>
                <div class="help">
                    <a alt="帮助"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
$bgColor:black;
$fontSize:50px;
.nav{
    top: 0;
    left: 0;
    position: fixed;
    z-index: 101;
    width: 100%;
    background-color: $bgColor;
    .nav-heade{
        height:80px;
        background-color: $bgColor;
        width:1196px;
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo{
            background:url('../assets/imagse/Logo.png') 0 0 no-repeat;
            width: 161px;
            height: 18.59px;
            cursor: pointer;
        };
        .nav-count{
            color:white;
            display: flex;
            justify-content: space-evenly;
            align-content: center;
            .nav-user{
                background: url('../assets/img/index/ia_100000088.png');
                background-position: -137px 89px;
                height: 31px;
                width: 30px;
                vertical-align: middle;
                margin: 0 20px;
                cursor: pointer;
            }
            .search{
                background: url('../assets/img/index/ia_100000088.png');
                background-position: -137px 89px;
                height: 31px;
                width: 30px;
                vertical-align: middle;
                margin: 0 20px;
                cursor: pointer;
            }
            .help{
                background: url('../assets/img/index/ia_100000088.png');
                background-position: -169px 90px;
                height: 31px;
                width: 30px;
                vertical-align: middle;
                margin: 0 20px;
                cursor: pointer;
            }
        }
    }
}

</style>