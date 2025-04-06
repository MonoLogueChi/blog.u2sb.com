import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as e,o as s}from"./app-CnYccAH2.js";const t="/assets/Snipaste_2020-07-09_11-48-09-DNZFm0DQ.png",o="/assets/Snipaste_2020-07-09_11-58-20-D1AehSaw.png",p="/assets/Snipaste_2020-07-09_14-03-23-RhnGIqQp.png",r="/assets/Snipaste_2020-07-09_14-05-42-sFft5Al3.png",d="/assets/Pinout-NANO_latest-DHqWPK_s.png",l="/assets/Snipaste_2020-07-09_16-55-48-HVTOadZM.png",c="/assets/Snipaste_2020-07-09_17-01-48-DeJoSCa2.png",g="/assets/20200709-1721-DbKKhaLM.jpg",h={};function u(m,a){return s(),i("div",null,a[0]||(a[0]=[e('<p>前段时间在做一个硬件上的项目，用到了 Arduino，学了一些知识，也踩了一些坑，简单总结分享一下。</p><h2 id="选购" tabindex="-1"><a class="header-anchor" href="#选购"><span>选购</span></a></h2><p>Arduino 有不少的板子，国产的克隆板用起来也不错，没有必要死扣进口的，当然你如果想要支持 Arduino 的发展，可以购买那种带有 Arduino 授权标志的板子。</p><p>Arduino 常用的几种板子有 <code>Uno</code> <code>Mega</code> <code>Nano</code> <code>Pro micro</code> <code>Leonardo</code>，简单说一下区别和怎么选，不要像我一样，第一次买错了，还要多花一份冤枉钱。</p><h3 id="uno" tabindex="-1"><a class="header-anchor" href="#uno"><span>Uno</span></a></h3><p>首先是 Uno，这款开发板可以说是性价比最高的一款产品，也可以说是最适合初学者学习使用的开发板。就是你不明确自己想要做什么，只是单纯的想要学习，买这块就够了。</p><h3 id="mega" tabindex="-1"><a class="header-anchor" href="#mega"><span>Mega</span></a></h3><p>开发板与 Arduino Uno 类似，但尺寸要比 Uno 开发板更大，引脚更多，当你明确自己需要用很多的传感器，Uno 不能满足的需求的时候，可以选择这款。</p><h3 id="nano" tabindex="-1"><a class="header-anchor" href="#nano"><span>Nano</span></a></h3><p>和 Uno 类似，但尺寸更小，引脚也稍多当你的项目对板子尺寸有要求的时候，可以选择这款，而且这款貌似也是最便宜的。</p><h3 id="leonardo" tabindex="-1"><a class="header-anchor" href="#leonardo"><span>Leonardo</span></a></h3><p>功能上比 Uno 类似，但是支持 HID，可以模拟 USB 设备，如果需要模拟键盘鼠标，或者制作 HID 设备（比如赛车模拟器等）的话，Leonardo 是首选。</p><h3 id="pro-micro" tabindex="-1"><a class="header-anchor" href="#pro-micro"><span>Pro micro</span></a></h3><p>与 Leonardo 类似，支持 HID，可以模拟 USB 设备，但是尺寸更小。</p><h2 id="准备开发" tabindex="-1"><a class="header-anchor" href="#准备开发"><span>准备开发</span></a></h2><p>这一步你买板子的卖家一般会告诉你怎么做，遇到不一样的，请按照卖家的做。</p><p>开发工具使用 Arduino，我直接使用 scoop 安装，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>scoop install arduino</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我用到的板子是 Nano 板，直接 USB 插到电脑上，不需要自己手动安装驱动，Win10 会自动安装，如果不能自动安装，可以找你购买的地方要驱动，或者搜索 <code>CH340 驱动</code>。</p><p>打开设备管理器，在 <code>端口</code> 选项下面找一下</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>前面看到的端口 COM3，记住端口号，后面要用。</p><p>打开 Arduino IDE，文件-示例-Basics-Blink。</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这是最简单的一个项目，就是让 L 灯一直闪。</p><p>然后在工具一栏选择对应的开发板和处理器</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后点击编译和上传</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后就可以看到 L 灯一闪一闪的了。</p><h2 id="adc-程序" tabindex="-1"><a class="header-anchor" href="#adc-程序"><span>ADC 程序</span></a></h2><p>到了一个正式项目的时候了，我有一个需求是，采集传感器电压。</p><p>先上图</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在上图可以看到，有 6 个可用的 ADC 引脚，我们使用 A0。</p><p>用下图所示的接法接好传感器，其中，然后写程序</p><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>void setup() {</span></span>
<span class="line"><span>  Serial.begin(19200);</span></span>
<span class="line"><span>  Serial.println(&quot;ADC程序&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  int n = analogRead(A0);             //读取A0口的输入</span></span>
<span class="line"><span>  double vol = n * (5 / 1024.0);      //转换为实际电压</span></span>
<span class="line"><span>  Serial.print(&quot;A0接口当前电压为&quot;);</span></span>
<span class="line"><span>  Serial.println(vol);                //打印电压数值</span></span>
<span class="line"><span>  delay(500);                         //等待0.5s</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看，程序是不是超简单，Nano 板具有 10 位 ADC 转换功能，10 位的意思就是最多可以有 2<sup>10</sup> 个分级，参考电压为 5V，所以转换为实际电压的时候就要用到上面的公式。</p><p>编译上传，然后就可以在串口监视器里看到输出了。</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最后再说一下使用习惯，不用面包板的时候，我喜欢把这个东西插到另一块板子上，然后从另一块板子上焊排针用。</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',43)]))}const _=n(h,[["render",u]]),v=JSON.parse('{"path":"/2020/07090.arduino-first-sight.html","title":"Arduino 初见","lang":"zh-CN","frontmatter":{"title":"Arduino 初见","date":"2020-07-09T12:05:30.000Z","tag":["硬件"],"keywords":"Arduino 入门 选购 编程 ADC","comments":true,"redirectFrom":["/2020/arduino-first-sight.html"],"description":"前段时间在做一个硬件上的项目，用到了 Arduino，学了一些知识，也踩了一些坑，简单总结分享一下。","head":[["meta",{"property":"og:url","content":"https://blog.u2sb.com/2020/07090.arduino-first-sight.html"}],["meta",{"property":"og:site_name","content":"叉叉白"}],["meta",{"property":"og:title","content":"Arduino 初见"}],["meta",{"property":"og:description","content":"前段时间在做一个硬件上的项目，用到了 Arduino，学了一些知识，也踩了一些坑，简单总结分享一下。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-06T05:10:35.000Z"}],["meta",{"property":"article:tag","content":"硬件"}],["meta",{"property":"article:published_time","content":"2020-07-09T12:05:30.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-06T05:10:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Arduino 初见\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-09T12:05:30.000Z\\",\\"dateModified\\":\\"2025-04-06T05:10:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MonoLogueChi\\",\\"url\\":\\"https://blog.u2sb.com\\"}]}"]]},"git":{"createdTime":1743916235000,"updatedTime":1743916235000,"contributors":[{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite@foxmail.com","commits":1,"url":"https://github.com/MonoLogueChi"}]},"readingTime":{"minutes":3.14,"words":942},"filePathRelative":"2020/07090.arduino-first-sight.md","localizedDate":"2020年7月9日","excerpt":"<p>前段时间在做一个硬件上的项目，用到了 Arduino，学了一些知识，也踩了一些坑，简单总结分享一下。</p>\\n","autoDesc":true}');export{_ as comp,v as data};
