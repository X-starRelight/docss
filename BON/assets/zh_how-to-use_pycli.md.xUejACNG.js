import{_ as a,o as n,c as p,ak as e}from"./chunks/framework.D8TdBi6N.js";const h=JSON.parse('{"title":"bon-py CLI 使用指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/how-to-use/pycli.md","filePath":"zh/how-to-use/pycli.md","lastUpdated":1782452117000}'),l={name:"zh/how-to-use/pycli.md"};function o(t,s,i,c,d,r){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="bon-py-cli-使用指南" tabindex="-1">bon-py CLI 使用指南 <a class="header-anchor" href="#bon-py-cli-使用指南" aria-label="Permalink to “bon-py CLI 使用指南”">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span># 在 monorepo 根目录</span></span>
<span class="line"><span>pip install -e packages/bon-py</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或者直接安装</span></span>
<span class="line"><span>cd packages/bon-py</span></span>
<span class="line"><span>pip install .</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span># 从文件读取并解析</span></span>
<span class="line"><span>bon file.bon</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 解析 BON 表达式</span></span>
<span class="line"><span>bon -e &#39;{ &quot;name&quot;: &quot;Alice&quot;, &quot;age&quot;: 30 }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从 stdin 读取</span></span>
<span class="line"><span>echo &#39;{ &quot;key&quot;: &quot;value&quot; }&#39; | bon</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 紧凑输出</span></span>
<span class="line"><span>bon -c file.bon</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定缩进</span></span>
<span class="line"><span>bon --indent 4 file.bon</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="命令行参数" tabindex="-1">命令行参数 <a class="header-anchor" href="#命令行参数" aria-label="Permalink to “命令行参数”">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>file</code></td><td>要解析的 .bon 文件</td></tr><tr><td><code>-e, --eval</code></td><td>直接解析 BON 表达式字符串</td></tr><tr><td><code>-p, --pretty</code></td><td>美化输出（默认）</td></tr><tr><td><code>-c, --compact</code></td><td>紧凑输出</td></tr><tr><td><code>--indent N</code></td><td>缩进级别（默认 2）</td></tr><tr><td><code>--param KEY=VALUE</code></td><td>编译时参数，支持多个（可重复）</td></tr></tbody></table><h2 id="使用编译时参数" tabindex="-1">使用编译时参数 <a class="header-anchor" href="#使用编译时参数" aria-label="Permalink to “使用编译时参数”">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span># 传递字符串参数</span></span>
<span class="line"><span>bon config.bon --param env=production</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 传递布尔参数</span></span>
<span class="line"><span>bon config.bon --param debug=true --param verbose=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 传递数字参数</span></span>
<span class="line"><span>bon config.bon --param timeout=30 --param retries=3</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 多个参数</span></span>
<span class="line"><span>bon config.bon --param env=prod --param debug=false --param count=5</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to “示例”">​</a></h2><h3 id="解析简单对象" tabindex="-1">解析简单对象 <a class="header-anchor" href="#解析简单对象" aria-label="Permalink to “解析简单对象”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>bon -e &#39;{ &quot;name&quot;: &quot;BON&quot;, &quot;version&quot;: &quot;1.0&quot; }&#39;</span></span>
<span class="line"><span></span></span></code></pre></div><p>输出：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;BON&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="使用模板" tabindex="-1">使用模板 <a class="header-anchor" href="#使用模板" aria-label="Permalink to “使用模板”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>bon -e &#39;</span></span>
<span class="line"><span>base_cpu-{&quot;cpu&quot;: &quot;250m&quot;}</span></span>
<span class="line"><span>base_mem-{&quot;memory&quot;: &quot;512Mi&quot;}</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;resources&quot;: {base_cpu},</span></span>
<span class="line"><span>    &quot;limits&quot;: {base_mem}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span></span></span></code></pre></div><p>输出：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;resources&quot;: {</span></span>
<span class="line"><span>    &quot;cpu&quot;: &quot;250m&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;limits&quot;: {</span></span>
<span class="line"><span>    &quot;memory&quot;: &quot;512Mi&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="使用类和继承" tabindex="-1">使用类和继承 <a class="header-anchor" href="#使用类和继承" aria-label="Permalink to “使用类和继承”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>bon -e &#39;</span></span>
<span class="line"><span>class Animal {</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;unknown&quot;,</span></span>
<span class="line"><span>    fn move() { return &quot;moving&quot; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Dog extends Animal {</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;canine&quot;,</span></span>
<span class="line"><span>    fn bark() { return &quot;woof!&quot; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Dog { &quot;breed&quot;: &quot;Husky&quot; }</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span></span></span></code></pre></div><p>输出：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;canine&quot;,</span></span>
<span class="line"><span>  &quot;breed&quot;: &quot;Husky&quot;,</span></span>
<span class="line"><span>  &quot;move&quot;: &quot;moving&quot;,</span></span>
<span class="line"><span>  &quot;bark&quot;: &quot;woof!&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="使用标准库" tabindex="-1">使用标准库 <a class="header-anchor" href="#使用标准库" aria-label="Permalink to “使用标准库”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>bon -e &#39;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;upper&quot;: std.upper(&quot;hello&quot;),</span></span>
<span class="line"><span>    &quot;split&quot;: std.split(&quot;a,b,c&quot;, &quot;,&quot;),</span></span>
<span class="line"><span>    &quot;map&quot;: std.map([1, 2, 3], fn(x) { return x * 2 }),</span></span>
<span class="line"><span>    &quot;len&quot;: std.len(&quot;hello&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span></span></span></code></pre></div><p>输出：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;upper&quot;: &quot;HELLO&quot;,</span></span>
<span class="line"><span>  &quot;split&quot;: [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;],</span></span>
<span class="line"><span>  &quot;map&quot;: [2, 4, 6],</span></span>
<span class="line"><span>  &quot;len&quot;: 5</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="在-python-代码中使用" tabindex="-1">在 Python 代码中使用 <a class="header-anchor" href="#在-python-代码中使用" aria-label="Permalink to “在 Python 代码中使用”">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import evaluate, load</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 解析 BON 表达式</span></span>
<span class="line"><span>result = evaluate(&#39;{ &quot;name&quot;: &quot;Alice&quot; }&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从文件加载</span></span>
<span class="line"><span>result = load(&quot;config.bon&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 访问结果</span></span>
<span class="line"><span>print(result[&quot;name&quot;])  # Alice</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="在-shell-脚本中使用" tabindex="-1">在 Shell 脚本中使用 <a class="header-anchor" href="#在-shell-脚本中使用" aria-label="Permalink to “在 Shell 脚本中使用”">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 解析配置文件</span></span>
<span class="line"><span>CONFIG=$(bon config.bon)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 提取值</span></span>
<span class="line"><span>NAME=$(bon -c -e &quot;config.bon&quot; | jq -r &#39;.name&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 管道处理</span></span>
<span class="line"><span>bon data.bon | jq &#39;.items[]&#39;</span></span>
<span class="line"><span></span></span></code></pre></div>`,30)])])}const b=a(l,[["render",o]]);export{h as __pageData,b as default};
