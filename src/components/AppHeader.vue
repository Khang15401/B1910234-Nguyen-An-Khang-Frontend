<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'contactbook' }" class="nav-link">
          Danh bạ
          <i class="fas fa-address-book"></i>
        </router-link>
      </li>

    </div>

    <div class="l-flex">
      <div v-if="userName === null">
        <router-link :to="{ name: 'contact.login' }" class="nav-user ">
          Đăng Nhập
          <i class="fa-regular fa-user"></i>
        </router-link>
        <router-link :to="{ name: 'contact.register' }" >
          Đăng Ký
          <i class="fa-solid fa-registered"></i>
        </router-link>
      </div>
      <div v-else class="text-white d-flex">
        <div class="p-2">
          Xin Chào {{ login }}
        </div>
        <button class="btn btn-outline-light" @click="logout()">Đăng xuất</button>
      </div>
    </div>
  </nav>
</template>
<script>

export default {
  data() {
    return {
      id: localStorage.getItem('_id'),
      userName: localStorage.getItem('userName')
    };
  },
  methods: {
    logout(){
      window.localStorage.removeItem("userName")
      window.localStorage.removeItem("id")
    },
  },


  computed: {
    login() {
      return window.localStorage.getItem("userName")
    }
  }
};

</script>