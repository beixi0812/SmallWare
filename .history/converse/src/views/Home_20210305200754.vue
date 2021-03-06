<template>
  <div class="content">
    <!-- 广告条轮播 -->
    <div class="content-swiper">
      <swiper class="swiper">
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
        <swiper-slide>
            <img src="../assets/img/index/swiper01.jpg" alt=""/>
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/img/index/swiper04.jpg" alt=""/>
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/img/index/swiper02.jpg" alt=""/>
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/img/index/swiper03.gif" alt=""/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev">
           <div class="left"><a href=""></a></div>
        </div>
        <div class="swiper-button-next" slot="button-next">
             <div class="right"><a href=""></a></div>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        effect: 'flip',
        grabCursor: true,
        // pagination: {
        //     el: '.swiper-pagination'
        //   },
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
  components: {},
};
</script>

<style lang="scss" scoped>
.lunbotu {
  margin: 0;
  padding: 0;
}
.content {
  position: relative;
  width: 100%;
    // min-width: 1164px;
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
      position: absolute;
      top: 46px;
      left: 0px;
      width: 100%;
      margin-bottom: 100px;
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
        background-image:url('/images/example/5.jpg');
      }
      &.slide-2 {
        background-image:url('/images/example/6.jpg');
      }
      &.slide-3 {
        background-image:url('/images/example/7.jpg');
      }
      &.slide-4 {
        background-image:url('/images/example/8.jpg');
      }
      &.slide-5 {
        background-image:url('/images/example/9.jpg');
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
        .right{
            right: 0px;
            background: url('../assets/img/index/ia_100000090.png');
            background-position: 94px -88px;
            height: 40px;
            width: 20px;
        }
}
    .swiper-button-prev{
        .left{
            left: 0px;
            background: url('../assets/img/index/ia_100000090.png');
            background-position: 96px -44px;
            height: 40px;
            width: 20px;
        }
    }
        .swiper-button-next{
            right: 0px;
            background-color: #000;
             &::after{
            content:''
      }
        }
     .swiper-button-prev {
      left: 0px;
      &::after{
          content:''
      }
    }
    swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: left top;
    background: red;
    }
  }

</style>