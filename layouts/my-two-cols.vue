<template>
  <div flex gap-2 px-14 py-10>
    <div flex-1>
      <slot />
    </div>
    <div flex-1>
      <slot name="right"/>
    </div>
  </div>
</template>