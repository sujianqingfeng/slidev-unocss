---
highlighter: shiki
# colorSchema: dark
transition: fade-out
growX: 60
growY: 50
---


<div w-full h-full flex-center text-60 position-relative>
  <p c-gray opacity-5 tracking-10>签 到</p>
  <div position-absolute border p-2 rounded-2 border-gray  class="left-50% top-50% translate--50%">
    <img src="/qr-code.png" h-70 w-70 rounded-2 />
  </div>
</div>


---
layout: cover
growX: 100
growY: 50
---

# Unocss

Instant On-demand Atomic CSS Engine

Hens


<!--
- unocss是什么
- 提及原子化
-->



---
layout: center 
class: 'text-center'
growX: 55
growY: 50
---

<h1>Atomic CSS</h1>
<p>原子化CSS</p>



<!-- 
- 定义： 是一种编写css的方法，将属性及属性值拆分成独立的、可重用的类来构建页面。
- 这个概念很早就出现了，最近几年才出现这个词，并且开始流行起来。
- 原子化长什么样子？
-->



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



<!-- 
相信大家也都写过这样的代码，这就是原子化css的一个例子。
这样一个一个写比较麻烦，我们可以通过css预处理器来简化的编写。
-->


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



<!-- 
 - 使用预处理的一些特性来批量生成，方便一些


 既然聊到了原子化，就提一提原子性的优缺点。
-->


--- 


<div>
  <p class="!m-0 mb-1" >atomic css of</p>
  <h1 class="flex items-center" >Advantages <h3>(优点)</h3></h1>
</div>

<div class="flex flex-col h-80 justify-center gap-4">
  <h3 v-click>复用、可维护性</h3>
  <h3 v-click>性能提升</h3>
  <h3 v-click>提升开发者体验</h3>
</div>


<!-- 
- 已拆分至最小单元，能够最大程度的复用，同时又因为足够小，针对单个的样式修改不会影响到其他的样式，维护性也很好。
- 降低css打包体积，网络传输的时间减少，同时也减少了浏览器解析css的时间。
- 就近编写样式，不需要去单独的标签，或者单独的样式文件去编写样式，提升开发者体验。
 -->




--- 

<div>
  <p class="!m-0 mb-1" >atomic css of</p>
  <h1 class="flex items-center">Disadvantages <h3>(缺点)</h3></h1>
</div>


<div class="flex flex-col h-80 justify-center gap-4">
  <h3 v-click>学习成本</h3>
  <h3 v-click>不利于阅读</h3>
  <h3 v-click>不利于管理</h3>
</div>



<!-- 
 - 理解和使用原子化 CSS 可能需要一些时间和学习成本。与传统的基于选择器的 CSS 相比，这种模式需要适应新的思维方式和工作流程。 
 - 处理复杂的布局时，代码会变成冗长，不利于阅读。（如何去规避成为了一个问题？）
 - 随着时间的迭代，会变得难以管理，因为我们不知道哪些是可以删除的，哪些是不可以删除的。
-->



---
layout: center
class: text-center
growX: 55
growY: 50
---


<h1>A question</h1>
<p>存在一个问题</p>


<!-- 
我们介绍了上面两种使用原子化css的方式，但是存在
一个大问题，不管手动去写样式，还是通过预处理去批量生成css, 都需要自己去写，
就算自己写，有时候也写不完，因为样式属性跟属性值组合太多了。


所以有没有一种方式，能够自动的去生成样式呢？
同时，能不能帮我们管理好css，比如说让我们知道那些是可以删除的。

当然时有的，我们就要提到一些原子化css框架。
-->

---
layout: center
growX: 55
growY: 50
---


# Atomic css frameworks 

<p class="text-center">原子化css框架</p>





---

# Frameworks(框架)

<FrameworkList/>



<!-- 
 - 2017年左右，Tailwind css最先出来，因其独特的方式而受到欢迎。
 - 后来vite的出现，在vite中使用，会全量编译css，甚至会出现M级别的数据，会造成性能问题。同时也不符合vite的哲学。所以，后面出现了按需编译的Windi css。
 - unocss 受到了Tailwind css 和 Windi css的启发，在这些基础上，给到了更多的自定义的能力。

 - 后来，Tailwind css 也实现了按需编译和属性模式，Windi css就没有了优势，所以后面就没有继续维护了。 

 - 所以我们就来看看，Tailwind css 和 UnoCss的区别。
 -->


---
growX: 50
growY: 10
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
  
  - 正则匹配，快
  - 定制化程度很高 
  - 零依赖，轻量
  - 社区维护


  </v-clicks>
  </div>

</div>


