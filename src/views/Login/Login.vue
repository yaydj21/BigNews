<template>
  <div>
    <van-form @submit="login">
      <van-field
        v-model="form.username"
        type="tel"
        label="账号"
        placeholder="请输入账号"
        required
        :rules="rules.username"
      ></van-field>
      <van-field
        v-model="form.password"
        type="password"
        label="登录密码"
        placeholder="请输入登录密码"
        required
        :rules="rules.password"
      ></van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from "@/api/userAPI";
import { mapMutations } from 'vuex';
export default {
  name: "Login",
  data() {
    return {
      // 表单数据
      form: {
        username: "",
        password: "",
      },
      // 验证表单规则
      rules:{
        username:[{required:true,message:'请输入账号',trigger:'onBlur'}],
        password:[{required:true,message:'请输入密码',trigger:'onBlur'}]
      }
    };
  },
  methods: {
  ...mapMutations(['updateTokenInfo']),
  async login() {
    const {data : res} = await loginAPI( this.form);

    if(res.status === 0){
      // 通过vuex中的Mutations更新token信息
      this.updateTokenInfo(res.token);
      this.$router.push('/user');
    }
  }
  },
};
</script>

<style>
</style>