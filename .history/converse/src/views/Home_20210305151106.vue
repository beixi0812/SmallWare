<template>
    <div class="content">
    <!-- 轮播图 -->
        <div class="content-swiper">
            <swiper class="swiper">
                <swiper-slide>Slide 1</swiper-slide>
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
    position: relative;
    .content-swiper{
    position: absolute;
    top:138px;
    left:0px;
    text-align: center;
    .swiper{
        width: 600px;
    }
    }
}

    
</style>