<div v-click position-absolute top-10  class="right-30%">
  <carbon-badge color-green text-10 />
</div>


<!-- 
 Tailwind css
 - 是一个postcss插件，对Postcss有所依赖。
 - 发展的很好，成为了一个独立公司。

 Unocss 

 - 采用正则匹配，在TailWind css没有实现JIT之前, 快200倍+，实现之后，也快5倍左右。
 - 全量可定制，灵活性很高。
 - 正是由于零依赖，可以实现cdn runtime build, 可以直接在浏览器里面使用，不依赖于任何打包器。
  - 预设兼容Tailwind css

  基于此，这次分享我选择了Unocss。
  下面我们来看看Unocss的一些特性。
-->


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

# Unocss Core Features(核心特性)


<v-clicks>

- Rules (规则)
- Presets (预设)
- Shortcuts (快捷方式)
- Attributify Mode (属性模式)
- Pure Css Icons (纯css图标)
- Css Directives (css指令)
- Cli (命令行工具)

</v-clicks>



<!--
- 规则
- 预设
- 快捷方式
- 属性模式
- 纯css图标
- css指令
-->


---

# Install (安装)



<div v-click mt-40 text-20 text-center leading-20>
  pnpm add -D unocss
</div>


---
---
# Rules (规则)


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


<!-- 
规则：
- 通过正则匹配，生成自定义样式。



当然我们一个一个写还是太麻烦了，我们可以通过预设来实现。
 -->


---
layout: my-two-cols
---

<h1 text-9 leading-10>Presets (预设)</h1>  



<div mt-4 v-click>

``` bash
pnpm add -D @unocss/preset-uno
```
</div>

<div mt-2 v-click> 

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
</div> 

<div mt-2 v-click>

``` html
<button class="text-4 rounded-2 px-2 py-1 font-bold bg-green">
  green
</button>
```
</div>


<template #right>
  <div h-full flex-center v-click>
    <button class="text-4 rounded-2 px-2 py-1 font-bold bg-green">
      green
    </button>
  </div>
</template>




<!-- 
Presets

- 通过预设，可以快速的使用一些常用的样式。
- 包含一些官方预设，还有一些社区预设。
- 当然自己也可以定义预设。
-->


---
layout: my-two-cols
---

<h1 text-9 leading-10>Shortcuts (快捷方式)</h1>  

<div mt-4 v-click="1">

``` html
<button class="text-4 rounded-2 px-2 py-1 font-bold bg-green">
 green
</button>

<button class="text-4 rounded-2 px-2 py-1 font-bold bg-pink">
 pink
</button>
```
</div>



<div mt-2 v-click="3">

``` ts
export default defineConfig({
  shortcuts: {
    'my-button': 'text-4 rounded-2 px-2 py-1 font-bold',
  },
})
```
</div>

<div mt-2 v-click="4">

``` html
<button class="my-button bg-green">
 green
</button>

<button class="my-button bg-pink">
 pink
</button>
```
</div>



<template #right>

<div mt-25 flex-center gap-2 v-click="2">
<button class="text-4 rounded-2 px-2 py-1 font-bold bg-green">
 green
</button>

<button class="text-4 rounded-2 px-2 py-1 font-bold bg-pink">
 pink
</button>
</div>

<div mt-50 flex-center gap-2 v-click="5">
<button class="my-button bg-green">
 green
</button>

<button class="my-button bg-pink">
 pink
</button>
</div>
</template>




<!-- 
shortcuts

我们可能存在一些公共的样式，我们可以考虑使用快捷方式来实现。而不用每次都单独写。
-->

---
layout: my-two-cols-other
---

<h1 text-9 leading-10>Css Directives (Css指令)</h1>  



<div mt-4 v-click="1">

``` bash
pnpm add -D @unocss/transformer-directives
```
</div>

<div mt-2 v-click="2">

``` ts 
// uno.config.ts
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
})
```
</div>

<div mt-2 v-click="3">

``` vue
// demo.vue
<template>
  <button class="inner-button">Button</button>
</template>

<style>
.inner-button {
  @apply text-4 rounded-2 px-2 py-1 font-bold;
}
</style>
```
</div>


<template #right>

<div h-full flex-center flex-col gap-2>
  <div v-click="4">
    <button class="inner-button bg-red">Button</button>
  </div>
</div>
</template>




<style>
.inner-button {
  @apply text-4 rounded-2 px-2 py-1 font-bold;
}
</style>



<!-- 
css指令

有时候我么可能遇到在单个文件存在公共的样式，但是又不是全局的样式，我们可以考虑使用css指令来实现。
-->


---
layout: my-two-cols-other
---

<h1 text-9 leading-10>Attributify Mode (属性模式)</h1>  



