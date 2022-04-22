<script setup lang="ts">

</script>

<template>
  <div class="bread-crumb p-0 mt-4 mx-auto">
    <nav>
      <ol class="breadcrumb bg-white border">
        <li class="breadcrumb-item">
          <router-link to="/">首页</router-link>
        </li>
        <li class="breadcrumb-item active">
          最新文章
        </li>
      </ol>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.bread-crumb{
  max-width: 1140px;
}
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  border-radius: 0.25rem;
}
.breadcrumb-item{
  a{
    color: #000000;
    text-decoration: none;
    transition: all 300ms;
    background-color: transparent;
    &:hover{
      color: #eb4d4b;
    }
  }
}
.breadcrumb-item+.breadcrumb-item:before {
    display: inline-block;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: #6c757d;
    content: "/";
}
</style>
