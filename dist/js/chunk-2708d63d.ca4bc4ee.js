(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2708d63d"],{ac54:function(t,e,a){t.exports=a.p+"img/size.28222ff4.png"},c84b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-countent"},[s("navbar"),s("div",{staticClass:"detail-children"},[t._m(0),s("div",{staticClass:"children-center"},[s("div",{staticClass:"center-title"},[s("h1",[t._v(t._s(t.imgDetail.name))]),s("p",[t._v("¥"+t._s(t.imgDetail.price)+".00")])]),s("div",{staticClass:"centre-img"},[s("img",{attrs:{src:t.large[t.tabId]}})]),s("div",{staticClass:"centre-thumbnail"},t._l(t.thumbnail,(function(e,a){return s("img",{key:a,attrs:{src:e,alt:"","data-id":a},on:{click:function(e){return t.change(a)}}})})),0),s("ul",{domProps:{innerHTML:t._s(t.imgDetail.rich_text)}}),t._m(1)]),s("div",{staticClass:"children-right"},[s("div",{staticClass:"right-title"},[s("img",{attrs:{src:t.large[0],alt:""}}),t._m(2),s("span",{on:{mouseover:t.mouseOver,mouseleave:t.mouseLeave}},[s("b",[t._v("尺码对照表")])])]),s("div",{staticClass:"size",style:{display:t.active}},[s("img",{attrs:{src:a("ac54"),alt:"尺码表"}})]),s("div",{staticClass:"right-param"},[s("h3",[t._v("尺码换算器")]),s("div",{staticClass:"right-size"},[s("p",[t._v("请选择您的尺码")]),s("el-select",{attrs:{placeholder:"请选择尺码"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})),1)],1),s("div",{staticClass:"right-size"},[s("p",[t._v("数量")]),s("el-input-number",{attrs:{min:1,max:t.imgDetail.stock_num,label:"描述文字"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),s("div",{staticClass:"right-button"},[s("br"),s("a",{on:{click:t.addtocart}},[t._v("添加到购物车")])])])])]),s("footerbar")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"children-left"},[a("div",{staticClass:"left-share"},[a("span",[t._v("分享")])]),a("div",{staticClass:"left-collect"},[a("span",[t._v("加入收藏")])]),a("div",{staticClass:"left-comment"},[a("span",[t._v("评论此商品(999+)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"centre-state"},[a("h3",[t._v("价格说明（此说明仅当出现价格比较时有效）")]),a("p",[t._v(" 划线价格：划线的价格可能是商品的专柜吊牌价或正品零售价指导价或该商品的曾经展示过的销售价等，仅供您参考。 ")]),a("p",[t._v(" 未划线价格：未划线的价格是商品在官网上的销售标价，具体的成交价格可能因为会员使用优惠券发生变化，最终以订单结算页价格为准。 ")]),a("button",[t._v("Chuck 70")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("型号 : "),a("b",[t._v("162050C001")])])}],n=a("1da1"),l=(a("96cf"),a("d81d"),a("b0c0"),a("d000")),c=a("4093"),r=a("365c"),u={components:{navbar:l["a"],footerbar:c["a"]},data:function(){return{imgDetail:"",large:[],thumbnail:[],tabId:0,num:1,value:"",active:"",options:[{label:"35.5",disabled:!0},{label:"36.5"},{label:"37"},{label:"38"},{label:"39",disabled:!0},{label:"40"},{label:"41"},{label:"42"},{label:"43"},{label:"44"},{label:"45"},{label:"46",disabled:!0}]}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["i"])(t.$route.query.id).then((function(e){t.large=t.thumbnail=e.data.result.s_goods_photos.map((function(t){return t.path})),t.imgDetail={name:e.data.result.name,desc:e.data.result.desc,price:e.data.result.price,rich_text:e.data.result.rich_text,stock_num:e.data.result.stock_num}}));case 2:case"end":return e.stop()}}),e)})))()},methods:{change:function(t){this.tabId=t},mouseOver:function(){this.active="block"},mouseLeave:function(){this.active="none"},addtocart:function(){var t=this;console.log(r["b"]);var e=this.$route.query.id;Object(r["b"])({goods_id:e,num:this.num}).then((function(e){console.log("添加结果",e),t.$message({message:"成功添加购物车",type:"success",duration:600})}))}}},o=u,d=(a("ed23"),a("2877")),v=Object(d["a"])(o,s,i,!1,null,null,null);e["default"]=v.exports},d68a:function(t,e,a){},ed23:function(t,e,a){"use strict";a("d68a")}}]);
//# sourceMappingURL=chunk-2708d63d.ca4bc4ee.js.map