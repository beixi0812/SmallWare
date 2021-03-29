<template>
  <div class="home">
    <!-- 顶部导航 -->
    <navbar></navbar>
    <router-view></router-view>
    <div class="content">
      <!-- 广告条轮播 -->
      <div class="content-swiper">
        <swiper class="swiper" :options="swiperlist">
          <swiper-slide
            >尊敬的客户您好，我们店铺不会泄露您的任何消费信息，敬请放心。另外，我们也不会主动要求获取、收集、使用任何消费者的金融消费类信息（如：信用卡信息）。如果接到索取以上信息的电话，是属于诈骗电话，请勿相信，以防个人的钱财损失。如您对订单有疑问，请联系在线客服。</swiper-slide
          >
          <swiper-slide class="swiper-two"
            >因疫情影响，新疆、黑龙江、辽宁、云南、甘肃、河北、北京、山西、西藏、内蒙古、吉林、陕西、河南等部分地区暂停揽收或配送有所延迟。联系客服了解详情，给您带来不便敬请谅解。</swiper-slide
          >
        </swiper>
      </div>
      <!-- 轮播图  -->
      <div class="lunbotu">
        <swiper class="swiper-lunbotu" :options="swiperOption">
          <swiper-slide v-for="(item, index) in lunbotulist" :key="index">
            <img :src="item.img" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/index/swiper03.gif" alt="" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev">
            <div class="left"><a href=""></a></div>
          </div>
          <div class="swiper-button-next" slot="button-next">
            <div class="right"><a href=""></a></div>
          </div>
        </swiper>
      </div>
    </div>
    <div class="content-title">
      <span>ALL STARS</span>
      <span>魂动城市系列</span>
      <span>PRO LEATHER</span>
      <span>SKATE</span>
    </div>
    <!-- 热卖单品 -->
    <div class="content-hot">
      <h2><a>热卖单品</a></h2>
      <div class="content-proams">
        <div class="content-item">
          <div class="item-title" @mouseover="change">
            <span data-id="1">男生</span>
            <img src="../assets/img/index/top03.jpg" alt="" data-id="1" />
            <b v-show="tabId == 1"></b>
          </div>
        </div>
        <div class="content-item">
          <div class="item-title" @mouseover="change" data-id="2">
            <span data-id="2">女生</span>
            <img
              src="../assets/img/index/ia_100000042.jpg"
              alt=""
              data-id="2"
            />
            <b v-show="tabId == 2"></b>
          </div>
        </div>
        <div class="content-item">
          <div class="item-title" @mouseover="change" data-id="3">
            <span data-id="3">衣服</span>
            <img src="../assets/img/index/top01.jpg" alt="" data-id="3" />
            <b v-show="tabId == 3"></b>
          </div>
        </div>
        <div class="content-item">
          <div class="item-title" @mouseover="change" data-id="4">
            <span data-id="4">装饰</span>
            <img src="../assets/img/index/top02.jpg" alt="" data-id="4" />
            <b v-show="tabId == 4"></b>
          </div>
        </div>
      </div>
      <!-- 渲染 -->
      <div class="item-sex" v-show="tabId == 1">
        <ul>
          <li v-for="(item, index) in boyList" :key="index" @click="todetail(item.id)">
            <a>
              <img :src="item.img" alt="" />
              <span>{{ item.name }}</span>
              <b>￥{{ item.price }}</b>
            </a>
          </li>
        </ul>
      </div>
      <div class="item-sex" v-show="tabId == 2">
        <ul>
          <li v-for="(item, index) in girlList" :key="index">
            <a href="">
              <img :src="item.img" alt="" />
              <span>{{ item.name }}</span>
              <b>￥{{ item.price }}</b>
            </a>
          </li>
        </ul>
      </div>
      <div class="item-sex" v-show="tabId == 3">
        <ul>
          <li v-for="(item, index) in clothesList" :key="index">
            <a href="">
              <img :src="item.img" alt="" />
              <span>{{ item.name }}</span>
              <b>￥{{ item.price }}</b>
            </a>
          </li>
        </ul>
      </div>
      <div class="item-sex" v-show="tabId == 4">
        <ul>
          <li v-for="(item, index) in shoeList" :key="index" >
            <a href="">
              <img :src="item.img" alt="" />
              <span>{{ item.name }}</span>
              <b>￥{{ item.price }}</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新品推荐 -->
    <div class="content-new">
      <h2><a>新品推荐</a></h2>
      <div class="item-sex">
        <ul>
          <li v-for="(item, index) in newList" :key="index" >
            <a href="">
              <img :src="item.img" alt="" />
              <span>{{ item.name }}</span>
              <b>￥{{ item.price }}</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 街头先型 -->
    <div class="content-street">
      <div class="street-title">
        <img src="../assets/img/index/ia_100000072.png" alt="" />
        <span>街头先型</span>
      </div>
      <div class="street-img">
        <div>
          <img src="../assets/img/index/ia_100000070.jpg" alt="" />
          <span>简约不简单 厚底新灵感</span>
        </div>
        <div>
          <img src="../assets/img/index/ia_100000071.jpg" alt="" />
          <span>意大利设计系列</span>
        </div>
      </div>
    </div>
    <!-- 街头先型2 -->
    <div class="content-sift">
      <div class="sift-title">
        <img src="../assets/img/index/ia_100000072.png" alt="" />
        <span>至酷精选 玩转潮流</span>
      </div>
      <div class="sift-img">
        <div>
          <img src="../assets/img/index/ia_100000073.jpg" alt="" />
          <span>皮革加持 质感进阶</span>
        </div>
        <div>
          <img src="../assets/img/index/ia_100000074.jpg" alt="" />
          <span>多来点，再多来点颜色</span>
        </div>
        <div>
          <img src="../assets/img/index/ia_100000075.jpg" alt="" />
          <span>环保再生系列</span>
        </div>
      </div>
    </div>
    <!-- 尾部导航 -->
    <footerbar></footerbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "@/components/NavBar.vue";
