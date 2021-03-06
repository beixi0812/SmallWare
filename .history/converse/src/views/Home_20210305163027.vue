<template>
    <div class="content">
    <!-- 广告条轮播 -->
        <div class="content-swiper">
            <swiper class="swiper">
                <swiper-slide>尊敬的客户您好，我们店铺不会泄露您的任何消费信息，敬请放心。另外，我们也不会主动要求获取、收集、使用任何消费者的金融消费类信息（如：信用卡信息）。如果接到索取以上信息的电话，是属于诈骗电话，请勿相信，以防个人的钱财损失。如您对订单有疑问，请联系在线客服。</swiper-slide>
                <swiper-slide>因疫情影响，新疆、黑龙江、辽宁、云南、甘肃、河北、北京、山西、西藏、内蒙古、吉林、陕西、河南等部分地区暂停揽收或配送有所延迟。联系客服了解详情，给您带来不便敬请谅解。</swiper-slide>
            </swiper>
        </div>

    <!-- 轮播图  -->
        <div class="lunbotu">
        <swiper class="swiper-lunbotu" :options="swiperOption">
            <swiper-slide><img src="../assets/img/index/swiper01.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/index/swiper02.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/index/swiper03.gif" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        </div>
    </div>
</template>

<script>
    
export default {
    
    components: {
        
    },
    
};
</script>

<style lang="scss" scoped>
.content{
    .content-swiper{
            position: fixed;
            top: 138px;
            left: 50%;
            text-align: center;
            width: 1200px;
            height: 29px;
            transform: translateX(-50%);
    .swiper-slide{
            font-size: 12px;
    }
    }
    .lunbotu{
        position: fixed;
        top: 205px;
        left: 0px;
        .swiper-lunbotu{
            width: 1349px;
            height: 300px;
        }
    }
}


    
</style>