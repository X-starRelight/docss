import{_ as a,o as n,c as p,ak as e}from"./chunks/framework.D8TdBi6N.js";const h=JSON.parse('{"title":"bon-ts 库使用指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/how-to-use/ts.md","filePath":"zh/how-to-use/ts.md","lastUpdated":1782452117000}'),l={name:"zh/how-to-use/ts.md"};function t(o,s,i,c,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="bon-ts-库使用指南" tabindex="-1">bon-ts 库使用指南 <a class="header-anchor" href="#bon-ts-库使用指南" aria-label="Permalink to “bon-ts 库使用指南”">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>cd packages/bon-ts</span></span>
<span class="line"><span>npm install</span></span>
<span class="line"><span>npm run build</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to “快速开始”">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { evaluate, load } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 解析 BON 字符串</span></span>
<span class="line"><span>const result = evaluate(&#39;{ &quot;name&quot;: &quot;Alice&quot;, &quot;age&quot;: 30 }&#39;);</span></span>
<span class="line"><span>console.log(result); // { name: &quot;Alice&quot;, age: 30 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 从文件加载</span></span>
<span class="line"><span>const config = load(&quot;config.bon&quot;);</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="evaluate-source-string-basedir-string-params-record-string-unknown-unknown" tabindex="-1"><code>evaluate(source: string, baseDir?: string, params?: Record&lt;string, unknown&gt;): unknown</code> <a class="header-anchor" href="#evaluate-source-string-basedir-string-params-record-string-unknown-unknown" aria-label="Permalink to “evaluate(source: string, baseDir?: string, params?: Record&lt;string, unknown&gt;): unknown”">​</a></h3><p>解析并执行 BON 源码字符串，返回 JSON 兼容的 JavaScript 对象。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { evaluate } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 基础 JSON</span></span>
<span class="line"><span>const r1 = evaluate(&#39;{&quot;a&quot;: 1, &quot;b&quot;: [1, 2, 3]}&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用模板</span></span>
<span class="line"><span>const r2 = evaluate(\`</span></span>
<span class="line"><span>server-{&quot;host&quot;: &quot;localhost&quot;, &quot;port&quot;: 8080}</span></span>
<span class="line"><span>{&quot;server&quot;: {server}}</span></span>
<span class="line"><span>\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用编译时参数</span></span>
<span class="line"><span>const r3 = evaluate(&#39;{&quot;env&quot;: $env}&#39;, undefined, { env: &quot;production&quot; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用类</span></span>
<span class="line"><span>const r4 = evaluate(\`</span></span>
<span class="line"><span>class User {</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;Anonymous&quot;,</span></span>
<span class="line"><span>    fn greet() { return &quot;Hi, &quot; + self.name }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>User { &quot;name&quot;: &quot;Bob&quot; }.greet()</span></span>
<span class="line"><span>\`);</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="load-filepath-string-params-record-string-unknown-unknown" tabindex="-1"><code>load(filepath: string, params?: Record&lt;string, unknown&gt;): unknown</code> <a class="header-anchor" href="#load-filepath-string-params-record-string-unknown-unknown" aria-label="Permalink to “load(filepath: string, params?: Record&lt;string, unknown&gt;): unknown”">​</a></h3><p>从文件加载并执行 BON 代码。<code>baseDir</code> 自动设为文件所在目录。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { load } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const config = load(&quot;config.bon&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 带参数加载</span></span>
<span class="line"><span>const config = load(&quot;config.bon&quot;, { env: &quot;production&quot;, debug: true });</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="loads-source-string-basedir-string-unknown" tabindex="-1"><code>loads(source: string, baseDir?: string): unknown</code> <a class="header-anchor" href="#loads-source-string-basedir-string-unknown" aria-label="Permalink to “loads(source: string, baseDir?: string): unknown”">​</a></h3><p><code>evaluate</code> 的别名。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { loads } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const data = loads(&#39;{&quot;key&quot;: &quot;value&quot;}&#39;);</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="parse-source-string-filename-string-program" tabindex="-1"><code>parse(source: string, filename?: string): Program</code> <a class="header-anchor" href="#parse-source-string-filename-string-program" aria-label="Permalink to “parse(source: string, filename?: string): Program”">​</a></h3><p>将 BON 源码解析为 AST，不做求值。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { parse } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const program = parse(&#39;{&quot;x&quot;: 1}&#39;);</span></span>
<span class="line"><span>// program 是 Program AST 节点</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="evaluator-类" tabindex="-1"><code>Evaluator</code> 类 <a class="header-anchor" href="#evaluator-类" aria-label="Permalink to “Evaluator 类”">​</a></h3><p>底层求值器：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { Evaluator, parse } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const evaluator = new Evaluator(&quot;/path/to/project&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const program1 = parse(source1);</span></span>
<span class="line"><span>const result1 = evaluator.evaluate(program1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const program2 = parse(source2);</span></span>
<span class="line"><span>const result2 = evaluator.evaluate(program2);</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="evalerror" tabindex="-1"><code>EvalError</code> <a class="header-anchor" href="#evalerror" aria-label="Permalink to “EvalError”">​</a></h3><p>求值错误，包含错误码和位置：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { evaluate, EvalError } from &quot;bon-ts&quot;;</span></span>
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
<span class="line"><span></span></span></code></pre></div><h3 id="其他导出" tabindex="-1">其他导出 <a class="header-anchor" href="#其他导出" aria-label="Permalink to “其他导出”">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { Lexer, ast, stdlib } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Lexer - 词法分析器</span></span>
<span class="line"><span>const lexer = new Lexer(&#39;{&quot;x&quot;: 1}&#39;);</span></span>
<span class="line"><span>const tokens = lexer.tokens();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ast - AST 节点类型</span></span>
<span class="line"><span>// ast.Literal, ast.BinaryOp, ast.ClassDef 等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// stdlib - 标准库函数</span></span>
<span class="line"><span>// stdlib.STD_LIB 包含所有内置函数</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to “使用场景”">​</a></h2><h3 id="配置文件处理" tabindex="-1">配置文件处理 <a class="header-anchor" href="#配置文件处理" aria-label="Permalink to “配置文件处理”">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { load } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const config = load(&quot;config.bon&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const host = config.database.host;</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="模板系统" tabindex="-1">模板系统 <a class="header-anchor" href="#模板系统" aria-label="Permalink to “模板系统”">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { evaluate } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const source = \`</span></span>
<span class="line"><span>cpu_small-{&quot;cpu&quot;: &quot;100m&quot;, &quot;memory&quot;: &quot;128Mi&quot;}</span></span>
<span class="line"><span>cpu_large-{&quot;cpu&quot;: &quot;1000m&quot;, &quot;memory&quot;: &quot;1Gi&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;dev&quot;: {cpu_small},</span></span>
<span class="line"><span>    &quot;prod&quot;: {cpu_large}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const result = evaluate(source);</span></span>
<span class="line"><span>// result.dev === { cpu: &quot;100m&quot;, memory: &quot;128Mi&quot; }</span></span>
<span class="line"><span>// result.prod === { cpu: &quot;1000m&quot;, memory: &quot;1Gi&quot; }</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="数据转换管道" tabindex="-1">数据转换管道 <a class="header-anchor" href="#数据转换管道" aria-label="Permalink to “数据转换管道”">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { evaluate } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const source = \`</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;data&quot;: [1, 2, 3, 4, 5],</span></span>
<span class="line"><span>    &quot;doubled&quot;: std.map([1, 2, 3, 4, 5], fn(x) { return x * 2 }),</span></span>
<span class="line"><span>    &quot;filtered&quot;: std.filter([1, 2, 3, 4, 5], fn(x) { return x &gt; 3 }),</span></span>
<span class="line"><span>    &quot;sum&quot;: std.reduce([1, 2, 3, 4, 5], 0, fn(a, b) { return a + b })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const result = evaluate(source);</span></span>
<span class="line"><span>// result.doubled === [2, 4, 6, 8, 10]</span></span>
<span class="line"><span>// result.filtered === [4, 5]</span></span>
<span class="line"><span>// result.sum === 15</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="与-json-互操作" tabindex="-1">与 JSON 互操作 <a class="header-anchor" href="#与-json-互操作" aria-label="Permalink to “与 JSON 互操作”">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { evaluate } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// BON 是 JSON 的超集</span></span>
<span class="line"><span>const data = evaluate(&#39;{&quot;name&quot;: &quot;test&quot;, &quot;items&quot;: [1, 2, 3]}&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 转回 JSON</span></span>
<span class="line"><span>console.log(JSON.stringify(data, null, 2));</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="在-node-js-项目中使用" tabindex="-1">在 Node.js 项目中使用 <a class="header-anchor" href="#在-node-js-项目中使用" aria-label="Permalink to “在 Node.js 项目中使用”">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { load } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 加载项目配置</span></span>
<span class="line"><span>const config = load(&quot;project.bon&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 用配置初始化服务</span></span>
<span class="line"><span>const server = {</span></span>
<span class="line"><span>  host: config.server.host,</span></span>
<span class="line"><span>  port: config.server.port,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(\`Starting on \${server.host}:\${server.port}\`);</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="typescript-类型安全" tabindex="-1">TypeScript 类型安全 <a class="header-anchor" href="#typescript-类型安全" aria-label="Permalink to “TypeScript 类型安全”">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import { evaluate } from &quot;bon-ts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface AppConfig {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  version: string;</span></span>
<span class="line"><span>  database: {</span></span>
<span class="line"><span>    host: string;</span></span>
<span class="line"><span>    port: number;</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const config = evaluate(\`</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;my-app&quot;,</span></span>
<span class="line"><span>    &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>    &quot;database&quot;: {</span></span>
<span class="line"><span>        &quot;host&quot;: &quot;localhost&quot;,</span></span>
<span class="line"><span>        &quot;port&quot;: 5432</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`) as AppConfig;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 现在有完整的类型提示</span></span>
<span class="line"><span>console.log(config.database.host);</span></span>
<span class="line"><span></span></span></code></pre></div>`,39)])])}const g=a(l,[["render",t]]);export{h as __pageData,g as default};
