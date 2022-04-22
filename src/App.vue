<script setup lang="ts">
import "./style/common.scss";
import NavBar from "./components/NavBar.vue";
import BreadCrumb from "./components/BreadCrumb.vue";
</script>

<template>
  <NavBar />
  <BreadCrumb />
  <main class="p-0 mt-4">
    <router-view />
  </main>
</template>

<style>

</style>
