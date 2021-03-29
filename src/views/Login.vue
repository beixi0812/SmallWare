<template>
<div class="super">
  <div class="login">
    <h1>Welcome to Converse</h1>
    <!-- 手机号码:<input type="text" v-model="formdata.phone">
        密码:<input type="password" v-model="formdata.password">
        <button @click="login">登录</button> -->
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号码" prop="phone">
        <el-input
          type="text"
          v-model="ruleForm.phone"
          placeholder="请输入手机"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          placeholder="请输入密码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
  
</template>

<script>
import { login as apilogin } from "@/api";
import { SET_LOCAL_ITEM } from "@/utils/utils";
export default {
  data() {
    function checkPhone(rule, value, callback) {
      console.log(rule, value, callback);
      let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (reg.test(value)) {
        callback();
      } else {
        callback(new Error("手机输入有误"));
      }
    }
    return {
      // formdata: {
      //   phone: "13226803206",
      //   password: "123",
      // },
      // 表单数据源
      ruleForm: {
        phone: "13924779260",
        password: "liuzejian1998",
      },
      // 表单验证规则
      rules: {
        phone: [
          {
            required: true,
            validator: checkPhone,
            message: "请输入手机号码",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    // login() {
    //   apilogin(this.formdata).then((res) => {
    //     let token = res.data.result.token;
    //     if (token) {
    //       SET_LOCAL_ITEM("token", token);
    //     }
    //     setTimeout(() => {
    //       this.$router.replace("/");
    //     }, 2000);
    //   });
    // },
    submitForm(formname) {
      console.log(formname);
      this.$refs[formname].validate((valid) => {
        console.log("验证结果", valid);
        if (valid) {
          apilogin(this.ruleForm).then((res) => {
            let token = res.data.result.token;
            SET_LOCAL_ITEM("token", token);
            this.$message({
              type: "success",
              message: "登录成功",
              duration: 2000,
            });
            setTimeout(() => {
              this.$router.replace("/");
            }, 2000);
          });
        } else {
          this.$message.error("您输入的账号或密码有误");
        }
      });
    },
    resetForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" >
.super{
  background: url("../assets/img/Login.jpg") no-repeat;
  width: 1365px;
  height: 623px;
  position: relative;
  .login {
    width: 400px;
    height: 400px;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    box-sizing: border-box;
    h1 {
      font-size: 36px;
      color: #423f3f;
      position: absolute;
      top: -86px;
      left: 4px;
      
    }
  }
}
</style>