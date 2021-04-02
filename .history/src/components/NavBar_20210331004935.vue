<template>
  <div class="nav">
    <!-- 导航栏头部 -->
    <div class="nav-heade">
      <!-- 导航logo -->
      <div class="logo" @click="$router.push('/')"></div>
      <!-- 登录/注册 -->
      <div class="nav-count">
        <!-- <div class="nav-user">
          <button>登录</button>
          <span> / </span>
          <button>注册</button>
          <div class="res"><a title="登录/注册"></a></div>
        </div> -->

        <div class="nav-shopcar">
          <button @click="$router.push('/cart')">购物车</button>
          <div class="solo"><a title="登录/注册"></a></div>
        </div>
        <div class="search">
          <a alt="搜索"></a>
        </div>
        <div class="help">
          <a alt="帮助"></a>
        </div>
      </div>
    </div>
    <!-- 导航栏底部 -->
    <div class="nav-footer">
      <div class="nav-footer-conter">
        <!-- 男生 -->
        <div class="conter-boy">
          <div class="medole">
            <span>男生</span>
            <b></b>
          </div>
          <!-- 滑动列表 -->
          <div class="conter-childern">
            <ul>
              <li v-for="(item, index) in boylist" :key="index">
                <a href="">
                  <!-- <img src="../assets/img/index/ia_100000041.jpg" alt=""> -->
                  <img v-lazy="img" :src="item.img" alt="" />
                </a>
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 女生 -->
        <div class="conter-boy">
          <div class="medole">
            <span>女生</span>
            <b></b>
          </div>
          <!-- 滑动列表 -->
          <div class="conter-childern">
            <ul>
              <li v-for="(item, index) in girllist" :key="index">
                <a href=""><img :src="item.img" alt="" /></a>
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- 儿童 -->
        <div class="conter-boy">
          <div class="medole">
            <span>儿童</span>
            <b></b>
          </div>
          <!-- 滑动列表 -->
          <div class="conter-childern">
            <ul>
              <li>
                <a href=""
                  ><img src="../assets/img/index/ia_100000027.png" alt=""
                /></a>
                <p>婴童(1-4岁)</p>
              </li>
              <li>
                <a href=""
                  ><img src="../assets/img/index/ia_100000028.jpg" alt=""
                /></a>
                <p>儿童(4-8岁)</p>
              </li>
              <li>
                <a href=""
                  ><img src="../assets/img/index/ia_100000029.jpg" alt=""
                /></a>
                <p>孩童(4-12)</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- 折扣优惠 -->
        <div class="conter-boy">
          <div class="medole">
            <span>折扣优惠</span>
            <b></b>
          </div>
        </div>

        <!-- 热卖推荐 -->
        <div class="conter-boy">
          <div class="medole">
            <span>热卖推荐</span>
            <b></b>
          </div>
        </div>

        <!-- 滑板指南 -->
        <div class="conter-boy">
          <div class="medole">
            <span>滑板指南</span>
            <b></b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { goodslist } from "@/api";
// console.log(goodslist);
export default {
  data() {
    return {
      boylist: [],
      girllist: [],
    };
  },
  created() {
    //男生
    this.resList(161).then((res) => (this.boylist = res));
    //女生
    this.noodList(184).then((res) => (this.girllist = res));
  },
  methods: {
    //男生列表
    async resList(id) {
      let res = await goodslist({
        project_id: 13,
        classify_id: id,
        page: 1,
        limit: 12,
      });
      // console.log(res);
      this.boylist = res.data.result.rows.map((ele) => {
        return {
          img: ele.s_goods_photos[0].path,
          name: ele.name,
          id: ele.id,
        };
      });
      res = res.reverse();
      return res;
    },

    //女生列表
    async noodList(id) {
      let res = await goodslist({
        project_id: 13,
        classify_id: id,
        page: 1,
        limit: 12,
      });
      console.log(res);
      this.girllist = res.data.result.rows.map((ele) => {
        return {
          img: ele.s_goods_photos[0].path,
          name: ele.name,
        };
      });
      res = res.reverse();
      return res;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
$bgColor: rgb(5, 3, 3);
$fontSize: 50px;
.nav {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 101;
  width: 100%;
  background-color: $bgColor;
  // 导航栏头部
  .nav-heade {
    height: 80px;
    background-color: $bgColor;
    width: 1196px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      background: url("../assets/imagse/Logo.png") 0 0 no-repeat;
      width: 161px;
      height: 18.59px;
      cursor: pointer;
    }
    .nav-count {
      color: white;
      display: flex;
      justify-content: space-evenly;
      align-content: center;
      .nav-user {
        display: flex;
        justify-content: center;
        align-items: center;
        .res {
          background: url("../assets/img/index/ia_100000088.png");
          background-position: -96px -85px;
          height: 31px;
          width: 30px;
          vertical-align: middle;
          margin: 0 20px;
          cursor: pointer;
        }
      }
      button {
        border: 0px;
        background: none;
        color: white;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
      }
      .nav-shopcar {
        display: flex;
        justify-content: center;
        align-items: center;
        .solo {
          background: url("../assets/img/index/ia_100000088.png");
          background-position: -64px -53px;
          height: 31px;
          width: 30px;
          vertical-align: middle;
          margin: 0 20px;
          cursor: pointer;
        }
      }
      .search {
        background: url("../assets/img/index/ia_100000088.png");
        background-position: -137px 89px;
        height: 31px;
        width: 30px;
        vertical-align: middle;
        margin: 0 20px;
        cursor: pointer;
      }
      .help {
        background: url("../assets/img/index/ia_100000088.png");
        background-position: -169px 90px;
        height: 31px;
        width: 30px;
        vertical-align: middle;
        margin: 0 20px;
        cursor: pointer;
      }
    }
  }
  // 导航栏底部
  .nav-footer {
    background: #464646;
    height: 50px;
    position: relative;
    .nav-footer-conter {
      margin: 0 auto;
      width: 1164px;
      background: #464646;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .conter-boy {
        .medole {
          height: 50px;
          width: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          span {
            font-size: 18px;
            color: white;
            // margin-bottom: 2px;
          }
          &::after {
            margin-top: 2px;
            content: "";
            display: inline-block;
            border: 6px solid transparent;
            border-left-color: white;
            transform: rotate(90deg);
          }
        }
        // 滑动列表
        .conter-childern {
          overflow: hidden;
          height: 0px;
          opacity: 0;
          width: 100%;
          min-width: 1164px;
          position: absolute;
          top: 50px;
          left: 0;
          background: white;
          transition: 1s;
          &::after {
            content: "";
            width: 100%;
            display: block;
            border-bottom: 1px solid gray;
            position: absolute;
            top: 55%;
            transform: translateY(-50%);
          }
          ul {
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            li {
              width: 200px;
              height: 140px;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              display: flex;
              flex-direction: column;
              overflow: hidden;
              p {
                // position: absolute;
                // top: -16px;
                // line-height: 260px;
              }
              h4 {
                position: absolute;
                top: 105px;
                line-height: 260px;
              }
              img {
                width: 120px;
                height: 0px;
                opacity: 0;
              }
            }
          }
        }
      }
      .conter-boy:hover {
        .conter-childern {
          opacity: 1;
          overflow: inherit;
          display: block;
          transition: 1s;
          height: 290px;
          img {
            opacity: 1;
            height: 120px;
            transition: 1s;
          }
          ul {
            p {
              font-size: 16px;
            }
          }
        }
      }
      ul {
        li {
          h4:hover {
            text-decoration: underline;
            color: #c0c0c0;
          }
        }
      }
    }
  }
}
</style>