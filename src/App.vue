<script setup lang="ts">
import "./style/common.scss";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main class="font-sans">
    <router-view />
  </main>
</template>

<style>

</style>