<div mt-10 v-click>

``` html
<button 
  class="bg-blue-400 hover:bg-blue-500 text-sm text-white 
  font-mono font-light py-2 px-4 
  rounded border-2 border-blue-200 
  dark:bg-red-500 dark:hover:bg-red-600">
  Button
</button>
``` 

</div>

<template #right>

<div flex-center mt-35 v-click>
<button 
class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-red-500 dark:hover:bg-red-600">
  Button
</button>
</div>
</template>



<!-- 
属性模式

有时候我们遇到复杂的布局的时候，样式可能会很长，难以阅读。
我们可以考虑使用属性模式来分类样式，这样可以更好的阅读。
-->

---
layout: my-two-cols-other
---

<h1 text-9 leading-10>Attributify Mode (属性模式)</h1>  



<div mt-4 v-click="1">

``` bash
pnpm add -D @unocss/preset-attributify
```
</div>

<div mt-2 v-click="2">

``` ts 
// uno.config.ts
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [
    presetAttributify(),
  ],
})
```
</div>

<div mt-2 v-click="3">

``` html
<button 
  bg="blue-400 hover:blue-500 dark:red-500 dark:hover:red-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200">
  Button
</button>
```
</div>

<div mt-2 v-click="5">

``` html
<button color-green>Button</button>
```
</div>

<template #right>

<div h-full flex-center flex-col gap-2>
  <div v-click="4">
    <button 
      bg="blue-400 hover:blue-500 dark:red-500 dark:hover:red-600"
      text="sm white"
      font="mono light"
      p="y-2 x-4"
      border="2 rounded blue-200">
      Button
    </button>
  </div>

  <div mt-20 v-click="6">
    <button color-green>Button</button>
  </div>
</div>
</template>





---
layout: my-two-cols-other
---

<h1 text-9 leading-10>Pure Css Icons (纯Css的图标)</h1>  



<div mt-4 v-click="1">

``` bash
pnpm add -D @unocss/preset-icons @iconify-json/[the-collection-you-want]
```
</div>

<div mt-2 v-click="2">

``` ts 
// uno.config.ts
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetIcons({ /* options */ }),
  ],
})
```
</div>

<div mt-2 v-click="3">

``` vue
<button class="i-carbon-sun dark:i-carbon-moon" />
```
</div>


<template #right>

<div h-full flex-center flex-col gap-2>
  <div v-click="4">
    <Icon/>
  </div>
</div>
</template>




<div mt-30 color-gray text-2 v-click="5">

