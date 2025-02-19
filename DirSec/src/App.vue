<script setup lang="ts">
</script>

<template>
  <header>
    <img src="./assets/vue.svg" alt="">
    <span>DirSec</span>
    <router-link :to="{name : 'Home'}">Home</router-link>
    <router-link :to="{name : 'Test'}">Test</router-link>
  </header>
  <RouterView/>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
