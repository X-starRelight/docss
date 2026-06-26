import{_ as a,o as i,c as n,ak as e}from"./chunks/framework.D8TdBi6N.js";const c=JSON.parse('{"title":"类","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/syntax/classes.md","filePath":"zh/reference/syntax/classes.md","lastUpdated":1782452117000}'),t={name:"zh/reference/syntax/classes.md"};function l(p,s,h,r,o,k){return i(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to “类”">​</a></h1><p>类用于构建可复用的数据结构，支持计算属性和方法调用。</p><h2 id="类定义" tabindex="-1">类定义 <a class="header-anchor" href="#类定义" aria-label="Permalink to “类定义”">​</a></h2><p>使用 <code>class</code> 关键字定义：</p><div class="language-bon"><button title="Copy Code" class="copy"></button><span class="lang">bon</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class Person {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;name&quot;: &quot;Anonymous&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;age&quot;: 0,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;birth_year&quot;: 2000,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fn calculate_age(current_year) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        return current_year - self.birth_year</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fn description() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        return self.name + &quot; is &quot; + std.to_string(self.age) + &quot; years old.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><strong>属性</strong>：直接定义键值对作为默认值</li><li><strong>方法</strong>：使用 <code>fn</code> 关键字定义，方法体必须包含 <code>return</code> 语句</li></ul><h2 id="类实例化" tabindex="-1">类实例化 <a class="header-anchor" href="#类实例化" aria-label="Permalink to “类实例化”">​</a></h2><p>语法：<code>ClassName { &lt;属性覆盖&gt; }</code></p><div class="language-bon"><button title="Copy Code" class="copy"></button><span class="lang">bon</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;admin&quot;: Person {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &quot;name&quot;: &quot;Alice&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &quot;birth_year&quot;: 1990</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;admin_age&quot;: Person { &quot;birth_year&quot;: 1990 }.calculate_age(2026)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>实例化时，传入的对象会<strong>递归合并</strong>到类的默认属性上。方法调用结果会立即折叠为常量。</p><p><strong>约束</strong>：方法调用必须紧跟实例化，或赋值给属性。无法在运行时动态调用。</p><h2 id="计算属性" tabindex="-1">计算属性 <a class="header-anchor" href="#计算属性" aria-label="Permalink to “计算属性”">​</a></h2><p>属性值可以直接引用 <code>self</code> 进行派生计算：</p><div class="language-bon"><button title="Copy Code" class="copy"></button><span class="lang">bon</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class Rectangle {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;width&quot;: 10,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;height&quot;: 5,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;area&quot;: self.width * self.height,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;perimeter&quot;: (self.width + self.height) * 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;rect&quot;: Rectangle { &quot;width&quot;: 7, &quot;height&quot;: 7 }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 输出: { &quot;width&quot;: 7, &quot;height&quot;: 7, &quot;area&quot;: 49, &quot;perimeter&quot;: 28 }</span></span></code></pre></div><p>解析器会在实例化时按依赖顺序求值。</p>`,15)])])}const d=a(t,[["render",l]]);export{c as __pageData,d as default};
