import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as s}from"./app-CnYccAH2.js";const i="/assets/20190911141506882_29873-D0UHq7el.png",p="/assets/20190911143605977_29640-Bt1XnuMh.png",o={};function r(l,e){return s(),a("div",null,e[0]||(e[0]=[n('<p>关于搭建代理和异地组网的一些想法。</p><p>异地组网暂且不说，先说一下代理问题，因为公司有一些特殊需求，需要使用代理上网。因为我住在学校里，网络算是校园网，可以使用学校的一些资源，公司其他同事有的时候也需要用一下，所以就需要搭建一个代理。</p><p>先说一下基本情况，宿舍是一百兆电信宽带，上下不对等。公司是一百兆电信宽带，上下对等。再说一下可以利用的资源，宿舍有台小服务器，还在上面搭建了一个软路由，公司有台群晖。</p><h2 id="第一种方案" tabindex="-1"><a class="header-anchor" href="#第一种方案"><span>第一种方案</span></a></h2><p>我最开始的构想是：</p><figure><img src="'+i+'" alt="v2ray通道" tabindex="0" loading="lazy"><figcaption>v2ray通道</figcaption></figure><p>在宿舍的服务器和公司的群晖之间创建一个vmess连接，然后在公司就可以通过群晖代理上网了。</p><h2 id="第二种方案" tabindex="-1"><a class="header-anchor" href="#第二种方案"><span>第二种方案</span></a></h2><p>后来我就在想，为什么不把宿舍的服务器直接搞成一个代理服务器，然后再公司使用正向代理上网呢？大概就是下面这张图这样：</p><figure><img src="'+p+`" alt="https代理" tabindex="0" loading="lazy"><figcaption>https代理</figcaption></figure><p>这里使用了Caddy做正向代理，需要插件 <code>http.forwardproxy</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>https://a.b.com {</span></span>
<span class="line"><span>    gzip</span></span>
<span class="line"><span>    tls /xxx.pem /xxx.key</span></span>
<span class="line"><span>    forwardproxy {</span></span>
<span class="line"><span>        basicauth user password</span></span>
<span class="line"><span>        hide_ip</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器使用插件 <a href="https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif" target="_blank" rel="noopener noreferrer">SwitchyOmega</a>，就可以使用搭建好的代理去上网了。</p><p>宿舍的路由器上还加了一层透明代理，这样通过宿舍的服务器正向代理上网，顺便还能实现留学上网（我也不知道留学上网这个名词是怎么来的 ╮(╯-╰)╭ ）。</p><p>因为某些特殊的原因，具体配置文件和搭建方法我就不贴出来了，反正网上都有，稍微思考一下就能想出来怎么搞。</p>`,15)]))}const m=t(o,[["render",r]]),h=JSON.parse('{"path":"/2019/09130.proxy1.html","title":"代理和异地组网","lang":"zh-CN","frontmatter":{"title":"代理和异地组网","date":"2019-09-13T13:48:35.000Z","tag":["建站笔记","随便水水"],"keywords":"代理上网 异地组网 校园网","comments":true,"redirectFrom":["/2019/proxy1.html"],"description":"关于搭建代理和异地组网的一些想法。","head":[["meta",{"property":"og:url","content":"https://blog.u2sb.com/2019/09130.proxy1.html"}],["meta",{"property":"og:site_name","content":"叉叉白"}],["meta",{"property":"og:title","content":"代理和异地组网"}],["meta",{"property":"og:description","content":"关于搭建代理和异地组网的一些想法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-06T05:10:35.000Z"}],["meta",{"property":"article:tag","content":"建站笔记"}],["meta",{"property":"article:tag","content":"随便水水"}],["meta",{"property":"article:published_time","content":"2019-09-13T13:48:35.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-06T05:10:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代理和异地组网\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-13T13:48:35.000Z\\",\\"dateModified\\":\\"2025-04-06T05:10:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MonoLogueChi\\",\\"url\\":\\"https://blog.u2sb.com\\"}]}"]]},"git":{"createdTime":1743916235000,"updatedTime":1743916235000,"contributors":[{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite@foxmail.com","commits":1,"url":"https://github.com/MonoLogueChi"}]},"readingTime":{"minutes":1.66,"words":497},"filePathRelative":"2019/09130.proxy1.md","localizedDate":"2019年9月13日","excerpt":"<p>关于搭建代理和异地组网的一些想法。</p>\\n","autoDesc":true}');export{m as comp,h as data};
