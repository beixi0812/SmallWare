<template>
<div>
   <el-dialog :title="title" :visible.sync="showDialog" @close="close">
    <el-form :inline="true">
      <el-form-item label="收货人姓名">
        <el-input v-model="formData.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input
          v-model="formData.phone"
          placeholder="请输入手机号码"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮政编码">
        <el-input
          v-model="formData.post_code"
          placeholder="请输入邮编"
        ></el-input>
      </el-form-item>
      <el-form-item label="区域选择">
        <el-cascader
          ref="cascader"
          v-model="formData.area"
          :options="address_data"
          :props="{ expandTrigger: 'hover' }"
          @change="cascaderChange"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入详细地址"
          v-model="formData.desc"
        >
        </el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <!-- todo: 点击取消,也要清空表单内容-->
      <el-button @click="showDialog = false">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </div>
  </el-dialog>
</div>
 
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    //接受外部表单数据, 需要克隆一份作为 当前组件的变量,避免传入
    // 对象引用导致直接修改了 外部的数据
    form_Data: {
      type: Object,
      default: () => {
        return {};
      },
    },
    address_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      showDialog: false,
      formData: {},
    };
  },
  watch:{
    form_Data:{
      handler(){
        this.formData = this._.cloneDeep(this.form_Data);
      },
      deep:true,
      immediate:true
    }
  },
  created() {
    //注意,vue 的父子(props)通讯中,应该尽量以单向数据流传递,
    // 也就是 父组件数据影响子组件,子组件不应该直接修改父组件数据;
    // 所以,再这里 再组件 created 时,将 props 数据克隆一份作为 当前
    // 组件的数据,修改后 再 emit 给父组件使用;
    // 克隆 props 数据
    this.formData = this._.cloneDeep(this.form_Data);
  },
  methods: {
    close(){
      this.showDialog = false;
    //   将数据 emit 到父组件
    this.$emit("confirm",this.formData)
    },
      show(){
          this.showDialog = true;
      },
    confirm() {
      this.showDialog = false;
    },
    cascaderChange() {
      // 获取级联,并将中文设置到 area-name 内
        let area_name = this.$refs.cascader
          .getCheckedNodes()[0]
          .pathLabels.join("");
        this.formData.area_name = area_name;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>