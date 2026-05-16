import{c as a,U as n,j as i,m as p}from"./chunks/framework.DQFmIr4R.js";const r=JSON.parse('{"title":"原始载荷格式","description":"","frontmatter":{},"headers":[],"relativePath":"zh/specification/payload.md","filePath":"zh/specification/payload.md","lastUpdated":0}'),l={name:"zh/specification/payload.md"};function t(e,s,h,k,o,c){return n(),i("div",null,[...s[0]||(s[0]=[p(`<h1 id="原始载荷格式" tabindex="-1">原始载荷格式 <a class="header-anchor" href="#原始载荷格式" aria-label="Permalink to “原始载荷格式”">​</a></h1><p>原始载荷是压缩与混淆之前的二进制数据，根据 Flat 和 ExtInfo 标志位分为三种模式。</p><hr><h2 id="目录树模式-flat-0" tabindex="-1">目录树模式（Flat = 0） <a class="header-anchor" href="#目录树模式-flat-0" aria-label="Permalink to “目录树模式（Flat = 0）”">​</a></h2><p>保留完整目录结构，通过 JSON 元数据描述文件树。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>┌──────────────────────────────────────┐</span></span>
<span class="line"><span>│ JSON 长度 (4 bytes, uint32 LE)       │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ JSON 文本 (UTF-8, 无 BOM)            │</span></span>
<span class="line"><span>│   {                                  │</span></span>
<span class="line"><span>│     &quot;v&quot;: 1,                          │</span></span>
<span class="line"><span>│     &quot;m&quot;: { /* manifest */ },         │</span></span>
<span class="line"><span>│     &quot;t&quot;: { /* 文件树 */ }            │</span></span>
<span class="line"><span>│   }                                  │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ 文件块 (所有文件原始字节依次拼接)      │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ (可选) 自定义数据段                   │</span></span>
<span class="line"><span>└──────────────────────────────────────┘</span></span></code></pre></div><h3 id="json-结构" tabindex="-1">JSON 结构 <a class="header-anchor" href="#json-结构" aria-label="Permalink to “JSON 结构”">​</a></h3><p>顶层字段：</p><ul><li><code>v</code> — 载荷版本，当前为 <code>1</code></li><li><code>m</code> — manifest 对象（从源目录 <code>manifest.json</code> 读取，透传）</li><li><code>t</code> — 文件树，根节点为对象，每个键对应一个条目：</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;subdir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;file.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;o&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;s&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1024&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;image.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;o&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1024&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;s&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;65536&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;readme.md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;o&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;67584&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;s&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2048&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>目录节点：包含 <code>&quot;c&quot;</code>（children），值为子条目对象</li><li>文件节点：包含 <code>&quot;o&quot;</code>（offset）和 <code>&quot;s&quot;</code>（size），均以 <strong>字符串</strong> 表示，避免 JavaScript 浮点数精度丢失</li><li>offset 从文件块起始处计算</li></ul><hr><h2 id="扁平模式-–-标准-flat-1-extinfo-0" tabindex="-1">扁平模式 – 标准（Flat = 1, ExtInfo = 0） <a class="header-anchor" href="#扁平模式-–-标准-flat-1-extinfo-0" aria-label="Permalink to “扁平模式 – 标准（Flat = 1, ExtInfo = 0）”">​</a></h2><p>所有文件必须位于根目录，无子文件夹。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>┌──────────────────────────────────────┐</span></span>
<span class="line"><span>│ 文件数量 (2 bytes, uint16 LE)        │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ 文件条目 1:                          │</span></span>
<span class="line"><span>│   - 文件名长度 (2 bytes, uint16 LE)  │</span></span>
<span class="line"><span>│   - 文件名 (UTF-8)                   │</span></span>
<span class="line"><span>│   - 内容长度 (4 bytes, uint32 LE)    │</span></span>
<span class="line"><span>│   - 内容 (原始字节)                  │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ 文件条目 2:                          │</span></span>
<span class="line"><span>│   ...                                │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ Manifest 长度 (4 bytes, uint32 LE)   │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ Manifest 文本 (UTF-8 JSON)           │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ (可选) 自定义数据段                   │</span></span>
<span class="line"><span>└──────────────────────────────────────┘</span></span></code></pre></div><p><strong>限制</strong>：文件数 ≤ 65535，单文件大小 &lt; 4 GiB。</p><hr><h2 id="扁平模式-–-扩展-flat-1-extinfo-1" tabindex="-1">扁平模式 – 扩展（Flat = 1, ExtInfo = 1） <a class="header-anchor" href="#扁平模式-–-扩展-flat-1-extinfo-1" aria-label="Permalink to “扁平模式 – 扩展（Flat = 1, ExtInfo = 1）”">​</a></h2><p>支持超过 65535 个文件或单文件 ≥ 4 GiB。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>┌──────────────────────────────────────┐</span></span>
<span class="line"><span>│ 文件数量 (8 bytes, uint64 LE)        │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ 文件条目 1:                          │</span></span>
<span class="line"><span>│   - 文件名长度 (2 bytes, uint16 LE)  │</span></span>
<span class="line"><span>│   - 文件名 (UTF-8)                   │</span></span>
<span class="line"><span>│   - 基本内容长度 (4 bytes, uint32 LE)│</span></span>
<span class="line"><span>│   - (如果基本长度 == 0xFFFFFFFF)      │</span></span>
<span class="line"><span>│     扩展内容长度 (8 bytes, uint64 LE) │</span></span>
<span class="line"><span>│   - 内容 (原始字节)                  │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ ...                                  │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ Manifest 长度 (4 bytes, uint32 LE)   │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ Manifest 文本 (UTF-8 JSON)           │</span></span>
<span class="line"><span>├──────────────────────────────────────┤</span></span>
<span class="line"><span>│ (可选) 自定义数据段                   │</span></span>
<span class="line"><span>└──────────────────────────────────────┘</span></span></code></pre></div><h3 id="长度扩展规则-zip64-式" tabindex="-1">长度扩展规则（ZIP64 式） <a class="header-anchor" href="#长度扩展规则-zip64-式" aria-label="Permalink to “长度扩展规则（ZIP64 式）”">​</a></h3><ul><li>基本内容长度字段（4 bytes）始终存在</li><li>若该值 ≠ <code>0xFFFFFFFF</code>，则为真实文件大小</li><li>若该值 = <code>0xFFFFFFFF</code>，则紧跟 8 bytes uint64 作为真实大小</li></ul>`,22)])])}const E=a(l,[["render",t]]);export{r as __pageData,E as default};
