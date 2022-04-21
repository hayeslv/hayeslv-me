<script setup lang="ts">
import { defineComponent } from "vue";
import Foo from "~/components/Foo";
</script>

<template>
  <button class="bg-white dark:bg-black">
    click me
  </button>
  <div class="i-ic-baseline-add-circle text-3xl bg-green-500" />
  <div>
    <Foo />
  </div>
</template>

<style lang="scss" scoped>
</style>
