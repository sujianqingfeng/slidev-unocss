---
layout: cover
highlighter: shiki
# colorSchema: dark
transition: fade-out
---

# Unocss

Instant On-demand Atomic CSS Engine

Hens


---
layout: center
class: 'text-center'
growX: 50
growY: 50
---

# 原子化CSS(Atomic CSS)












---
layout: two-cols
growX: 10
growY: 50
---

# Example

```css
// style.css

.color-flower-pink {
  color: #ec9bad
}

.text-20 {
  font-size: 5rem;
}
```

``` html
// index.html

<uil-flower class="color-flower-pink text-20" />
```


<template #right>
<div pt-20 ml-40 text-20 class="color-flower-pink" >
 <uil-flower />
</div>
</template>

<style>
.color-flower-pink {
  color: #ec9bad
}
</style>







---
layout: two-cols
growX: 50
growY: 10
--- 

# Sass

``` scss
$directions: (t: top, x: (left,right));
$edges: (m: margin);
@mixin edge($edge, $d, $rpx) {
  $full-direction: map-get($directions, $d); 
  $property: map-get($edges, $edge);
  .#{$edge}#{$d}-#{$rpx} {
    @if type-of($full-direction) == 'list' {
      @each $direction in $full-direction {
        #{$property}-#{$direction}: #{$rpx}rpx;
      }
    } @else {
      #{$property}-#{$full-direction}: #{$rpx}rpx;
    }
  }
}

$margin-sizes: (('x', (4, 8)),('t', (4, 8)));
@each $item in $margin-sizes {
  $d: nth($item, 1); $sizes: nth($item, 2);
  @each $size in $sizes {
    @include edge('m', $d, $size);
  }
}
```


::right::
# css

 ``` css
 .mx-4 {
  margin-left: 4rpx;
  margin-right: 4rpx;
}

.mx-8 {
  margin-left: 8rpx;
  margin-right: 8rpx;
}

.mt-4 {
  margin-top: 4rpx;
}

.mt-8 {
  margin-top: 8rpx;
}
 ```



--- 


<div>
  <p class="!m-0 mb-1" >atomic css of</p>
  <h1>Advantages</h1>
</div>

<v-clicks>

- 复用
- 可维护性
- 提升开发者体验

</v-clicks>







--- 

<div mt-6 >
  <p class="!m-0 mb-1" >atomic css of</p>
  <h1>Disadvantages</h1>
</div>



<v-clicks>

- 学习成本
- 不利于阅读

</v-clicks>







---
layout: center
---


# One Problem



---
layout: center
---


# Atomic css frameworks 





---

# Frameworks 

<FrameworkList/>





---
growX: 50
growY: 130
---


<div flex>
  <div flex-1>

  # Tailwind Css

  <v-clicks>

  - postcss插件
  - 独立公司维护

  </v-clicks>

  </div>

  <div flex-1>

  # UnoCss

  <v-clicks>
  
  - 快
  - 零依赖，轻量
  - 社区维护
  - 预设兼容tailwind css


  </v-clicks>
  </div>

</div>


<div v-click position-absolute top-10  class="right-30%">
  <carbon-badge color-green text-10 />
</div>



---
layout: 'center'
class: 'text-center'
growX: 50
growY: 10
---

<div v-click transition-all duration-500 :class="$slidev.nav.clicks === 0 ? 'op0' : $slidev.nav.clicks > 1 ? 'op50 text-2xl' : 'translate-y-10 text-4xl'">Introducing</div>

<div text-center text-10 v-click>
  <logos-unocss  />
  <span font-bold ml-2 >Unocss</span>
</div>

---
---

# Unocss Core Features

- Rules
- Presets
- Shortcuts
- Attributify Mode
- Pure Css Icons
- Css Directives
- Inspector 






---
---
# Rules


<div flex gap-2>

<div flex-1>

``` ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    [/^face-color-(.+)$/, ([_, color]) => ({ color })],
  ],
})
```

<div mt-4 v-click>

``` vue
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
```

</div>

</div>


<div flex-1 flex justify-center items-center>
<RulesDemo v-click />
</div>
</div>





---
---
# Presets

``` bash
pnpm add -D @unocss/preset-uno
```

<div pt-2> </div> 

``` ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
  ],
})
```


<button class="text-4 rounded-2 px-2 py-1 font-bold bg-green">
 green
</button>






---
---
# Shortcuts

<button class="text-4 rounded-2 px-2 py-1 font-bold bg-green">
 green
</button>


<button class="text-4 rounded-2 px-2 py-1 font-bold bg-pink">
 pink
</button>




<button class="my-button bg-green">
 green
</button>


<button class="my-button bg-pink">
 pink
</button>





---
---
# Attributify Mode



``` bash
pnpm add -D @unocss/preset-attributify
```

``` ts 
// uno.config.ts
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [
    presetAttributify(),
  ],
})
```


<button color-green>Button</button>


<button 
class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600">
  Button
</button>






<button 
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200">
  Button
</button>





---
---
# Pure Css Icons


<button class="i-carbon-sun dark:i-carbon-moon" />





---
---

# Tips

- vscode extension
- SafeLists



---
layout: center
class: text-center
---

# Conclusion 

<v-clicks>

[Document](https://unocss.dev/) 

</v-clicks>



---
layout: center
class: text-center
---

# Q&A




---
layout: center
class: text-center
---

# Thank you
Power by [slidev](https://sli.dev) 
