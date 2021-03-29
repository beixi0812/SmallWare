<template>
  <div class="detail-countent">
    <!-- 顶部导航 -->
    <navbar></navbar>
    <!-- 商品详情 -->
    <div class="detail-children">
      <!-- 左边 -->
      <div class="children-left">
        <div class="left-share">
          <span>分享</span>
        </div>
        <div class="left-collect">
          <span>加入收藏</span>
        </div>
        <div class="left-comment">
          <span>评论此商品(999+)</span>
        </div>
      </div>
      <!-- 中心 -->
      <div class="children-center">
        <!-- 标题 -->
        <div class="center-title">
          <h1>{{imgDetail.name}}</h1>
          <p>¥{{imgDetail.price}}.00</p>
        </div>
        <!-- 商品 -->
        <div class="centre-img">
          <img :src="large[tabId]"  />
        </div>
        <!-- 缩略图 -->
        <div class="centre-thumbnail">
          <img
            v-for="(item, index) in thumbnail"
            :key="index"
            :src="item"
            alt=""
            :data-id= "index"
            @click="change(index)"
          />
        </div>
        <!-- 描述 -->
        <ul v-html="imgDetail.rich_text">
          <!-- <li>12盎司帆布，重磅质感，经久耐穿</li>
          <li>PU中底，穿着舒适，加厚缓冲</li>
          <li>细节说话，复古街头，重塑经典</li> -->
        </ul>
        <!-- 价格说明 -->
        <div class="centre-state">
          <h3>价格说明（此说明仅当出现价格比较时有效）</h3>
          <p>
            划线价格：划线的价格可能是商品的专柜吊牌价或正品零售价指导价或该商品的曾经展示过的销售价等，仅供您参考。
          </p>
          <p>
            未划线价格：未划线的价格是商品在官网上的销售标价，具体的成交价格可能因为会员使用优惠券发生变化，最终以订单结算页价格为准。
          </p>
          <button>Chuck 70</button>
        </div>
      </div>
      <!-- 右边 -->
      <div class="children-right">
        <div class="right-title">
          <img :src="large[0]" alt="" />
          <p>型号 : <b>162050C001</b></p>
          <span @mouseover="mouseOver" @mouseleave="mouseLeave"
            ><b>尺码对照表</b></span
          >
        </div>
        <!-- 尺码表 -->
        <div class="size" :style="{ display: active }">
          <img src="../assets/img/size.png" alt="尺码表" />
        </div>
        <div class="right-param">
          <h3>尺码换算器</h3>
          <div class="right-size">
            <!-- 尺码 -->
            <p>请选择您的尺码</p>
            <el-select v-model="value" placeholder="请选择尺码">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
              </el-option>
            </el-select>
          </div>
          <!-- 选择数量 -->
          <div class="right-size">
            <p>数量</p>
            <el-input-number
              v-model="num"
              :min="1"
              :max="imgDetail.stock_num"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="right-button">
            <!-- <a href="">立即购买</a> -->
            <br />
            <a @click="addtocart">添加到购物车</a>
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
import { goods,addcart } from "@/api";
// console.log(goods,addcart);
export default {
  components: {
    navbar,
    footerbar,
  },
  data() {
    return {
      imgDetail:'',
      large:[], //大图
      thumbnail: [], //缩略图
      tabId: 0, //点击切换图片
      num: 1, //购物车数量
      value: "",//尺寸
      active: "",
      options: [
        //尺码选择
        {
          label: "35.5",
          disabled: true,
        },
        {
          label: "36.5",
        },
        {
          label: "37",
        },
        {
          label: "38",
        },
        {
          label: "39",
          disabled: true,
        },
        {
          label: "40",
        },
        {
          label: "41",
        },
        {
          label: "42",
        },
        {
          label: "43",
        },
        {
          label: "44",
        },
        {
          label: "45",
        },
        {
          label: "46",
          disabled: true,
        },
      ],
      
    };
  },
  async created(){
    await goods(this.$route.query.id).then((res)=>{
      // console.log(res.data.result.name,res);
      //大图  小图
      this.large = this.thumbnail = res.data.result.s_goods_photos.map((ele)=>{
        return ele.path;
      });
      // console.log(this.large);
      this.imgDetail = {
        name:res.data.result.name,
        desc:res.data.result.desc,
        price:res.data.result.price,
        rich_text:res.data.result.rich_text,
        stock_num:res.data.result.stock_num,
      };

    })
  },
  methods: {
    //点击切换图片
    change(index) {
      this.tabId = index;
    },
    //鼠标移入
    mouseOver() {
      this.active = "block";
    },
    //鼠标移除
    mouseLeave() {
      this.active = "none";
    },
    addtocart(){
      console.log(addcart); 
      let id = this.$route.query.id
      addcart({
        goods_id:id,
        num:this.num,
      }).then((res)=>{
        console.log("添加结果",res);
        this.$message({
          message: '成功添加购物车',
          type: 'success',
          duration:600
        });
      })
    }
  },
};
</script>

