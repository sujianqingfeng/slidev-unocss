<script lang="ts" setup>
import { useCycleList } from '@vueuse/core'
const { state, next } = useCycleList([
  '#0eb0c9',
  '#e9d7df',
  '#fffef9',
  '#ffc90c',
])
</script>

<template>
  <carbon-logo-vue 
    class="text-20 cursor-pointer" 
    :class="'color-' + state" 
    @click="() => next()"
  />
</template>