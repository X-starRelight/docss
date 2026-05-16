import{c as n,U as s,j as t,m as p}from"./chunks/framework.DQFmIr4R.js";const m=JSON.parse('{"title":"TTP 格式规范 v1 — 文档目录","description":"","frontmatter":{},"headers":[],"relativePath":"zh/index.md","filePath":"zh/index.md","lastUpdated":0}'),e={name:"zh/index.md"};function i(l,a,d,c,r,o){return s(),t("div",null,[...a[0]||(a[0]=[p(`<h1 id="ttp-格式规范-v1-—-文档目录" tabindex="-1">TTP 格式规范 v1 — 文档目录 <a class="header-anchor" href="#ttp-格式规范-v1-—-文档目录" aria-label="Permalink to “TTP 格式规范 v1 — 文档目录”">​</a></h1><p>TTP（Tuple-based Transfer Protocol / TT Pack）是 TT23XR Studio 专用的二进制包格式，前身为 VHP。它使用压缩与 S-Box 置换混淆生成不可读的纯二进制文件，支持分卷存储和可选的自定义数据段。</p><h2 id="文档结构" tabindex="-1">文档结构 <a class="header-anchor" href="#文档结构" aria-label="Permalink to “文档结构”">​</a></h2><table tabindex="0"><thead><tr><th>路径</th><th>内容</th></tr></thead><tbody><tr><td><a href="./specification/header.html">specification/header.md</a></td><td>26 字节头部字段表与配置字节位域</td></tr><tr><td><a href="./specification/payload.html">specification/payload.md</a></td><td>原始载荷三种模式：目录树 / 扁平标准 / 扁平扩展</td></tr><tr><td><a href="./specification/compression.html">specification/compression.md</a></td><td>支持的压缩算法参数</td></tr><tr><td><a href="./specification/obfuscation.html">specification/obfuscation.md</a></td><td>S-Box 置换盒种子与生成算法</td></tr><tr><td><a href="./specification/volumes.html">specification/volumes.md</a></td><td>单卷 / 分卷命名与拼接规则</td></tr><tr><td><a href="./implementation/pack-flow.html">implementation/pack-flow.md</a></td><td>打包完整流程</td></tr><tr><td><a href="./implementation/unpack-flow.html">implementation/unpack-flow.md</a></td><td>解包完整流程</td></tr><tr><td><a href="./implementation/edge-cases.html">implementation/edge-cases.md</a></td><td>边界情况处理</td></tr><tr><td><a href="./implementation/custom-data.html">implementation/custom-data.md</a></td><td>自定义数据段规则与用途</td></tr><tr><td><a href="./api/python.html">api/python.md</a></td><td>Python API 参考</td></tr><tr><td><a href="./api/javascript.html">api/javascript.md</a></td><td>JavaScript API 参考</td></tr><tr><td><a href="./changelog.html">changelog.md</a></td><td>版本变更记录</td></tr></tbody></table><h2 id="数据体生命周期" tabindex="-1">数据体生命周期 <a class="header-anchor" href="#数据体生命周期" aria-label="Permalink to “数据体生命周期”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>原始文件/目录</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ▼</span></span>
<span class="line"><span>┌─────────────────────┐</span></span>
<span class="line"><span>│  构建原始载荷        │  pack-flow.md</span></span>
<span class="line"><span>│  (三种模式之一)      │</span></span>
<span class="line"><span>└────────┬────────────┘</span></span>
<span class="line"><span>         │</span></span>
<span class="line"><span>         ▼</span></span>
<span class="line"><span>┌─────────────────────┐</span></span>
<span class="line"><span>│  压缩                │  compression.md</span></span>
<span class="line"><span>│  LZMA / Brotli /    │</span></span>
<span class="line"><span>│  Deflate             │</span></span>
<span class="line"><span>└────────┬────────────┘</span></span>
<span class="line"><span>         │</span></span>
<span class="line"><span>         ▼</span></span>
<span class="line"><span>┌─────────────────────┐</span></span>
<span class="line"><span>│  S-Box 置换混淆      │  obfuscation.md</span></span>
<span class="line"><span>└────────┬────────────┘</span></span>
<span class="line"><span>         │</span></span>
<span class="line"><span>         ▼</span></span>
<span class="line"><span>┌─────────────────────┐</span></span>
<span class="line"><span>│  分卷 (可选)         │  volumes.md</span></span>
<span class="line"><span>└────────┬────────────┘</span></span>
<span class="line"><span>         │</span></span>
<span class="line"><span>         ▼</span></span>
<span class="line"><span>     .ttp 文件</span></span></code></pre></div><p>解包为上述流程的逆向。</p>`,7)])])}const f=n(e,[["render",i]]);export{m as __pageData,f as default};
