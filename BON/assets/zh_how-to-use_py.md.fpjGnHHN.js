import{_ as s,o as n,c as p,ak as e}from"./chunks/framework.D8TdBi6N.js";const h=JSON.parse('{"title":"bon-py 库使用指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/how-to-use/py.md","filePath":"zh/how-to-use/py.md","lastUpdated":1782452117000}'),l={name:"zh/how-to-use/py.md"};function o(t,a,i,r,c,u){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="bon-py-库使用指南" tabindex="-1">bon-py 库使用指南 <a class="header-anchor" href="#bon-py-库使用指南" aria-label="Permalink to “bon-py 库使用指南”">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>pip install -e packages/bon-py</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to “快速开始”">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import evaluate, load</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 解析 BON 字符串</span></span>
<span class="line"><span>result = evaluate(&#39;{ &quot;name&quot;: &quot;Alice&quot;, &quot;age&quot;: 30 }&#39;)</span></span>
<span class="line"><span>print(result)  # {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 30}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从文件加载</span></span>
<span class="line"><span>result = load(&quot;config.bon&quot;)</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="evaluate-source-str-base-dir-str-params-dict-str-any-none-any" tabindex="-1"><code>evaluate(source: str, base_dir: str = &quot;.&quot;, params: dict[str, Any] = None) -&gt; Any</code> <a class="header-anchor" href="#evaluate-source-str-base-dir-str-params-dict-str-any-none-any" aria-label="Permalink to “evaluate(source: str, base_dir: str = &quot;.&quot;, params: dict[str, Any] = None) -&gt; Any”">​</a></h3><p>解析并执行 BON 源码字符串，返回 JSON 兼容的 Python 对象。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import evaluate</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 基础 JSON</span></span>
<span class="line"><span>result = evaluate(&#39;{&quot;a&quot;: 1, &quot;b&quot;: [1, 2, 3]}&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使用模板</span></span>
<span class="line"><span>result = evaluate(&#39;&#39;&#39;</span></span>
<span class="line"><span>server-{&quot;host&quot;: &quot;localhost&quot;, &quot;port&quot;: 8080}</span></span>
<span class="line"><span>{&quot;server&quot;: {server}}</span></span>
<span class="line"><span>&#39;&#39;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使用编译时参数</span></span>
<span class="line"><span>result = evaluate(&#39;{&quot;env&quot;: $env, &quot;debug&quot;: $debug}&#39;, params={&quot;env&quot;: &quot;production&quot;, &quot;debug&quot;: False})</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使用类</span></span>
<span class="line"><span>result = evaluate(&#39;&#39;&#39;</span></span>
<span class="line"><span>class User {</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;Anonymous&quot;,</span></span>
<span class="line"><span>    fn greet() { return &quot;Hi, &quot; + self.name }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>User { &quot;name&quot;: &quot;Bob&quot; }.greet()</span></span>
<span class="line"><span>&#39;&#39;&#39;)</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="load-filepath-str-params-dict-str-any-none-any" tabindex="-1"><code>load(filepath: str, params: dict[str, Any] = None) -&gt; Any</code> <a class="header-anchor" href="#load-filepath-str-params-dict-str-any-none-any" aria-label="Permalink to “load(filepath: str, params: dict[str, Any] = None) -&gt; Any”">​</a></h3><p>从文件加载并执行 BON 代码。<code>base_dir</code> 自动设为文件所在目录，import 路径基于此解析。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import load</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 基础加载</span></span>
<span class="line"><span>config = load(&quot;config.bon&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 带参数加载</span></span>
<span class="line"><span>config = load(&quot;config.bon&quot;, params={&quot;env&quot;: &quot;production&quot;, &quot;debug&quot;: True})</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="loads-source-str-base-dir-str-any" tabindex="-1"><code>loads(source: str, base_dir: str = &quot;.&quot;) -&gt; Any</code> <a class="header-anchor" href="#loads-source-str-base-dir-str-any" aria-label="Permalink to “loads(source: str, base_dir: str = &quot;.&quot;) -&gt; Any”">​</a></h3><p><code>evaluate</code> 的别名，保持与 <code>json.loads</code> 一致的命名风格。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import loads</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data = loads(&#39;{&quot;key&quot;: &quot;value&quot;}&#39;)</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="parse-source-str-filename-str-stdin-program" tabindex="-1"><code>parse(source: str, filename: str = &quot;&lt;stdin&gt;&quot;) -&gt; Program</code> <a class="header-anchor" href="#parse-source-str-filename-str-stdin-program" aria-label="Permalink to “parse(source: str, filename: str = &quot;&lt;stdin&gt;&quot;) -&gt; Program”">​</a></h3><p>将 BON 源码解析为 AST（抽象语法树），不做求值。用于需要检查语法或转换的场景。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import parse</span></span>
<span class="line"><span></span></span>
<span class="line"><span>program = parse(&#39;{&quot;x&quot;: 1}&#39;)</span></span>
<span class="line"><span># program 是 Program AST 节点</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="evaluator-类" tabindex="-1"><code>Evaluator</code> 类 <a class="header-anchor" href="#evaluator-类" aria-label="Permalink to “Evaluator 类”">​</a></h3><p>底层求值器，提供更多控制：</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import Evaluator, parse</span></span>
<span class="line"><span></span></span>
<span class="line"><span>evaluator = Evaluator(base_dir=&quot;/path/to/project&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 可复用同一个求值器执行多个文件</span></span>
<span class="line"><span>program1 = parse(source1)</span></span>
<span class="line"><span>result1 = evaluator.evaluate(program1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>program2 = parse(source2)</span></span>
<span class="line"><span>result2 = evaluator.evaluate(program2)</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="evalerror" tabindex="-1"><code>EvalError</code> <a class="header-anchor" href="#evalerror" aria-label="Permalink to “EvalError”">​</a></h3><p>求值错误，包含错误码和位置信息。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import evaluate, EvalError</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>    result = evaluate(&#39;undefined_var&#39;)</span></span>
<span class="line"><span>except EvalError as e:</span></span>
<span class="line"><span>    print(f&quot;错误码: {e.code}&quot;)    # E001</span></span>
<span class="line"><span>    print(f&quot;错误信息: {e}&quot;)</span></span>
<span class="line"><span>    if e.pos:</span></span>
<span class="line"><span>        print(f&quot;位置: 第 {e.pos.line} 行, 第 {e.pos.column} 列&quot;)</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to “使用场景”">​</a></h2><h3 id="配置文件处理" tabindex="-1">配置文件处理 <a class="header-anchor" href="#配置文件处理" aria-label="Permalink to “配置文件处理”">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import load</span></span>
<span class="line"><span></span></span>
<span class="line"><span># config.bon 中可以使用模板、类继承等</span></span>
<span class="line"><span>config = load(&quot;config.bon&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>database_host = config[&quot;database&quot;][&quot;host&quot;]</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="模板系统" tabindex="-1">模板系统 <a class="header-anchor" href="#模板系统" aria-label="Permalink to “模板系统”">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import evaluate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>source = &#39;&#39;&#39;</span></span>
<span class="line"><span>cpu_small-{&quot;cpu&quot;: &quot;100m&quot;, &quot;memory&quot;: &quot;128Mi&quot;}</span></span>
<span class="line"><span>cpu_large-{&quot;cpu&quot;: &quot;1000m&quot;, &quot;memory&quot;: &quot;1Gi&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;dev&quot;: {cpu_small},</span></span>
<span class="line"><span>    &quot;prod&quot;: {cpu_large}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>result = evaluate(source)</span></span>
<span class="line"><span># result[&quot;dev&quot;] == {&quot;cpu&quot;: &quot;100m&quot;, &quot;memory&quot;: &quot;128Mi&quot;}</span></span>
<span class="line"><span># result[&quot;prod&quot;] == {&quot;cpu&quot;: &quot;1000m&quot;, &quot;memory&quot;: &quot;1Gi&quot;}</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="数据转换管道" tabindex="-1">数据转换管道 <a class="header-anchor" href="#数据转换管道" aria-label="Permalink to “数据转换管道”">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from bon_py.evaluator import evaluate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>source = &#39;&#39;&#39;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;data&quot;: [1, 2, 3, 4, 5],</span></span>
<span class="line"><span>    &quot;doubled&quot;: std.map([1, 2, 3, 4, 5], fn(x) { return x * 2 }),</span></span>
<span class="line"><span>    &quot;filtered&quot;: std.filter([1, 2, 3, 4, 5], fn(x) { return x &gt; 3 }),</span></span>
<span class="line"><span>    &quot;sum&quot;: std.reduce([1, 2, 3, 4, 5], 0, fn(a, b) { return a + b })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>result = evaluate(source)</span></span>
<span class="line"><span># result[&quot;doubled&quot;] == [2, 4, 6, 8, 10]</span></span>
<span class="line"><span># result[&quot;filtered&quot;] == [4, 5]</span></span>
<span class="line"><span># result[&quot;sum&quot;] == 15</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="与-json-互操作" tabindex="-1">与 JSON 互操作 <a class="header-anchor" href="#与-json-互操作" aria-label="Permalink to “与 JSON 互操作”">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>import json</span></span>
<span class="line"><span>from bon_py.evaluator import evaluate</span></span>
<span class="line"><span></span></span>
<span class="line"><span># BON 是 JSON 的超集，标准 JSON 也能解析</span></span>
<span class="line"><span>json_str = &#39;{&quot;name&quot;: &quot;test&quot;, &quot;items&quot;: [1, 2, 3]}&#39;</span></span>
<span class="line"><span>result = evaluate(json_str)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 转回 JSON</span></span>
<span class="line"><span>print(json.dumps(result, indent=2))</span></span>
<span class="line"><span></span></span></code></pre></div><h3 id="批量处理文件" tabindex="-1">批量处理文件 <a class="header-anchor" href="#批量处理文件" aria-label="Permalink to “批量处理文件”">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee;" tabindex="0"><code><span class="line"><span>from pathlib import Path</span></span>
<span class="line"><span>from bon_py.evaluator import load</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for bon_file in Path(&quot;configs&quot;).glob(&quot;*.bon&quot;):</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        config = load(str(bon_file))</span></span>
<span class="line"><span>        print(f&quot;{bon_file.name}: {config}&quot;)</span></span>
<span class="line"><span>    except Exception as e:</span></span>
<span class="line"><span>        print(f&quot;{bon_file.name} 解析失败: {e}&quot;)</span></span>
<span class="line"><span></span></span></code></pre></div>`,35)])])}const b=s(l,[["render",o]]);export{h as __pageData,b as default};
