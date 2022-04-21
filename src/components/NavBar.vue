<script setup lang="ts">
import { isDark } from "~/composables";
</script>

<template>
  <header class="header z-40">
    <router-link
      class="w-10 h-10 m-6 fixed select-none outline-none"
      to="/"
      focusable="false"
    >
      <img v-show="isDark" class="w-10 h-10" src="/logo-dark.svg?url" alt="logo">
      <img v-show="!isDark" class="w-10 h-10" src="/logo.svg?url" alt="logo">
    </router-link>
  </header>
  <nav class="nav">
    <div class="spacer w-px" />
    <div class="right">
      <router-link to="/projects">
        <span class="lt-md:hidden">Projects</span>
      </router-link>
      <a href="https://github.com/hayeslv" target="_blank" title="GitHub" class="lt-md:hidden">
        <span class="iconify w-5 h-5" data-icon="uil:github-alt" />
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}
.nav{
  box-sizing: border-box;
  display: flex;
  padding: 2rem;
  width: 100%;
  > * {
    margin: auto
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.3s ease;
    opacity: 0.6;
    outline: none;
    > * {
      vertical-align: text-bottom;
    }
  }
  a:hover {
    opacity: 1;
    text-decoration-color: inherit;
  }
  .right {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    > * {
      margin-left: 1rem;
    }
  }
}
</style>
