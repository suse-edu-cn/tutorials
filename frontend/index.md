# 前端

## 如何学习？
前端，说人话就是“给用户看的东西”，一般情况下指的是 Web 前端，即网站的制作。它是一个系统性相对较强，且网上视频资源较多的东西，我们优先推荐各位同学以在线视频教学自学为主。

不过跟中学时期你看的视频网课不同的是，计算机是一个及其强调实践的学科，光是认真听讲是难以长期记忆前端繁多的属性、函数等东西的。我们需要跟着视频课程进行**实时、同步的练习**（说人话就是边看边敲），才能够形成较为长期的记忆。

我们目前较为建议的学习路线为：HTML & CSS → JavaScript 基础与高级语法 → NodeJS 基本使用 → Vue 3 框架 → [预备课](../startup/) → TypeScript → React 框架

## 焚！诀！
哪里不清楚的！查！查[文档](#参考文档)！

查不到别怕，多问组员和组长，over！

## 学习清单
以下是我们挑选的较为适合新手同学且内容较新的视频网课链接，注意查收~
### HTML & CSS
[前端Web开发HTML5+CSS3+移动web视频教程，前端web入门首选黑马程序员](https://www.bilibili.com/video/BV1kM4y127Li)

### JavaScript
[黑马程序员前端JavaScript入门到精通全套视频教程，javascript核心进阶ES6语法、API、js高级等基础知识和实战教程](https://www.bilibili.com/video/BV1Y84y1L7Nn)

### 开始使用框架前的准备
[黑马程序员前端AJAX入门到实战全套教程，包含学前端框架必会的（ajax+node.js+webpack+git）](https://www.bilibili.com/video/BV1MN411y7pw)

*注：Webpack 相关内容可以跳过，因为现在的打包工具主要用 Vite，且框架里边的配置足够我们的学习阶段了，关于后续优化之类的可以自己问AI或者啃文档。但如果是需要准备就业的同学，还是有必要在后面回头来看看的。* 😗

### Vue.js
[尚硅谷Vue3入门到实战，最新版vue3+TypeScript前端开发教程](https://www.bilibili.com/video/BV1Za4y1r7KE)

### TypeScript
[禹神：三小时快速上手TypeScript，TS速通教程](https://www.bilibili.com/video/BV1YS411w7Bf)

### React
[黑马程序员前端React18入门到实战视频教程，从react+hooks核心基础到企业级项目开发实战（B站评论、极客园项目等）及大厂面试全通关](https://www.bilibili.com/video/BV1ZB4y1Z7o8)

## 参考文档
为方便查询，同学们可以将需要的文档添加到浏览器书签。

*注：我们为部分无官方中文的文档提供了非官方的中文翻译入口，其中可能带有部分无关或有害信息，请同学们谨慎辨别*

### HTML & CSS & JS
MDN：<https://developer.mozilla.org/zh-CN/>

### Vue.js
框架文档：<https://cn.vuejs.org>

Router 文档：<https://router.vuejs.org/zh/>

Pinia 文档：<https://pinia.vuejs.org/zh/>

### TypeScript
官方文档：<https://www.typescriptlang.org/zh/docs/>

由于官方文档本地化和阅读体验极差，此处可以考虑去看阮一峰的[《TypeScript 教程》](https://wangdoc.com/typescript/)。

### React
官方文档：<https://zh-hans.react.dev>

### Next.js
官方文档：<https://nextjs.org/docs>

**非官方**中文翻译：<https://nextjscn.org/docs>

### Nuxt.js
官方文档：<https://nuxt.com/>

**非官方**中文翻译：<https://nuxtjs.org.cn/>

## 题外话
固然 React 和 Vue 作为行业主流的前端框架，是具有经过时代检验的优秀性能和开发体验的，但其虚拟 DOM 的特性对于静态或数据交互量不大的项目而言，也会造成一定的不必要性能开销。虽然我们可以像 [VitePress](https://vitepress.dev/zh/) 等项目，在构建过程中就使用预渲染技术，但有些走在行业前沿的新兴前端框架也是值得一看的。

由于以下框架较新，很难找到适合大众的视频课教程，需要各位自己去寻找啦~

### Solid
Solid 拥有类似 React 的语法，且状态变化时只更新绑定该状态的 DOM 节点，无 diff 过程，性能很高，建议熟悉 React 的同学一定要来看看。

官方文档：<https://docs.solidjs.com/>

**非官方**中文翻译：<https://solid.yayujs.com/>

### Svelte
Svelte 在构建时就生成直接操作 DOM 的 JavaScript 代码，因此其构建后代码不包含运行时，打包成品体积很小。

官方文档：<https://svelte.dev/docs/svelte>

**非官方**中文翻译：<https://svelte.js.cn/docs/svelte>

### Astro
Astro 是一个静态站点生成器，专注于构建博客、文档之类的以内容为核心的站点，核心理念是少用 JavaScript，按需加载。默认输出纯静态 HTML + CSS，首屏加载极快。自动代码分割、按需加载、图片优化、字体优化等开箱即用。

另外，这个框架是无关 UI 的，且可以与 React、Vue、Svelte、Solid 等集成。

官方文档：<https://docs.astro.build/zh-cn>
