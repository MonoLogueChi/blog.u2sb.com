import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a,b as h,e as s,d as t,w as d,r as k,o as p}from"./app-CnYccAH2.js";const r={};function c(g,i){const e=k("RouteLink");return p(),l("div",null,[i[3]||(i[3]=a('<p>这一节来安装 Web 服务器，Caddy 和 Nginx 看个人喜好</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请勿照搬本文中的命令，请先理解命令，然后检查自己的实际情况是否和本文相同，并且正确替换用户名和目录。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>caddy 详细内容请看<a href="https://caddyserver.com/docs/" target="_blank" rel="noopener noreferrer">文档</a></p></div><h2 id="安装-caddy" tabindex="-1"><a class="header-anchor" href="#安装-caddy"><span>安装 Caddy</span></a></h2>',4)),h("p",null,[i[1]||(i[1]=s("这里选择自行编译，可以看我以前发的")),t(e,{to:"/2023/05210.%E7%BC%96%E8%AF%91Caddy%E5%B9%B6%E4%BD%BF%E7%94%A8.html"},{default:d(()=>i[0]||(i[0]=[s("文章")])),_:1}),i[2]||(i[2]=s("。"))]),i[4]||(i[4]=a(`<p>使用 vscode 打开前面创建好的 www 目录，创建一个 caddy 目录。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> caddy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> caddy/bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后将二进制文件上传到 caddy/bin 目录，再授予运行权限。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> caddy</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bin/caddy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><p>首先在 vscode 服务端安装插件 <a href="https://marketplace.visualstudio.com/items?itemName=matthewpi.caddyfile-support" target="_blank" rel="noopener noreferrer">Caddyfile Support</a>，并配置远程设置，可能需要关闭远程并重新登录才能看到配置选项。</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;caddyfile.executable&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/home/ubuntu/www/caddy/bin/caddy&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建配置文件，并编辑</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">code</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Caddyfile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>写入配置并保存</p><div class="language-caddy line-numbers-mode" data-highlighter="shiki" data-ext="caddy" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 全局设置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">    email</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> xxwhite@foxmail.com</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">    log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        level error</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        output file /home/ubuntu/www/caddy/logs/log.json</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">    storage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> file_system /home/ubuntu/www/caddy/.caddy</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">    servers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> :443 {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        protocols h1 h2 h3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 导入配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> conf.d</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">/*.caddyfile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建其他目录</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> conf.d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .caddy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置守护进程" tabindex="-1"><a class="header-anchor" href="#配置守护进程"><span>配置守护进程</span></a></h2><p>创建 <code>caddy.service</code></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">code</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> caddy.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>编写内容并保存</p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">Caddy</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Documentation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">https://caddyserver.com/docs/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">After</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">network.target network-online.target</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Requires</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">notify</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">ubuntu</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">ubuntu</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">ExecStart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">/home/ubuntu/www/caddy/bin/caddy run --environ --config /home/ubuntu/www/caddy/Caddyfile</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">ExecReload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">/home/ubuntu/www/caddy/bin/caddy reload --config /home/ubuntu/www/caddy/Caddyfile --force</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">TimeoutStopSec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">5s</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">LimitNOFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">1048576</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">LimitNPROC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">512</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">PrivateDevices</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">PrivateTmp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">ProtectSystem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">full</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">AmbientCapabilities</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">CAP_NET_BIND_SERVICE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">WantedBy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">multi-user.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下命令，添加开机启动</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/ubuntu/www/caddy/caddy.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>尝试启动</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> caddy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置泛域名证书" tabindex="-1"><a class="header-anchor" href="#配置泛域名证书"><span>配置泛域名证书</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>我这样只是其中一种配置方法，不是唯一，而且存在一定弊端，就是添加新的泛域名证书时，一定要先成功申请证书，再去添加相关站点配置，否则会因为证书文件不存在导致启动失败。</p></div><p>修改 <code>Caddyfile</code> 全局配置</p><div class="language-caddy line-numbers-mode" data-highlighter="shiki" data-ext="caddy" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 全局设置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">    email</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> xxwhite@foxmail.com</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">    log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        level error</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        output file /home/ubuntu/www/caddy/logs/log.json</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">    storage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> file_system /home/ubuntu/www/caddy/.caddy</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">    servers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> :443 {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        protocols h1 h2 h3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 匹配所有域名</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">*.u</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">2sb.com:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    tls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        dns</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  alidns {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            access_key_id</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> {env.ALIYUN_ACCESS_KEY_ID}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            access_key_secret</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> {env.ALIYUN_ACCESS_KEY_SECRET}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    respond</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 400</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 导入配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> conf.d</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">/*.caddyfile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 caddy</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> caddy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后看日志输出和 <code>.caddy</code> 目录下证书是否正常申请到。</p><p>如果证书能正常申请到，就可以按照以下步骤继续做，否则就要尝试排查错误，这部分不在本文范围呢。</p><p>添加一个片段文件，方便以后导入</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> conf.d/snippets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">code</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> conf.d/snippets/tls.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>写入内容并保存</p><div class="language-caddy line-numbers-mode" data-highlighter="shiki" data-ext="caddy" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tls</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> /home/ubuntu/www/caddy/.caddy/certificates/acme-v02.api.letsencrypt.org-directory/{args.0}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">{args.0}.crt</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> /home/ubuntu/www/caddy/.caddy/certificates/acme-v02.api.letsencrypt.org-directory/{args.0}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">{args.0}.key</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>再创建一个文件</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">code</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> conf.d/snippets/u2sb.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>写入内容并保存</p><div class="language-caddy line-numbers-mode" data-highlighter="shiki" data-ext="caddy" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">import</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> tls.conf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> wildcard_.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">u2sb.com</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">encode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> zstd br gzip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">file_server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以在其他站点配置里引用这段代配置文件了</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">code</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> conf.d/my-server.u2sb.com.caddyfile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后编辑并保存</p><div class="language-caddy line-numbers-mode" data-highlighter="shiki" data-ext="caddy" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">my-server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">u2sb.com:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> snippets</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">/u2sb.conf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    root</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> *</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> /home/ubuntu/www/wwwroot/my-server.u2sb.com/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启服务并测试</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> caddy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,44))])}const y=n(r,[["render",c]]),b=JSON.parse('{"path":"/2023/05220.%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AAWeb%E6%9C%8D%E5%8A%A1%E5%99%A8/0040.%E5%AE%89%E8%A3%85Caddy%E4%BD%9C%E4%B8%BAWeb%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"安装Caddy作为Web服务器","lang":"zh-CN","frontmatter":{"title":"安装Caddy作为Web服务器","date":"2023-05-28T00:00:00.000Z","order":32,"article":false,"timeline":false,"description":"这一节来安装 Web 服务器，Caddy 和 Nginx 看个人喜好","head":[["meta",{"property":"og:url","content":"https://blog.u2sb.com/2023/05220.%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AAWeb%E6%9C%8D%E5%8A%A1%E5%99%A8/0040.%E5%AE%89%E8%A3%85Caddy%E4%BD%9C%E4%B8%BAWeb%E6%9C%8D%E5%8A%A1%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"叉叉白"}],["meta",{"property":"og:title","content":"安装Caddy作为Web服务器"}],["meta",{"property":"og:description","content":"这一节来安装 Web 服务器，Caddy 和 Nginx 看个人喜好"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-06T05:10:35.000Z"}],["meta",{"property":"article:published_time","content":"2023-05-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-06T05:10:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"安装Caddy作为Web服务器\\",\\"description\\":\\"这一节来安装 Web 服务器，Caddy 和 Nginx 看个人喜好\\"}"]]},"git":{"createdTime":1743916235000,"updatedTime":1743916235000,"contributors":[{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite@foxmail.com","commits":1,"url":"https://github.com/MonoLogueChi"}]},"readingTime":{"minutes":2.4,"words":720},"filePathRelative":"2023/05220.从零开始搭建一个Web服务器/0040.安装Caddy作为Web服务器.md","localizedDate":"2023年5月28日","excerpt":"<p>这一节来安装 Web 服务器，Caddy 和 Nginx 看个人喜好</p>\\n","autoDesc":true}');export{y as comp,b as data};
