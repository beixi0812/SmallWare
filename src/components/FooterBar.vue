<template>
  <div class="footerbar">
    <!-- 关注 -->
    <div class="attention">
      <h1>关注CONVERSE</h1>
      <p>
        Converse同时活跃在各类社交网络平台，点击下列你所喜爱的常用社交平台，密切关注Converse的最新产品与资讯。
      </p>
      <div class="information">
        <div class="weibo"><a href=""></a></div>
        <div class="wechat"><a href=""></a></div>
      </div>
    </div>
    <!-- 信息 -->
    <div class="footer">
      <div class="content">
        <ul>
          <li>关于我们</li>
          <li>帮助和购物指南</li>
          <li>隐私政策</li>
          <li>使用规则</li>
        </ul>
        <div class="footer-img-top">
          <img src="../assets/img/index/ia_100000111.png" />
        </div>
        <ul>
          <li>@匡威体育用品（中国）有限公司 保留所有权利</li>
          <li>沪ICP备11044134号-2</li>
          <li>
            <img src="../assets/img/index/ia_100000076.png" alt="" />
            沪公网安备 31011002001667号
          </li>
          <li>
            <img src="../assets/img/index/ia_100000077.png" alt="" />
            电子营业执照
          </li>
          <li>公司证照</li>
        </ul>
        <div class="footer-img-bottom">
          <img src="../assets/img/index/ia_100000078.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footerbar {
  margin-top: 60px;
  text-align: center;
  color: #fff;
  .attention {
    width: 100%;
    height: 350px;
    background-color: #464646;
    h1 {
      font-size: 30px;
      margin: 78px auto 35px;
      display: inline-block;
    }
    .information {
      display: flex;
      justify-content: center;
      align-content: center;
      margin-top: 50px;
      .weibo {
        background: url("../assets/img/index/ia_100000110.png");
        background-position: -75px 0px;
        height: 75px;
        width: 75px;
        vertical-align: middle;
        margin: 0 20px;
        cursor: pointer;
      }
      .wechat {
        background: url("../assets/img/index/ia_100000110.png");
        background-position: -75px -75px;
        height: 75px;
        width: 75px;
        vertical-align: middle;
        margin: 0 20px;
        cursor: pointer;
      }
      .weibo:hover {
        background: url("../assets/img/index/ia_100000110.png");
        background-position: 0px 0px;
      }
      .wechat:hover {
        background: url("../assets/img/index/ia_100000110.png");
        background-position: 0px -75px;
      }
    }
  }
  .footer {
    overflow: hidden;
    width: 100%;
    min-width: 1164px;
    height: 180px;
    background: black;
    margin-top: 1px;
    .content {
      width: 1000px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      ul {
        margin-top: 19px;
        display: flex;
        justify-content: center;
        li {
          cursor: pointer;
          margin-right: 20px;
          color: white;
          font-size: 12px;
        }
      }
      .footer-img-top {
        margin: 14px auto 0;
        img {
          width: 66.5px;
          height: 50px;
        }
      }
      ul:nth-of-type(2) {
        margin-top: 12px;
        li {
          margin-right: 15px;
        }
        li:nth-child(3) {
          vertical-align: middle;
          img {
            width: 15px;
            height: 15px;
            vertical-align: middle;
          }
        }
        li:nth-child(4) {
          vertical-align: middle;
          img {
            width: 16px;
            height: 19px;
            vertical-align: middle;
          }
        }
      }
      .footer-img-bottom {
        margin: 6px auto;
        img {
          width: 60px;
          height: 30px;
        }
      }
    }
  }
}
</style>