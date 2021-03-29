<template>
  <div class="shoppingCart">
    <!-- 顶部导航 -->
    <navbar></navbar>
    <div class="cart-children">
      <div class="children-title">
        <ul>
          <li>我的购物车</li>
          <li>填写订单信息</li>
          <li>成功提交订单</li>
        </ul>
      </div>
      <!-- 商品 -->
      <div class="children-conter">
        <div class="msg">
          <h1>您的全部商品</h1>
          <el-checkbox
            label="全选"
            v-model="isCheckAll"
            name="type"
            @change="checkAll"
          ></el-checkbox>
        </div>
        <!-- 删除按钮 -->
        <!-- 每一个商品信息订单 -->
        <div class="information" v-for="(el, idx) in cartList" :key="idx">
          <el-checkbox
            label=""
            :value="el.checked"
            name="type"
            @change="checklist(idx)"
          ></el-checkbox>
          <div class="delete">
            <div class="btn">
              <button @click="del(el.record_id)">删除</button>
            </div>
          </div>
          <div class="item-img">
            <img :src="el.thumb" />
          </div>
          <div class="item-title">
            <h4>{{ el.name }}</h4>
            <p>型号：162050C001</p>
            <p>尺码：41</p>
          </div>
          <div class="item-footer">
            <div class="price">
              <span>¥{{ el.num * el.price }}</span>
            </div>
            <div class="inputNumber">
              <el-input-number
                v-model="el.num"
                controls-position="right"
                :min="1"
                @change="changeNum(el.record_id, el.num)"
              ></el-input-number>
            </div>
          </div>
        </div>
        <div class="cart-sum">
          <div class="sum-left">
            <div>
              <p>需要帮助吗?</p>
              <ul>
                <li>如何确保订单安全?</li>
                <li>我可以使用什么付款方式?</li>
                <li>如何进行退换货?</li>
                <li>更多帮助</li>
              </ul>
            </div>
            <a :href="/#/">继续购物</a>
          </div>
          <div class="sum-right">
            <div>
              <!-- <p>商品原价:</p>
              <b>￥699.00</b> -->
            </div>
            <div>
              <p style="margin-top: 0px">店铺活动:</p>
              <b>-¥0.00</b>
            </div>
            <div>
              <p style="font-size: 20px">商品总金额:</p>
              <b>¥{{ total }}</b>
            </div>
            <div>
              <p><b>*</b>不含运费及优惠券折扣</p>
            </div>
            <div>
              <p>*已会员身份结算科享受免费配送服务</p>
            </div>
            <button @click="toaddorder">结算</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <footerbar></footerbar>
  </div>
</template>

<script>
import navbar from "@/components/NavBar.vue";
import footerbar from "@/components/FooterBar";
import { getcart as getcartapi, delcart, updatacart } from "@/api";
// console.log(getcartapi, delcart, updatacart);
import {mapState} from "vuex"
export default {
  components: {
    navbar,
    footerbar,
  },
  data() {
    return {
      // cartList: [],
      isCheckAll: false,
    };
  },
  created() {
    this.getcart();
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    //跳转到填写收货地址页面
    toaddorder() {
      this.$router.push("/addorder");
    },
    //删除
    del(id) {
      console.log("需要删除的商品id", id);
      delcart(id).then(() => {
        // console.log("删除成功了吗？");
        this.getcart();
      });
    },
    //更新购物车
    changeNum(id, num, el) {
      console.log(updatacart, id, num);
      updatacart({ id, num }).then((res) => {
        // console.log('更新完成',res);
        el.num = res.data.result.num; //拿到最新数据到页面,也可以不要
      });
    },
    
    checklist(index) {
      // if (this.cartList[index].checked) {
      //   this.cartList.checked = false;
      // } else {
      //   this.cartList.checked = true;
      // }
      // this.cartList[index].checked = !this.cartList[index].checked;
      //更新
      this.$store.commit("set_cart_item_checked",index)
    },
    checkAll() {
      // console.log(this.isCheckAll);
      if (this.isCheckAll) {
        this.cartList.forEach((el) => {
          el.checked = true;
        });
      } else {
        this.cartList.forEach((el) => {
          el.checked = false;
        });
      }
    },
    //删除购物车信息
    getcart() {
      getcartapi().then((res) => {
        // console.log(res);
        let data = res.data.result.map((el) => {
          console.log(el);
          return {
            num: el.num,
            value: el.s_good.value,
            name: el.s_good.name,
            thumb: el.s_good.s_goods_photos[0].path,
            cart_id: el.id,//购物车单条记录id,用于下单
            checked: false,
            price: el.s_good.price,
            goods_id:el.s_good.id,//
          };
        });
        console.log("处理后的数据", data);
        // this.cartList = data;
        this.$store.commit("set_cart_list",data)
      });

      
    },
  },
  watch: {
    cartList: {
      deep: true,
      handler(value) {
        // if (value.length == 0) {
        //   this.isAllCheck = false;
        //   // console.log("是否全选",isAllCheck);
        // } else {
        //   // console.log(value);
        //   let isAllCheck = this.cartList.every((el) => el.checked);

        //   this.isCheckAll = isAllCheck;
        // }
        console.log(value);
        let isAllCheck = this.cartList.every((el) => el.checked);
        this.isCheckAll = isAllCheck;
      },
    },
  },
  //计算属性
  computed: {
    ...mapState(['cartList']),
    //总金额
    total() {
      return this.cartList.reduce((sum, el) => {
        //勾选下显示金额
        if (el.checked) {
          return (sum += el.num * el.price);
        } else {
          return sum;
        }
      }, 0);
    },
  },
};
</script>

