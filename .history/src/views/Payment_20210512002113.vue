<template>
  <div class="payment-content">
    <!-- 顶部导航 -->
    <navbar></navbar>
    <div class="payment-children">
      <div class="children-title">
        <ul>
          <li>我的购物车</li>
          <li>填写订单信息</li>
          <li>成功提交订单</li>
        </ul>
      </div>
      <div class="children-body">
        <div class="body-left">
          <h3>订单提交成功! 去付款咯~</h3>
          <p>请在<span>0小时30分</span>内完成支付,超时后将取消订单</p>
          <p>收货信息:</p>
        </div>
        <div class="body-right">
          <p>应付总额: 4882<span></span></p>
          <div @click="isActive = !isActive">
            订单详情<b class="el-icon-arrow-down"></b>
          </div>
        </div>
        <div class="body-content" v-show="isActive">
          <div class="body-details">
            <p>订单号:1263021458<span></span></p>
            <p>姓名：刘泽坚</p>
            <p>联系电话：13924779260</p>
            <p>收货地址:广东省广州市增城区广州松田学院<span></span></p>
            <div class="item-name">
              <p>商品名称:1970s</p>
              <div>
                <p></p>
              </div>
            </div>
            <p>发票信息: <span>电子发票 个人</span></p>
          </div>
        </div>
      </div>
      <div class="children-footer">
        <div class="footer-title">
          <p>请选择以下方式付款</p>
        </div>
        <div class="footer-body">
          <p>支付平台</p>
          <div>
            <img src="../assets/img/icon-wechat.png" alt="" />
            <img src="../assets/img/wechat.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 尾部导航 -->
    <footerbar></footerbar>
  </div>
</template>
<script>
import navbar from "@/components/NavBar";
import footerbar from "@/components/FooterBar";
export default {
  components: {
    navbar,
    footerbar,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss">
.payment-content {
  margin-top: 170px;
  width: 100%;
  min-width: 1164px;
  font-family: "宋体";
  font-size: 13px;
  .payment-children {
    width: 1000px;
    margin: 0 auto;
    .children-title {
      ul {
        width: 486px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        position: relative;
        li {
          position: relative;
          width: 33.33%;
          text-align: center;
          margin-top: 20px;
          &::after {
            content: "";
            counter-increment: step;
            margin: 0 auto;
            width: 20px;
            height: 20px;
            border: 1px solid #999;
            display: block;
            border-radius: 50%;
            margin-bottom: 10px;
            background: white;
            margin-top: 15px;
          }
        }
        li::after {
          background: #333;
        }
        li:not(:last-child)::before {
          content: "";
          width: 87%;
          height: 1px;
          display: flex;
          position: absolute;
          top: 40px;
          left: 57%;
          background: #999;
          z-index: 1;
        }
      }
    }
    .children-body {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #999;
      padding: 30px 20px;
      flex-wrap: wrap;
      .body-left {
        width: 70%;
        h3 {
          padding-bottom: 10px;
          font-size: 22px;
        }
        p {
          padding: 5px 0;
          span {
            color: #c62127;
          }
        }
      }
      .body-right {
        width: 30%;
        text-align: right;
        p {
          padding-bottom: 30px;
          span {
            font-size: 22px;
            color: #c62127;
          }
        }
        div {
          cursor: pointer;
          b {
            margin-left: 5px;
          }
        }
      }
      .body-content {
        width: 1000px;
        margin-top: 35px;
        border-top: 1px dashed #999;
        padding-top: 15px;
      }
      p {
        padding-bottom: 15px;
      }
      span {
        padding-left: 20px;
      }
      p:nth-of-type(1) {
        span {
          color: #c62127;
        }
      }
      .item-name {
        display: flex;
        div {
          padding: 0 0 15px 20px;
          p {
            padding: 2px 0;
          }
        }
      }
    }
    .children-footer {
      height: 200px;
      margin-top: 40px;
      border: 1px solid #999;
      padding: 0 20px;
      .footer-title {
        border-bottom: 1px dashed #999;
        font-size: 16px;
        padding: 15px 0;
        font-weight: bold;
      }
      .footer-body {
        margin-top: 15px;
        font-weight: bold;
        div {
          display: flex;
          margin-left: 60px;
          img {
            margin: 20px 10px;
            border: 1px solid #999;
          }
        }
      }
    }
  }
}
</style>
