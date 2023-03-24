
<template>
  <div class="page">
    <h4>Đăng nhập</h4>
    <LoginForm
      :user="user"
      @submit:user="ktraLogin"
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
        userName:"",
        password:"",
      },
      message: "",
    };
  },
  methods: {
    async ktraLogin(data) {
      try {
        const res = await UserService.login(data);
        window.localStorage.setItem("_id", res._id);
        window.localStorage.setItem("userName", res.userName);
        if(res){
          this.$router.push({ name: "contactbook" });
        }

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
