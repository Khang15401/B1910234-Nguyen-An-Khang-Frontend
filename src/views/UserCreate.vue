
<template>
  <div class="page">
    <h4>Đăng Ký</h4>
    <RegisterForm
      :user="user"
      @submit:user="Register"
    />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

import UserService from "@/services/user.service.js";
export default {
  components: {
    RegisterForm,
  },

  data() {
    return {
      user: {
      userName: "",
      email: "",
      password: "",
      phone:"",
      },
      message: "",
    };
  },
  methods: {
    async Register(data) {
      try {
        const res = await UserService.register(data);
        console.log(res);
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
