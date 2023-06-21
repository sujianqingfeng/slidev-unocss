---
layout: cover
background: https://source.unsplash.com/collection/94734566/1920x1080
highlighter: shiki
transition: slide-left
---

# Unocss

Instant On-demand Atomic CSS Engine

Hens


---
theme: seriph
layout: section
transition: slide-left
---

# 原子化CSS

编写css的方法












---
theme: seriph
layout: two-cols
---

# Example

```css
.color-flower-pink {
  color: #ec9bad
}
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

code {
  @apply text-8 leading-12; 
}
</style>







---
transition: slide-left
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
transition: slide-left
layout: center
---


# 麻烦 ？






---
transition: slide-left
---

# Frameworks 

<FrameworkList/>





---
layout: two-cols
transition: slide-left
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
transition: slide-left
---

# Unocss Core Features

- Rules
- Shortcuts
- Attributify Mode
- Presets
- Pure Css Icons
- Css Directives
- Inspector 










---
layout: center
class: text-center
---

# Thank
Power by [slidev](https://sli.dev) 