import footerbar from "@/components/FooterBar.vue";
import { lunbotu, goodslist } from "@/api";
// console.log(goodslist);
// console.log(lunbotu);
export default {
  components: {
    navbar,
    footerbar,
  },
  data() {
    return {
      lunbotulist: [],
      tabId: "1", // 判断热品是否出现
      boyList: [], //男生列表
      girlList: [], //女生列表
      clothesList: [], //衣服列表
      shoeList: [], //帽子列表
      newList: [], //新品推荐
      swiperlist: {
        loop: true,
        autoplay: {
          // 延迟
          delay: 2000,
          disableOnInteractio: false,
        },
      },
      swiperOption: {
        loop: true,
        effect: "flip",
        grabCursor: true,
        autoplay: {
          // 延迟
          delay: 3000,
          disableOnInteractio: false,
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
      },
    };
  },
  async created() {
    //轮播图
    let res = await lunbotu({ site_id: 1, project_id: 13 });
    console.log(res);
    this.lunbotulist = res.data.result.rows.map((ele) => {
      return { img: ele.s_photos[0].path };
    });
    // goods(271).then(res=>this.boyItem = res) //热门男生单品
    this.items(192).then((res) => (this.boyList = res)); //热门男生列表
    this.girlitems(193).then((res) => (this.girlList = res)); //热门女生列表
    this.clothesitems(194).then((res) => (this.clothesList = res)); //热门女生列表
    this.choeitems(195).then((res) => (this.shoeList = res)); //帽子列表
    this.newitems(196).then((res) => (this.shoeList = res)); //新品推荐
  },
  methods: {
    todetail(id){
      // this.$router.push("/detail?id=" + id)
      this.$router.push({
        path:'/detail',
        query:{
          id:id
        }
      })
    },
    //鼠标移入出现热品
    change(e) {
      this.tabId = e.target.dataset.id;
    },
    //男生列表
    async items(id) {
      let res = await goodslist({ project_id: 13, classify_id: id });
      console.log(res);
      this.boyList = res.data.result.rows.map((ele) => {
        return {
          img: ele.s_goods_photos[0].path,
          name: ele.name,
          price: ele.price,
          id:ele.id
        };
      });
      res = res.reverse();
      return res;
    },
    //女生列表
    async girlitems(id) {
      let res = await goodslist({ project_id: 13, classify_id: id });
      // console.log(res);
      this.girlList = res.data.result.rows.map((ele) => {
        return {
          img: ele.s_goods_photos[0].path,
          name: ele.name,
          price: ele.price,
        };
      });
      res = res.reverse();
      return res;
    },
    //衣服列表
    async clothesitems(id) {
      let res = await goodslist({ project_id: 13, classify_id: id });
      // console.log(res);
      this.clothesList = res.data.result.rows.map((ele) => {
        return {
          img: ele.s_goods_photos[0].path,
          name: ele.name,
          price: ele.price,
        };
      });
      res = res.reverse();
      return res;
    },
    //帽子列表
    async choeitems(id) {
      let res = await goodslist({ project_id: 13, classify_id: id });
      // console.log(res);
      this.shoeList = res.data.result.rows.map((ele) => {
        return {
          img: ele.s_goods_photos[0].path,
          name: ele.name,
          price: ele.price,
        };
      });
      res = res.reverse();
      return res;
    },
    //新品推荐
    async newitems(id) {
      let res = await goodslist({ project_id: 13, classify_id: id });
      // console.log(res);
      this.newList = res.data.result.rows.map((ele) => {
        return {
          img: ele.s_goods_photos[0].path,
          name: ele.name,
          price: ele.price,
        };
      });
      res = res.reverse();
      return res;
    },
  },
};
</script>
<style lang="scss">
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: #000 !important;
}
</style>
<style lang="scss">
.home {
  .lunbotu {
    margin: 0;
    padding: 0;
  }
  .content {
    position: relative;
    width: 100%;
    min-width: 1164px;
    /* 轮播图 */
    margin-top: 135px;
    .content-swiper {
      position: absolute;
      top: 5px;
      left: 50%;
      text-align: center;
      width: 1200px;
      height: 29px;
      transform: translateX(-50%);
      .swiper-slide {
        font-size: 12px;
      }
      .swiper-two {
        line-height: 29px;
      }
    }
    .lunbotu {
      .swiper-lunbotu {
        // position: absolute;
        top: 46px;
        // left: 0px;
        width: 100%;
        // margin-bottom: 100px;
        img {
          width: 100%;
          max-width: 100%;
          height: 100%;
        }
        .swiper-slide {
          background-position: 50%;
          background-size: cover;
          width: 100%;

          &.slide-1 {
            background-image: url("/images/example/5.jpg");
          }
          &.slide-2 {
            background-image: url("/images/example/6.jpg");
          }
          &.slide-3 {
            background-image: url("/images/example/7.jpg");
          }
          &.slide-4 {
            background-image: url("/images/example/8.jpg");
          }
          &.slide-5 {
            background-image: url("/images/example/9.jpg");
          }
        }
      }
      /* 分页器颜色 */
      .swiper-button-next,
      .swiper-button-prev {
        background-color: #000;
        opacity: 0.8;
        width: 40px;
        height: 100px;
      }
      .swiper-button-next {
        .right {
          right: 0px;
          background: url("../assets/img/index/ia_100000090.png");
          background-position: 94px -88px;
          height: 40px;
          width: 20px;
        }
      }
      .swiper-button-prev {
        .left {
          left: 0px;
          background: url("../assets/img/index/ia_100000090.png");
          background-position: 96px -44px;
          height: 40px;
          width: 20px;
        }
      }
      .swiper-button-next {
        right: 0px;
        background-color: #000;
        &::after {
          content: "";
        }
      }
      .swiper-button-prev {
        left: 0px;
        &::after {
          content: "";
        }
      }
    }
  }
  .content-title {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: -112px;
    span {
      flex: none;
      margin: 0 10px;
      color: #999;
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
      border-top: 1px solid transparent;
      padding-top: 3px;
      transition-duration: 0.4s;
      font-family: "楷体";
    }
    span:hover {
      border-top: 1px solid;
      color: black;
      transition-duration: 0.4s;
    }
  }
  .content-hot,
  .content-new {
    width: 100%;
    margin-top: 100px;
    h2 {
      margin: 0 auto 30px;
      font-size: 30px;
      font-weight: inherit;
      width: 1000px;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        padding: 0 30px;
        cursor: pointer;
      }
      &::after,
      &::before {
        content: "";
        width: 380px;
        border-top: 1px solid #999;
        display: inline-block;
      }
    }
    .content-proams {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      width: 1000px;
      margin: 0 auto;
      border-bottom: 1px solid #999;
      .content-item {
        .item-title {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          position: relative;
          span {
            font-size: 24px;
            color: #333;
            border-bottom: 2px solid transparent;
          }
          img {
            width: 200px;
            height: 200px;
            margin: 25px 0;
          }
          b {
            background: url("../assets/img/index/ia_100000091.png");
            width: 39px;
            height: 21px;
            position: absolute;
            left: 80px;
            top: 276px;
          }
        }
        &:hover {
          span {
            border-bottom: 2px solid #333;
          }
        }
      }
    }
    .item-sex {
      width: 100%;
      // min-width: 1000px;
      position: relative;
      // &::before{
      //     content: '';
      //     border-top: 1px dashed #999;
      //     display: inline-block;
      //     position: absolute;
      //     width: 1000px;
      //     transform: translateY(-50%);
      //     top: 50%;
      //     left: 50%;
      //     transform: translate(-50%);
      // }
      ul {
        display: flex;
        width: 1100px;
        margin: 0 auto;
        flex-wrap: wrap;
        li {
          width: 24%;
          height: 300px;
          margin: 30px 0;
          a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            color: black;
            height: 100%;
            text-decoration: none;
            cursor: pointer;
            img {
              width: 165px;
              height: 165px;
              margin-bottom: 15px;
            }
            span {
              height: 40px;
              font-size: 13px;
              text-align: center;
            }
            b {
              font-size: 14px;
              font-weight: initial;
              font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
                sans-serif;
            }
          }
        }
        li:hover {
          border: 1px solid #999;
        }
      }
    }
  }
  .content-new {
    .item-sex {
      &::before {
        content: "";
        border-top: 1px dashed #999;
        display: inline-block;
        position: absolute;
        width: 1000px;
        transform: translateY(-50%);
        top: 50%;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
  .content-street,
  .content-sift {
    margin: 0 auto;
    width: 999px;
    .street-title,
    .sift-title {
      height: 40px;
      display: flex;
      align-items: center;
      background: rgb(70, 70, 70);
      margin-bottom: 20px;
      img {
        vertical-align: middle;
        width: 21px;
        height: 19px;
        margin: 0 10px 0 25px;
      }
      span {
        vertical-align: middle;
        font-size: 16px;
        color: white;
      }
    }
    .street-img,
    .sift-img {
      display: flex;
      justify-content: space-between;
      img {
        width: 488px;
        height: 366px;
        cursor: pointer;
      }
      img:hover {
        opacity: 0.8;
      }
      span {
        font-size: 24px;
        color: #000;
        margin-top: 20px !important;

        display: inline-block;
      }
    }
  }
  .content-sift {
    margin-top: 25px;
    .sift-img {
      div {
        width: 320px;
        img {
          width: 320px;
          height: 240px;
        }
      }
    }
  }
}
</style>
