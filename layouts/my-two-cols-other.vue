<template>
  <div flex gap-2 px-15 py-10>
    <div flex-2>
      <slot />
    </div>
    <div flex-1>
      <slot name="right"/>
    </div>
  </div>
</template>