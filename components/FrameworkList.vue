<template>
  <div flex mt-20 position-relation>
    <div v-click flex-1 flex flex-col items-center justify-center>
      <logos-tailwindcss-icon h-20 w-20 />
      <div font-bold text-10>Tailwind CSS</div>
    </div>

    <div v-click flex-1 flex flex-col items-center justify-center>
      <logos-windi-css h-20 w-20 />
      <div font-bold text-10>Windi CSS</div>


    </div>

    <div v-click flex-1 flex flex-col items-center justify-center>
      <logos-unocss h-20 w-20 />
      <div font-bold text-10>UnoCSS</div>
    </div>


    <div v-click position-absolute top-20 class="left-86">
      <carbon-close text-60 color-red />
    </div>
  </div>
</template>