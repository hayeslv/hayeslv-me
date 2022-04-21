<script setup lang="ts">
import "./style/common.scss";
import Header from "./layout/header/index.vue";
</script>

<template>
  <main class="font-sans">
    <Header />
    <router-view />;
  </main>
</template>

<style>

</style>
