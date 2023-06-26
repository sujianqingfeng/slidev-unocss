<script lang="ts" setup>
import { useCycleList } from '@vueuse/core'
const { state, next } = useCycleList([
  'face-color-#0eb0c9',
  'face-color-#e9d7df',
  'face-color-#fffef9',
  'face-color-#ffc90c',
])

</script>

<template>
  <carbon-face-cool class="text-20" :class="state" @click="()=>next()" />
</template>