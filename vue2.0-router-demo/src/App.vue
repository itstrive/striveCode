<template>
  <div id="app">
      <div>
          <router-link to="/home">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/news">News</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
.router-link-active{
  font-size: 20px;
  color: #f60;
}
</style>
