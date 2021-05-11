<template>
  <div class="order-content">
    <navbar></navbar>
    <div class="order-children">
      <div class="children-title">
        <ul>
          <li>我的购物车</li>
          <li>填写订单信息</li>
          <li>成功提交订单</li>
        </ul>
      </div>
      <div class="order-addres">
        <h2>配送地址</h2>
        <ul>
          <li>收件人</li>
          <li>联系方式</li>
          <li>详细地址</li>
          <li>邮政编码</li>
          <li>编辑</li>
          <li>删除</li>
        </ul>
        <div class="add-list">
          <div
            class="add-info"
            v-for="(el, idx) in allAddress"
            :key="idx"
            :class="{ selected: idx == selected_idx }"
            @click="selecteArr(idx)"
          >
            <div>
              <p>{{ el.name }}</p>
            </div>
            <div>{{ el.phone }}</div>
            <div>{{ el.area_name + el.desc }}</div>
            <div>{{ el.post_code || "暂未填写" }}</div>
            <div>
              <i
                class="el-icon-edit-outline"
                @click.self="editAddress(idx)"
              ></i>
            </div>
            <div><i class="el-icon-delete" @click="delAddress(el.id)"></i></div>
          </div>

          <div class="add-site" @click="ShowAddDialog('addDialog')">
            <i class="el-icon-circle-plus-outline"></i>
            <p>新增地址</p>
          </div>
        </div>
      </div>
      <div class="shopping-title">
        <h2>商品信息</h2>
        <ul>
          <li>产品名称</li>
          <li>产品型号</li>
          <li>尺码</li>
          <li>原价</li>
          <li>折扣价</li>
          <li>数量</li>
          <li>小计</li>
        </ul>
      </div>
      <div class="selectedList">
        <div class="shopping-item" v-for="(el, idx) in selectedList" :key="idx">
          <!-- {{el}} -->
          <div class="photos"><img :src="el.thumb" alt="" /></div>
          <div>{{ el.name }}</div>
          <div>175620142</div>
          <div>41</div>
          <div>¥{{ el.price }}</div>
          <div>-</div>
          <div>{{ el.num }}</div>
          <div>¥{{ el.num * el.price }}</div>
        </div>
      </div>
      <div class="message-settle">
        <div class="message-left">
          <div>
            <p>需要帮助吗?</p>
            <ul>
              <li>如何确保订单安全?</li>
              <li>我可以使用什么付款方式?</li>
              <li>如何进行退换货?</li>
              <li>更多帮助</li>
            </ul>
          </div>
          <a href="/#/">继续购物</a>
        </div>
        <div class="message-right">
          <div>
            <p>店铺优惠:</p>
            <b>￥0.00</b>
          </div>
          <div>
            <p>运费:</p>
            <b>￥0.00</b>
          </div>
          <div>
            <p>订单总计:</p>
            <b>￥：4882</b>
          </div>
          <button @click="orderSubmit">去结算</button>
        </div>
      </div>
    </div>
    <!-- visible：表示是否打开弹窗 -->
    <!-- 修改地址弹窗 -->
    <!-- <el-dialog title="编辑收货地址" :visible.sync="isShowEditDialog">
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowEditDialog = false">取 消</el-button>
        <el-button type="primary" @click="ShowAddDialog"
          >确 定</el-button
        >
      </div>
    </el-dialog> -->
    <addDialog
      class="Tist"
      ref="editDialog"
      :title="'编辑收货信息'"
      :form_Data="editAddressData"
      :address_data="address_data"
      @confirm="editEvent"
    ></addDialog>
    <!-- 新增地址弹窗 -->
    <!-- confirm事件参数为组件内的表单值 -->
    <addDialog
      class="Tist"
      ref="addDialog"
      :title="'新增收货信息'"
      :form_Data="newAddData"
      :address_data="address_data"
      @confirm="addNewAddress"
    ></addDialog>
    <footerbar></footerbar>
  </div>
</template>

