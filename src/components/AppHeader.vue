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
            <li>
                <router-link :to="{ name: 'contact.login' }" class="nav-link ">
                    Đăng Nhập
                    <i class="fa-regular fa-user"></i>
                </router-link>
            </li>
        </div>
    </nav>
</template>