<style lang="scss">
.shoppingCart {
  margin-top: 200px;
  width: 100%;
  .cart-children {
    width: 1000px;
    margin: 0 auto;
  }
  .cart-children {
    .children-title {
      ul {
        width: 486px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-content: center;

        li {
          position: relative;
          width: 33.33%;
          text-align: center;
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
        li:first-child::after {
          background: rgb(9, 9, 9);
          margin-top: 15px;
        }
        li:not(:last-child)::before {
          content: "";
          width: 87%;
          height: 1px;
          display: flex;
          position: absolute;
          top: 30px;
          left: 57%;
          background: #999;
          z-index: 1;
          margin-top: 12px;
        }
      }
    }
    .children-conter {
      width: 1000px;
      margin: 0 auto;
      font-family: "宋体";
      .msg {
        h1 {
          font-size: 24px;
        }
        .el-checkbox {
          border-bottom: 1px solid black;
          padding-bottom: 15px;
          width: 100%;
          margin-left: 10px;
        }
      }
      //删除按钮
      .delete {
        text-align: right;
        position: absolute;
        right: 173px;
        button {
          cursor: pointer;
          border: 2px solid black;
          background: none;
          border-radius: 12%;
        }
        &::before {
          content: "";
          display: inline-block;
          width: 22px;
          height: 23px;
          background: url("../assets/img/sprites_account.png") -5px 58px;
          margin-right: 11px;
        }
      }
      .information {
        margin-top: 15px;
        margin-bottom: 40px !important;
        border-bottom: 1px solid black;
        display: flex;
        .item-img {
          margin-right: 30px;
          img {
            width: 160px;
            height: 160px;
          }
        }
        .item-title {
          h4 {
            color: #333;
            p {
              font-size: 14px;
              padding: 5px 0;
            }
          }
        }
        .item-footer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 30px 0px 80px 360px;
          .price {
            text-align: right;
            margin-bottom: 15px;
            span {
              color: #b63330;
              width: 100%;
              text-align: right;
              font-size: 20px;
              margin-bottom: 20px;
            }
          }
          .inputNumber {
            .el-input-number {
              width: 130px;
            }
          }
        }
      }
      .cart-sum {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        .sum-left {
          div {
            width: 300px;
            height: 155px;
            padding: 20px;
            border: 1px solid #b2b2b2;
            margin-bottom: 10px;
            p {
              padding-bottom: 10px;
            }
            ul {
              li {
                display: flex;
                align-items: center;
                line-height: 20px;
                &::before {
                  content: "";
                  height: 3px;
                  width: 3px;
                  display: inline-block;
                  background: #333;
                  margin-right: 5px;
                }
              }
            }
          }
          a {
            text-align: center;
            width: 340px;
            line-height: 50px;
            font-size: 18px;
            color: #333;
            text-align: center;
            border: 1px solid #999;
            cursor: pointer;
            display: inline-block;
          }
        }
        .sum-right {
          width: 242px;
          div {
            text-align: right;
            width: 242px;
            margin-bottom: 20px;
            b {
              font-size: 16px;
              font-weight: inherit;
            }
          }
          div:nth-child(2) > b,
          div:nth-child(3) > b {
            color: #b63330;
          }
          div:nth-child(3) {
            font-size: 24px;
            margin-top: 20px;
            b {
              font-size: 22px;
            }
          }
          div:nth-child(4),
          div:nth-child(5) {
            font-size: 14px;
            b {
              color: #b63330;
            }
          }
          div:nth-child(5) {
            color: #b63330;
          }
          button {
            cursor: pointer;
            width: 200px;
            height: 50px;
            font-size: 18px;
            color: white;
            background: #b63330;
            text-align: center;
            line-height: 50px;
            margin-left: 40px;
            margin-top: 10px;
            border: 0px;
          }
        }
      }
    }
  }
}
</style>