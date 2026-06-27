import{_ as s,o as n,c as e,ak as t}from"./chunks/framework.D8TdBi6N.js";const f=JSON.parse('{"title":"错误处理","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/error-handling.md","filePath":"zh/reference/error-handling.md","lastUpdated":1782452117000}'),r={name:"zh/reference/error-handling.md"};function o(p,a,d,l,c,i){return n(),e("div",null,[...a[0]||(a[0]=[t(`<h1 id="错误处理" tabindex="-1">错误处理 <a class="header-anchor" href="#错误处理" aria-label="Permalink to “错误处理”">​</a></h1><p>BON 秉持&quot;尽早失败 (Fail Fast)&quot;原则。</p><h2 id="错误类型总览" tabindex="-1">错误类型总览 <a class="header-anchor" href="#错误类型总览" aria-label="Permalink to “错误类型总览”">​</a></h2><table tabindex="0"><thead><tr><th>错误类型</th><th>触发条件</th><th>错误码</th></tr></thead><tbody><tr><td><code>UndefinedTemplateError</code></td><td>引用了未定义的模板</td><td><code>E001</code></td></tr><tr><td><code>RecursiveTemplateError</code></td><td>模板循环引用</td><td><code>E002</code></td></tr><tr><td><code>UndefinedClassError</code></td><td>实例化了未定义的类</td><td><code>E003</code></td></tr><tr><td><code>CircularInheritanceError</code></td><td>类循环继承</td><td><code>E004</code></td></tr><tr><td><code>CircularDependencyError</code></td><td>计算属性循环依赖</td><td><code>E005</code></td></tr><tr><td><code>IndexOutOfBoundsError</code></td><td><code>std.at</code> 索引越界</td><td><code>E006</code></td></tr><tr><td><code>TypeError</code></td><td>类型不匹配</td><td><code>E007</code></td></tr><tr><td><code>CircularImportError</code></td><td>文件循环导入</td><td><code>E008</code></td></tr></tbody></table><h2 id="错误信息格式" tabindex="-1">错误信息格式 <a class="header-anchor" href="#错误信息格式" aria-label="Permalink to “错误信息格式”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>E001: UndefinedTemplateError — 引用了未定义的模板 &#39;foo&#39;</span></span>
<span class="line"><span>  位置: 第 5 行, 第 10 列</span></span>
<span class="line"><span></span></span></code></pre></div><p>错误信息包含：</p><ol><li><strong>错误码</strong>：唯一标识符（E001–E008）</li><li><strong>错误类型</strong>：面向开发者的名称</li><li><strong>描述</strong>：人类可读的错误原因</li><li><strong>源码位置</strong>：行号和列号，便于定位</li></ol><h2 id="python-错误处理" tabindex="-1">Python 错误处理 <a class="header-anchor" href="#python-错误处理" aria-label="Permalink to “Python 错误处理”">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import evaluate, EvalError</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>    result = evaluate(&#39;undefined_var&#39;)</span></span>
<span class="line"><span>except EvalError as e:</span></span>
<span class="line"><span>    print(f&quot;错误码: {e.code}&quot;)    # E001</span></span>
<span class="line"><span>    print(f&quot;错误信息: {e}&quot;)</span></span>
<span class="line"><span>    if e.pos:</span></span>
<span class="line"><span>        print(f&quot;位置: 第 {e.pos.line} 行, 第 {e.pos.column} 列&quot;)</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="typescript-错误处理" tabindex="-1">TypeScript 错误处理 <a class="header-anchor" href="#typescript-错误处理" aria-label="Permalink to “TypeScript 错误处理”">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { evaluate, EvalError } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>  const result = evaluate(&quot;undefined_var&quot;);</span></span>
<span class="line"><span>} catch (e) {</span></span>
<span class="line"><span>  if (e instanceof EvalError) {</span></span>
<span class="line"><span>    console.log(\`错误码: \${e.code}\`);  // E001</span></span>
<span class="line"><span>    console.log(\`错误信息: \${e.message}\`);</span></span>
<span class="line"><span>    if (e.pos) {</span></span>
<span class="line"><span>      console.log(\`位置: 第 \${e.pos.line} 行, 第 \${e.pos.column} 列\`);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre></div>`,12)])])}const u=s(r,[["render",o]]);export{f as __pageData,u as default};
