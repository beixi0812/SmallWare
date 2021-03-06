<template>
    <div class="content">
    <!-- 轮播图 -->
        <div class="content-swiper">
            <swiper class="swiper">
                <swiper-slide>尊敬的客户您好，我们店铺不会泄露您的任何消费信息，敬请放心。另外，我们也不会主动要求获取、收集、使用任何消费者的金融消费类信息（如：信用卡信息）。如果接到索取以上信息的电话，是属于诈骗电话，请勿相信，以防个人的钱财损失。如您对订单有疑问，请联系在线客服。</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
export default {
    name: 'swiper-example-default',
    components: {
        Swiper,
        SwiperSlide
    }
};
</script>

<style lang="scss" scoped>
.content{
    
    .content-swiper{
        position: fixed;
    top:138px;
    left:0px;
    text-align: center;
    .swiper{
        
    }
    }
}

    
</style>