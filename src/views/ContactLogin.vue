
<template>
  <div class="page">
    <h4>Đăng nhập</h4>
    <LoginForm
      :user="user"
      @submit:loginUser="checkLogin"
    />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

import UserService from "@/services/user.service.js";
export default {
  components: {
    LoginForm,
  },

  data() {
    return {
      user: {
        email:"",
        password:"",
      },
      message: "",
    };
  },
  methods: {
    async checkLogin(data) {
      try {
        const res = await UserService.login(data);
        window.localStorage.setItem("key", res._id)

      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.message = "";
  },
};
</script>