<style lang="scss">
.detail-countent {
  .detail-children {
    padding-top: 200px;
    width: 1050px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .children-left {
      height: 130px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        width: 225px;
        font-size: 14px;
        color: #333;
        cursor: pointer;
        span {
          vertical-align: middle;
          margin-left: 10px;
        }
      }
      .left-share {
        &::before {
          content: "";
          display: inline-block;
          background: url("../assets/img/detail.png") no-repeat;
          width: 30px;
          height: 30px;
          vertical-align: middle;
        }
      }
      .left-collect {
        &::before {
          content: "";
          display: inline-block;
          background: url("../assets/img/detail.png") 0px -43px no-repeat;
          width: 30px;
          height: 30px;
          vertical-align: middle;
        }
      }
      .left-comment {
        &::before {
          content: "";
          width: 100px;
          height: 30px;
          display: inline-block;
          background: url("../assets/img/stars.png") repeat-x;
          vertical-align: middle;
        }
      }
    }
    .children-center {
      .center-title {
        h1 {
          color: #333;
          text-align: center;
          font-size: 24px;
          margin-bottom: 15px;
        }
        p {
          color: #333;
          text-align: center;
          font-size: 24px;
        }
      }
      .centre-img {
        text-align: center;
        img {
          width: 450px;
          height: 450px;
        }
      }
      .centre-thumbnail {
        text-align: center;
        img {
          cursor: pointer;
          width: 60px;
          height: 60px;
          margin: 0 10px;
          box-sizing: border-box;
        }
        img:hover {
          border: 1px solid #999;
        }
      }
      ul {
        width: 450px;
        margin: 30px auto;
        li {
          font-size: 12px;
          margin: 5px 0;
          color: #333;
          vertical-align: middle;
          font-size: 14px;
          &::before {
            height: 3px;
            width: 3px;
            background: #333;
            display: inline-block;
            content: "";
            vertical-align: middle;
            margin: 0 5px;
          }
        }
      }
      .centre-state {
        width: 450px;
        margin: 0 auto;
        h3 {
          margin-bottom: 20px;
          font-size: 18px;
        }
        p {
          font-size: 12px;
          line-height: 14px;
          line-height: 20px;
        }
        button {
          margin: 40px auto 0;
          height: 48px;
          display: block;
          text-align: center;
          line-height: 50px;
          color: #fff;
          background-color: #000;
          font-size: 16px;
          cursor: pointer;
          padding: 0 84px;
          border: 1px solid #000;
        }
        button:hover {
          color: #333;
          background: white;
        }
      }
    }
    .children-right {
      width: 225px;
      .right-title {
        margin-bottom: 20px;
        img {
          width: 37.6px;
          height: 37.6px;
          box-sizing: content-box;
          padding: 5px;
          margin-bottom: 15px;
          border: 1px solid transparent;
          border: 1px solid #999;
          cursor: pointer;
        }
        p {
          font-size: 13px;
          padding-bottom: 15px;
          b {
            font-size: 13px;
            font-family: "楷体";
          }
        }
        span {
          padding: 15px 0;
          width: 100%;
          &::before {
            content: "";
            width: 20px;
            height: 20px;
            display: inline-block;
            background: url("../assets/img/sprites_account.png")-11px -138px no-repeat;
            vertical-align: middle;
          }
          b {
            font-weight: inherit;
            vertical-align: middle;
            border-bottom: 2px solid #999;
            cursor: pointer;
          }
        }
      }
      .size {
        position: absolute;
        left: 10%;
        top: 50%;
        z-index: 100;
        display: none;
      }
      .right-param {
        border-top: 1px solid #b7b7b7;
        h3 {
          margin: 20px 0 25px;
        }
        .right-size {
          display: flex;
          justify-content: space-between;
          font-family: "宋体";
          font-size: 13px;
          line-height: 28px;
          margin-bottom: 20px;
          .el-input-number{
            width: 280px;
          }
          p {
            width: 190px;
            height: 40px;
            line-height: 40px;
            text-align: left;
            font-size: 12px;
          }
          input {
            font-size: 12px;
          }
          select {
            width: 98px;
            height: 28px;
            outline: none;
            font-family: "宋体";
            text-align: center;
            option {
              font-family: "宋体";
              font-weight: bold;
            }
          }
        }
        .right-button {
          a {
            background: #940000;
            width: 200px;
            height: 50px;
            color: white;
            font-weight: bold;
            font-size: 19px;
            line-height: 50px;
            margin-bottom: 2px;
            text-align: center;
            cursor: pointer;
            display: block;
          }
          a:hover {
            background: rgb(191, 102, 102);
          }
          a:last-child::before {
            height: 20px;
            width: 20px;
            content: "";
            display: inline-block;
            background: url("../assets/img/detail.png")-37px -138px;
            vertical-align: middle;
            margin-bottom: 5px;
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>