[Icons Link](https://icones.js.org/)
</div>



<!-- 
纯css图标 

- 提供了几万+个图标，可以直接使用
- 按需引入
- 当然也可以自定义配置自己的svg图标
-->


---
layout: my-two-cols
---

<h1 text-9 leading-10>SafeList (安全列表)</h1>  



<div mt-4 v-click="1">

``` ts 
// uno.config.ts
export default defineConfig({
  safelist:[
    ...['#0eb0c9','#e9d7df','#fffef9','#ffc90c'].map(c=>`color-${c}`)
  ]
})
```
</div>


<div mt-2 v-click="2">

``` vue
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
```
</div>


<template #right>

<div h-full flex-center flex-col gap-2>
  <div v-click="3">
    <SafeListDemo />
  </div>
</div>
</template>



<!-- 
safe list

有时候我们会遇到动态的样式，但是正则是不能够匹配运行时的样式的。
这个时候，我们可以考虑使用safe list来解决这个问题。
但是，还有一个限制是动态的样式有限的。因为你总不能可能去列举所有的可能性。

如果遇到这种情况，使用其他的方式更好一些，比如vue里面的计算属性。


-->





---

<h1 text-9 leading-10>Cli (命令工具)</h1>  



<div v-click="1">

``` ts 
import { defineConfig,presetUno } from 'unocss'

export default defineConfig({
  // cli 配置
  cli:{
    entry:{
      // 匹配文件
      patterns: './pages/**/*.{vue,nvue}',
      // 输出文件
      outFile:'./static/uno.css'
    },
  },
  presets: [
    presetUno({
      // 去除css变量
      preflight: false
    }),
    // 转换一些值
    transformUniappPreset(),
  ]
})
```
</div>



<!-- 
cli 

应用的场景是什么呢？
比如说：在我们公司内部里面有对uniapp的使用，虽然uniapp提供了部分webpack的能力，我测试了一下，并不能够直接使用unocss。
但是我们可以使用unocss的cli来解决这个问题。

cli会去扫描定义的entry入口，然后通过正则去匹配，然后生成对应的css，写入到指定的文件，全局引入这个文件就可以生效了。


核心的特性介绍大致是这里内容，下面来讲一下一些开发技巧。
-->


---

<h1 text-9 leading-10>Cli (命令工具)</h1>  



<div v-click="1">

``` ts 

const remRE = /(-?[\.\d]+)rem/g

function transformUniappPreset(){
  return {
    name: 'preset-transform-uniapp',
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const [,value] = i
        if (typeof value === 'string' && remRE.test(value)){
          i[1] = value.replace(remRE, (_, p1) => `${+p1 * 4}rpx`)
        }
        if(typeof value === 'string' && ['rgba'].some(x=>value.startsWith(x))){
          i[1] = value.replace(/,var\(.+\)\)$/, ')').replace('rgba', 'rgb')
        }
      })
      util.entries = util.entries.filter((i)=> {
        const [key]= i
        return typeof key === 'string' && !['--un-text-opacity'].some(k=>k===key)
      })
    },
  }
}
```
</div>




---
layout: my-two-cols
---

<h1 text-9 leading-10>Cli (命令工具)</h1>  



<div mt-4 v-click="1">

``` vue 
// index.nvue
<template>
	<view class="h-800 flex justify-center items-center">
		<text class="text-80 color-red opacity-100">hello unocss</text>
	</view>
</template>

<style/>
```
</div>


<div mt-2 v-click="2">

``` css
/* uno.css */
/* layer: default */
.h-800{height:800rpx;}
.flex{display:flex;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.text-80{font-size:80rpx;}
.color-red{color:rgb(248,113,113);}
.opacity-100{opacity:1;}
```
</div>

<div mt-10 color-gray text-2 v-click="4">

[Demo Link](https://github.com/sujianqingfeng/uniapp-vue2-unocss)
</div>


<template #right>

<div h-full flex-center flex-col gap-2>
  <div v-click="3">
    <img w-60 src="/uniapp-unocss.jpg" />
  </div>
</div>
</template>




---
layout: cover
class: text-center
growX: 55
growY: 50
---

<h1>Tips</h1>
<p>小技巧</p>



---

<div flex items-center>
  <h1 class="!m-0 pr-2">Vscode extension(扩展)</h1>
  <a href="https://marketplace.visualstudio.com/items?itemName=antfu.unocss" target="_blank" rel="noopener">link</a>
</div>


<div v-click mt-4>
  <img src="/vscode-auto-completion.png" />
</div>


<!-- 
Vscode extension

- 自动补全
-->



---

<div flex items-center>
  <h1 class="!m-0 pr-2">Vscode extension(扩展)</h1>
  <a href="https://marketplace.visualstudio.com/items?itemName=antfu.unocss" target="_blank" rel="noopener">link</a>
</div>


<div v-click mt-4>
  <img src="/vscode-hover.png" />
</div>



<!-- 
Vscode extension

- 组合提示
-->



---

<div flex items-center>
  <h1 class="!m-0 pr-2">Inspector (检查器)</h1>
  <Inspector-link/>
</div>


<div v-click mt-4>
  <img src="/inspector.png" />
</div>


<!-- 
检查器 

借助一些打包器，可以在开发环境下使用检查器
能够查看生成的样式
-->



---

# Docs


<div class="flex flex-col h-80 justify-center gap-4">
  <h3 v-click>

  [Unocss interactive (交互式文档)](https://unocss.dev/interactive)
  </h3>
  <h3 v-click>

  [Tailwind css](https://tailwindcss.com/docs)
  </h3>
</div>



<!--
- unocss有一个交互式文档
- 甚至可以去看Tailwind，因为unocss内置的规则兼容了tailwind css， 去看tailwind其实有一个好处，以后你想使用tailwind css的时候，基本可以无缝切换。
 -->

---
layout: center
class: text-center
growX: 55
growY: 50
---

# Conclusion 

<v-clicks>

[Document：https://unocss.dev](https://unocss.dev) 

</v-clicks>


<!-- 

到这里以上是这次分享的全部内容，当然里面的内容并不全，只是简单提了一下，
最主要的还是让大家有一个概念，后面有机会的时候可以自己去尝试一下。

如果你想了解更多，可以看看官方文档。

同时，原子化css并不是万能的，它只是一种解决方案，有时候其他的解决方式可能更加快捷有效。

下面就是QA环节。
-->

---
layout: center
class: text-center
growX: 55
growY: 50
---

# Q&A


<!-- 
大家如果有什么问题，可以提出来，我会尽量解答。 
-->


---
layout: center
class: text-center
growX: 55
growY: 50
---

# Thank you
Power by [slidev](https://sli.dev) [PPT](https://github.com/sujianqingfeng/slidev-unocss)
