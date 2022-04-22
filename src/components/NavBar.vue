<script setup lang="ts">
import { isDark } from "~/composables";
</script>

<template>
  <header class="header">
    <div class="nav-background shadow-sm">
      <div class="container">
        <router-link
          class="m-6 select-none outline-none flex items-center"
          to="/"
          focusable="false"
        >
          <img v-show="isDark" class="w-6 h-6 inline-block" src="/logo-dark.svg?url" alt="logo">
          <img v-show="!isDark" class="w-6 h-6 inline-block" src="/logo.svg?url" alt="logo">
          <span class="text-xl ml-2">Hayeslv</span>
        </router-link>
        <nav class="nav">
          <div class="spacer w-px" />
          <div class="right">
            <router-link to="/blog">
              <span>博客</span>
            </router-link>
            <router-link to="/projects">
              <span>项目</span>
            </router-link>
            <a href="https://github.com/hayeslv" target="_blank" title="GitHub" class="lt-md:hidden">
              <span class="iconify w-5 h-5" data-icon="uil:github-alt" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!-- <nav class="nav">
    <div class="spacer w-px" />
    <div class="right">
      <router-link to="/projects">
        <span class="lt-md:hidden">Projects</span>
      </router-link>
      <a href="https://github.com/hayeslv" target="_blank" title="GitHub" class="lt-md:hidden">
        <span class="iconify w-5 h-5" data-icon="uil:github-alt" />
      </a>
    </div>
  </nav> -->
</template>

<style lang="scss" scoped>
.nav-background{
  background: #F8F9FA;
  border-bottom: 2px solid #000000;
}
.shadow-sm {
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
}
.container{
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1140px;
}
.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}
.nav{
  box-sizing: border-box;
  display: flex;
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