<script>
import navbar from "@/components/NavBar.vue";
import {
  getCity,
  addAddress,
  getAddress,
  delAddress,
  updataAddress,
  createOrder,
} from "@/api";
import addDialog from "@/components/orderinfo/addDialog.vue";
import { mapState } from "vuex";
import footerbar from "@/components/FooterBar.vue";
export default {
  components: {
    navbar,
    addDialog,
    footerbar,
  },
  data() {
    return {
      allAddress: [], //收货地址列表
      isShowEditDialog: false, //修改地址的弹窗是否打开
      isShowAddDialog: false, //新增地址的弹窗是否打开
      newAddData: {
        name: "", //
        phone: "",
        area: "", //地址代码
        area_name: "", //地址
        desc: "", //详细信息
        post_code: "", //邮编
      },
      //地区原数据
      address_data: [],
      selected_idx: 0,
      editAddressData: {}, //需要编辑的对象
      editAddressId: 0, //正再被编辑的地址id
    };
  },

  created() {
    getCity().then((res) => {
      this.address_data = res.data.result;
    });
    this.getAddList();
  },
  methods: {
    //跳转支付页面
    orderSubmit() {
      this.$router.push("/payment");
    },
    async placeOrder() {
      // console.log(createOrder);
      let goods_info = this.selectedList.map((el) => {
        return {
          id: el.goods_id,
          num: el.num,
        };
      });
      let shoppingCartIds = this.selectedList.map((el) => el.cart_id);
      console.log(goods_info, shoppingCartIds, this.currentAddressId);
      let paramsData = {
        goods_info,
        shoppingCartIds,
        addr_id: this.currentAddressId,
      };
      createOrder(paramsData).then((res) => {
        this.$message({
          message: "下单成功",
          type: "success",
        });
        //跳转至其他地方
        console.log(res, "生成订单");
      });
    },
    selecteArr(idx) {
      // 通过下标切换地址栏
      this.selected_idx = idx;
    },
    getAddList() {
      //获取个人所有收货地址
      getAddress().then((res) => {
        console.log(res.data.result);
        this.allAddress = res.data.result;
      });
    },
    // cascaderChange(){
    //     let area_name = this.$refs.cascader.getCheckedNodes()[0].pathLabels.join('');
    //     this.newAddData.area_name = area_name;
    // },
    //isShow AddDialog = false
    addNewAddress(formData) {
      // 克隆数据,避免影响页面渲染
      let data = JSON.parse(JSON.stringify(formData));
      // 处理 area 成接口所需数据格式
      data.area = data.area.join(",");
      addAddress(data).then(() => {
        this.$message({
          message: "新增地址成功",
          type: "success",
        });
        this.isShowAddDialog = false;
        // 新增后,重新请求更新页面
        this.getAddList();
      });
    },
    ShowAddDialog(name) {
      //调用组件内的show方法
      this.$refs[name].show();
    },
    async delAddress(id) {
      let res = await delAddress(id);
      console.log(res, "成功删除");
      this.getAddList();
    },
    editAddress(idx) {
      this.ShowAddDialog("editDialog");
      let { area, area_name, desc, name, phone, post_code } = this.allAddress[
        idx
      ];
      //   // 用加号强制转换为数字类型
      let data = {
        area: area.split(",").map((el) => +el),
        area_name,
        desc,
        name,
        phone,
        post_code,
      };
      // 设置数据给 dialog 弹窗使用
      this.editAddressData = data;
      // 设置正再编辑的地址 id,用于后续的更新操作
      this.editAddressId = this.allAddress[idx].id;
    },
    //更新收货地址
    async editEvent(data) {
      // console.log(data);
      // 克隆数据,避免影响页面渲染
      let formData = JSON.parse(JSON.stringify(data));
      // 处理 area 成接口所需数据格式
      formData.area = formData.area.join(",");
      let id = this.editAddressId;
      await updataAddress(id, formData);
      this.getAddList();
    },
  },
  // 使用计算属性根据 selected_idx 筛选选中地址的数据
  computed: {
    ...mapState({
      selectedList(state) {
        return state.cartList.filter((el) => el.checked);
      },
    }),
    total() {
      return this.selectedList.reduce((el, sum) => {
        return (sum += el.num * el.price);
      }, 0);
    },
    //用户选中的地址
    currentAddressId() {
      return this.allAddress[this.selected_idx].id;
    },
  },
};
</script>

<style lang="scss" scoped>
.order-content {
  margin-top: 170px;
  width: 100%;
  min-width: 1164px;
  background: white;
  .order-children {
    width: 1300px;
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
        li:not(:last-child)::after {
          background: #333;
        }
        li:not(:last-child)::before {
          content: "";
          width: 87%;
          height: 1px;
          display: flex;
          position: absolute;
          top: 42px;
          left: 57%;
          background: #999;
          z-index: 1;
        }
      }
    }
    .order-addres {
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid black;
        height: 50px;
        li {
          display: inline-block;
        }
      }
    }
    .add-list {
      .add-info,
      .add-site {
        width: 100%;
        height: 90px;
        display: flex;
        border-bottom: 1px dashed #999;
        div:first-child {
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            width: 10%;
          }
          p {
            width: 90%;
          }
        }
        div {
          width: 100%;
          text-align: center;
          line-height: 90px;
        }
        i {
          transition: all 0.5s;
          font-size: 22px;
          margin: 0 10px;
          cursor: pointer;
        }
        i:hover {
          color: red;
        }
        .el-icon-edit-outline:hover {
          color: rgb(16, 91, 230) !important;
        }
      }
      .add-site {
        display: flex;
        font-size: 18px;
        align-items: center;
        justify-content: center;
        i {
          font-size: 20px;
        }
        p,
        i {
          vertical-align: middle;
          margin: 0 4px;
          cursor: pointer;
        }
      }
    }
    .shopping-title {
      box-sizing: border-box;
      ul {
        padding-left: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid black;
        height: 50px;
        li {
          width: 100px;
          display: inline-block;
          text-align: center;
        }
      }
    }
    .selectedList {
      // padding-left: 100px;
      .shopping-item {
        border-bottom: 1px dashed #999;
        .photos {
          img {
            width: 80px;
            height: 80px;
          }
        }
        display: flex;
        justify-content: space-around;
        align-items: center;

        div {
          width: 150px;
          text-align: center;
        }
        .photos {
          width: 82px;
          height: 82px;
          img {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
    .message-settle {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      .message-left {
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
          width: 300px;
          line-height: 50px;
          font-size: 18px;
          color: #333;
          text-align: center;
          border: 1px solid #999;
          cursor: pointer;
        }
      }
      .message-right {
        div {
          padding-top: 5px;
          display: flex;
          justify-content: space-between;
          p {
            font-size: 18px;
          }
          b {
            font-size: 19px;
            margin-top: 18px;
          }
        }
        div:nth-child(2) {
          b {
            color: #b83530;
          }
        }
        div:nth-child(4) {
          padding-top: 25px;
          p,
          b {
            font-size: 24px;
          }
          b {
            color: #b83530;
          }
        }
      }
      button {
        width: 200px;
        height: 50px;
        color: white;
        background: #b63330;
        text-align: center;
        line-height: 50px;
        margin-left: 40px;
        margin-top: 30px;
      }
    }
  }
  .Tist {
    margin-top: 213px;
  }
}
</style>
