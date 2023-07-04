<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const toggle = (event?: MouseEvent) => {
  // @ts-expect-error: Transition API
  const isAppearanceTransition = document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition || !event) {
    toggleDark()
    return
  }

  const x = event.clientX
  const y = event.clientY

  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )

  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(() => {
    toggleDark()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value
          ? [...clipPath].reverse()
          : clipPath
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)'
      }
    )
  })

}
</script>

<template>
  <button @click="toggle" class="i-carbon-sun dark:i-carbon-moon text-20" />
</template>


<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 9999;
}
.dark::view-transition-old(root) {
  z-index: 9999;
}
.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
