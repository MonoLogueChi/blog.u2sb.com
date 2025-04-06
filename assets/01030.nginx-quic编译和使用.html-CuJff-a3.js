import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as l}from"./app-CnYccAH2.js";const e={};function t(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<p>最近又打算从 caddy 换回 nginx 了，简单记录一下一些操作。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>官方已发布预览版二进制包，通常情况下不需要自己手动编译了，详见 <a href="https://quic.nginx.org/packages.html" target="_blank" rel="noopener noreferrer">https://quic.nginx.org/packages.html</a></p></div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><p>当前这个阶段，nginx 默认还是不支持 http3 的，但是 nginx-quic 分支是可以使用的。</p><p>(下面的不要照抄代码，理解了再去执行，一定要先知道每一句都是在做什么，如果系统不一样，或者版本不一致，一定要检查一下)</p><h2 id="准备编译环境" tabindex="-1"><a class="header-anchor" href="#准备编译环境"><span>准备编译环境</span></a></h2><p>本文以 ubuntu 22.10 为例</p><p>首先确保软件已更新到最新</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upgrade</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build-essential</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libtool</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libpcre3-dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zlib1g-dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libzstd-dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cmake</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ninja-build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> golang</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="准备源码和编译" tabindex="-1"><a class="header-anchor" href="#准备源码和编译"><span>准备源码和编译</span></a></h2><p>下面是一些需要准备的源码</p><ul><li><a href="https://hg.nginx.org/nginx-quic" target="_blank" rel="noopener noreferrer">nginx-quic</a></li><li><a href="https://github.com/google/boringssl" target="_blank" rel="noopener noreferrer">boringssl</a></li><li><a href="https://github.com/google/ngx_brotli" target="_blank" rel="noopener noreferrer">ngx_brotli</a></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx-src</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx-src</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译-boringssl" tabindex="-1"><a class="header-anchor" href="#编译-boringssl"><span>编译 boringssl</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/google/boringssl.git</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> boringssl/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cmake</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -GNinja</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ..</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ninja</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载-ngx-brotli" tabindex="-1"><a class="header-anchor" href="#下载-ngx-brotli"><span>下载 ngx_brotli</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ../../</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">       //</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx-src目录下</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --recurse-submodules</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/google/ngx_brotli.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载-zstd-nginx-module" tabindex="-1"><a class="header-anchor" href="#下载-zstd-nginx-module"><span>下载 zstd-nginx-module</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --recurse-submodules</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/tokers/zstd-nginx-module.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="下载-nginx-quic" tabindex="-1"><a class="header-anchor" href="#下载-nginx-quic"><span>下载 nginx-quic</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://hg.nginx.org/nginx-quic/archive/tip.zip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tip.zip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tip.zip</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx-quic-af5adec171b4/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译"><span>编译</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./auto/configure</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --with-http_gzip_static_module</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --with-http_ssl_module</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --with-http_v2_module</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --with-http_v3_module</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --with-stream_quic_module</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --with-cc-opt=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;-I../boringssl/include&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --with-ld-opt=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;-L../boringssl/build/ssl -L../boringssl/build/crypto&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-module=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;../ngx_brotli&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-module=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;../zstd-nginx-module&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx"><span>安装 nginx</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="配置进程守护" tabindex="-1"><a class="header-anchor" href="#配置进程守护"><span>配置进程守护</span></a></h3><p>创建并编辑文件 <code>/home/mc/www/nginx/nginx.service</code></p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">nginx - high performance web server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">After</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">network.target remote-fs.target nss-lookup.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">forking</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">PIDFile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">/usr/local/nginx/logs/nginx.pid</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">ExecStartPre</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">ExecStart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">ExecReload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">/usr/local/nginx/sbin/nginx -s reload</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">ExecStop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">/usr/local/nginx/sbin/nginx -s stop</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">PrivateTmp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">WantedBy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">multi-user.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置开机启动</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/mc/www/nginx/nginx.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="编辑配置文件" tabindex="-1"><a class="header-anchor" href="#编辑配置文件"><span>编辑配置文件</span></a></h2><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件"><span>修改配置文件</span></a></h3><p>创建并编辑文件 <code>/home/mc/www/nginx/nginx.conf</code></p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">zstd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">brotli</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">gzip </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">zstd_static</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">brotli_static</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">gzip_static </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">zstd_types</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> text/plain application/css text/css application/xml text/javascript application/javascript application/x-javascript application/json;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">brotli_types</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> text/plain application/css text/css application/xml text/javascript application/javascript application/x-javascript application/json;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">gzip_types </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">text/plain application/css text/css application/xml text/javascript application/javascript application/x-javascript application/json;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    server_name </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">html;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        index </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    error_page </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">500</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 502</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 503</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 504</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /50x.html;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">/50x.html </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">html;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑文件 <code>/usr/local/nginx/conf/nginx.conf</code></p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#user  nobody;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">worker_processes </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">events</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    worker_connections </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1024</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    include </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      mime.types;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    default_type </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #access_log  logs/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    sendfile </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">       on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    keepalive_timeout </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 65</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    include </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/home/mc/www/nginx/nginx.conf;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，以后大部分配置就可以通过修改 <code>/home/mc/www/nginx/nginx.conf</code> 完成了。</p><h3 id="配置-http3" tabindex="-1"><a class="header-anchor" href="#配置-http3"><span>配置 http3</span></a></h3><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> http3 reuseport;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ssl http2;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    server_name </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">xx.xxwhite.com;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    ssl_protocols </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    add_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Alt-Svc </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;h3=&quot;:443&quot;; ma=86400; h3-29=&quot;:443&quot;; h3-28=&quot;:443&quot;;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    ssl_certificate </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/home/mc/.acme.sh/*.xxwhite.com/fullchain.cer;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    ssl_certificate_key </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/home/mc/.acme.sh/*.xxwhite.com/*.xxwhite.com.key;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Host $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">X-Real-IP $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">remote_addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">http://localhost:5000;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，证书可以通过 <code>acme.sh</code> 完成自动化更新。</p>`,42)]))}const d=s(e,[["render",t]]),r=JSON.parse('{"path":"/2023/01030.nginx-quic%E7%BC%96%E8%AF%91%E5%92%8C%E4%BD%BF%E7%94%A8.html","title":"nginx-quic 编译和使用","lang":"zh-CN","frontmatter":{"title":"nginx-quic 编译和使用","date":"2023-01-03T00:00:00.000Z","keywords":"nginx quic 编译 linux systemctl","tag":["Linux"],"description":"最近又打算从 caddy 换回 nginx 了，简单记录一下一些操作。","head":[["meta",{"property":"og:url","content":"https://blog.u2sb.com/2023/01030.nginx-quic%E7%BC%96%E8%AF%91%E5%92%8C%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"叉叉白"}],["meta",{"property":"og:title","content":"nginx-quic 编译和使用"}],["meta",{"property":"og:description","content":"最近又打算从 caddy 换回 nginx 了，简单记录一下一些操作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-06T05:10:35.000Z"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-01-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-06T05:10:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx-quic 编译和使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-03T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-06T05:10:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MonoLogueChi\\",\\"url\\":\\"https://blog.u2sb.com\\"}]}"]]},"git":{"createdTime":1743916235000,"updatedTime":1743916235000,"contributors":[{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite@foxmail.com","commits":1,"url":"https://github.com/MonoLogueChi"}]},"readingTime":{"minutes":2.25,"words":674},"filePathRelative":"2023/01030.nginx-quic编译和使用.md","localizedDate":"2023年1月3日","excerpt":"<p>最近又打算从 caddy 换回 nginx 了，简单记录一下一些操作。</p>\\n","autoDesc":true}');export{d as comp,r as data};
