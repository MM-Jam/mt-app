<template>
  <div class="m-life-login">
    <h4>
      <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="login" />
    </h4>
    <div class="m-life-login-name">Hi!你好</div>
    <p>
      <router-link :to="{name:'register'}">
        <el-button round>注册</el-button>
      </router-link>
    </p>
    <p>
      <router-link :to="{name:'login'}">
        <el-button round>登录</el-button>
      </router-link>
    </p>
  </div>
</template>