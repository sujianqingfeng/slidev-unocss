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
--- 


# benefit

- 复用，减少css的体积
- 可维护性，样式之间独立，不会造成耦合
- dx, 开发者体验

# disadvantages

- 学习成本
- 不利于阅读



---
layout: center
---


# One Problem



---
layout: center
---


# atomic css frameworks 





---

# Frameworks 

<FrameworkList/>

---
layout: two-cols
---

# Tailwind Css

- 本质上是一个插件，依赖于postcss
- 独立公司维护

::right::

# UnoCss

- 零依赖，轻量
- 快
- 社区维护
- 预设兼容tailwind css


<div v-click position-absolute top-0  class="right-50%">
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



``` ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
})
```


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
