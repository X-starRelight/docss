import{_ as a,o as n,c as i,ak as e}from"./chunks/framework.D8TdBi6N.js";const c=JSON.parse('{"title":"继承","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/syntax/inheritance.md","filePath":"zh/reference/syntax/inheritance.md","lastUpdated":1782452117000}'),t={name:"zh/reference/syntax/inheritance.md"};function l(p,s,h,o,E,k){return n(),i("div",null,[...s[0]||(s[0]=[e(`<h1 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to “继承”">​</a></h1><p>使用 <code>extends</code> 实现单继承：</p><div class="language-bon"><button title="Copy Code" class="copy"></button><span class="lang">bon</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class Animal {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;type&quot;: &quot;unknown&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fn move() { return &quot;moving&quot; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class Dog extends Animal {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;type&quot;: &quot;canine&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;breed&quot;: &quot;mixed&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fn bark() { return &quot;woof!&quot; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;pet&quot;: Dog { &quot;breed&quot;: &quot;Golden Retriever&quot; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 结果包含 type=&quot;canine&quot;, breed=&quot;Golden Retriever&quot;, move() 和 bark()</span></span></code></pre></div><h2 id="继承规则" tabindex="-1">继承规则 <a class="header-anchor" href="#继承规则" aria-label="Permalink to “继承规则”">​</a></h2><ul><li>子类继承父类所有属性和方法</li><li>子类可以覆盖父类属性</li><li>BON 仅支持<strong>单继承</strong>（一个子类只能 extends 一个父类）</li><li>子类方法可以调用父类方法（通过 <code>super</code>，如果实现了的话）</li><li>循环继承会抛出 <code>CircularInheritanceError</code></li></ul><div class="language-bon"><button title="Copy Code" class="copy"></button><span class="lang">bon</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class Animal {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;type&quot;: &quot;unknown&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fn move() { return &quot;moving&quot; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class Cat extends Animal {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;type&quot;: &quot;feline&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // 继承了 Animal 的 move() 方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;cat&quot;: Cat {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 输出: { &quot;type&quot;: &quot;feline&quot;, &quot;move&quot;: &quot;moving&quot; }</span></span></code></pre></div>`,6)])])}const d=a(t,[["render",l]]);export{c as __pageData,d as default};
