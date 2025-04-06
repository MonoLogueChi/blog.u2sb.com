import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as e,d as t,r as p,o as r}from"./app-CnYccAH2.js";const d="/assets/OMV-2020-08-26-16-34-19-B2tdJ_r2.png",l="/assets/OMV-2020-08-26-16-34-31-BFD9DGQO.png",o="/assets/OMV-2020-08-26-16-34-37-DT-ERTgX.png",c="/assets/OMV-2020-08-26-16-35-01-CjCMAJJt.png",g="/assets/OMV-2020-08-26-16-38-37-kitZOwAS.png",h="/assets/OMV-2020-08-26-16-39-09-b-OUq76p.png",u="/assets/OMV-2020-08-26-16-39-14-1TjlZ3eJ.png",m="/assets/OMV-2020-08-26-16-40-41-JOcNWlWD.png",b="/assets/OMV-2020-08-26-16-40-47-3dtkZNwe.png",v="/assets/OMV-2020-08-26-16-41-54-BxWlH84u.png",k="/assets/OMV-2020-08-26-16-42-00-C0uKS7h6.png",f="/assets/OMV-2020-08-26-16-42-23-PjZ4mHaU.png",y="/assets/OMV-2020-08-26-16-42-42-DiAgjv4P.png",_="/assets/OMV-2020-08-26-16-43-21-CEw86bZ1.png",A="/assets/OMV-2020-08-26-16-43-59-CZAYk9yk.png",x="/assets/OMV-2020-08-26-16-48-04-CvtO7phD.png",O="/assets/OMV-2020-08-26-16-48-15-DQEgNHTo.png",F="/assets/OMV-2020-08-26-16-48-53-CNJKPKsu.png",M="/assets/OMV-2020-08-26-16-51-30-DugXZrs9.png",V="/assets/OMV-2020-08-26-17-27-02-CGhF5dvr.png",w="/assets/200826_173142_WindowsTerminal_iMc2-orv0Y1xX.png",z={};function D(q,i){const s=p("BiliBili");return r(),n("div",null,[i[0]||(i[0]=e('<p>这一篇文章讲怎么让 OMV 系统拥有冗余功能。也就是在 raid 上安装 OMV 系统，坏掉任意一块硬盘的情况下，系统照样能启动。</p><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备"><span>准备</span></a></h2><blockquote><p>本文所用镜像为 <code>debian-10.5.0-amd64-netinst.iso</code></p></blockquote><blockquote><p>注意，演示所用环境，启动方式为 UEFI，非 secure boot，硬盘协议为 SATA，需要空间，10G 以上，推荐 60G 或更大空间。安装之前推荐将机器连接网络。</p></blockquote><blockquote><p>最好有 Linux 安装经验，看到英文不要慌，遇到和文章里不一样的，或者是看不懂的，尝试去翻译一下。每张图具体是什么意思，翻译一下图上的英文就能看懂，这个真的不难，我这个四级没过的废物都能看得懂。</p></blockquote><p>这一次我们需要从 Debian 安装 OMV，所以需要一个 Debian10 的镜像，可以在<a href="https://mirrors.huaweicloud.com/debian-cd/" target="_blank" rel="noopener noreferrer">这里</a>下载。</p><p>本文目的是讲 Debian 安装在 raid1 上，并在每个硬盘上安装引导，做的在任意一块硬盘损坏的情况下，系统均能正常启动。</p><h2 id="视频教程" tabindex="-1"><a class="header-anchor" href="#视频教程"><span>视频教程</span></a></h2>',8)),t(s,{bvid:"BV1Hh411R7iD"}),i[1]||(i[1]=e('<h2 id="安装-debian" tabindex="-1"><a class="header-anchor" href="#安装-debian"><span>安装 Debian</span></a></h2><p>请确保系统插入了两块以上的硬盘用于安装系统盘，接下来跟我我的讲解进入安装步骤。</p><p>首先进入图形化安装界面，语言选择英文即可。</p><figure><img src="'+d+'" alt="安装界面" tabindex="0" loading="lazy"><figcaption>安装界面</figcaption></figure><figure><img src="'+l+'" alt="语言选择" tabindex="0" loading="lazy"><figcaption>语言选择</figcaption></figure><p>区域选择中国，键盘选择美式键盘。</p><figure><img src="'+o+'" alt="区域和键盘" tabindex="0" loading="lazy"><figcaption>区域和键盘</figcaption></figure><figure><img src="'+c+'" alt="区域和键盘" tabindex="0" loading="lazy"><figcaption>区域和键盘</figcaption></figure><p>再接下来是网络设置，下面两张图填写的是主机名，这里根据你自己的实际情况填写，不懂的话默认即可，不需要修改。如果你的机器没有联网，会让你手动设置，这个时候跳过即可。</p><figure><img src="'+g+'" alt="网络设置" tabindex="0" loading="lazy"><figcaption>网络设置</figcaption></figure><p>接下来输入 root 密码。</p><figure><img src="'+h+'" alt="输入root密码" tabindex="0" loading="lazy"><figcaption>输入root密码</figcaption></figure><p>再接下来创建一个新用户。</p><figure><img src="'+u+'" alt="创建新用户" tabindex="0" loading="lazy"><figcaption>创建新用户</figcaption></figure><p>然后是硬盘部分，这是这篇文章的重点之一，这里选择手动分区。</p><p>先创建好分区表，选择对应的硬盘，直接回车即可创建。注意这会清空硬盘里原有的分区，并且会清空数据。</p><figure><img src="'+m+'" alt="创建好分区表" tabindex="0" loading="lazy"><figcaption>创建好分区表</figcaption></figure><p>然后创建一个 EFI 分区，不用太大，够用就行，你如果嫌小，可以自己改大一点。</p><figure><img src="'+b+'" alt="创建EFI分区" tabindex="0" loading="lazy"><figcaption>创建EFI分区</figcaption></figure><p>对另一块硬盘做相同的操作，两块硬盘最好是完全一致。</p><figure><img src="'+v+'" alt="另一块硬盘" tabindex="0" loading="lazy"><figcaption>另一块硬盘</figcaption></figure><p>然后开始创建软 raid，过程可以看图，看不懂的简单翻译一下就明白了。</p><figure><img src="'+k+'" alt="创建软raid" tabindex="0" loading="lazy"><figcaption>创建软raid</figcaption></figure><p>两块硬盘都选上，空闲 0 块。</p><figure><img src="'+f+'" alt="创建软raid" tabindex="0" loading="lazy"><figcaption>创建软raid</figcaption></figure><p>选择未分区的两个位置，创建软 raid。</p><figure><img src="'+y+'" alt="创建软raid" tabindex="0" loading="lazy"><figcaption>创建软raid</figcaption></figure><p>然后为创建出来的软 raid 分区，这里演示只有一个分区，没有必要按照网上教程分那么多区，然后分目录去挂载，一个就可以。</p><figure><img src="'+_+'" alt="软raid分区" tabindex="0" loading="lazy"><figcaption>软raid分区</figcaption></figure><p>然后确定不要 swap 分区，并且确定分区的更改。</p><figure><img src="'+A+'" alt="确定分区更改" tabindex="0" loading="lazy"><figcaption>确定分区更改</figcaption></figure><p>确定不插入其他 CD。</p><figure><img src="'+x+'" alt="CD" tabindex="0" loading="lazy"><figcaption>CD</figcaption></figure><p>选择合适的镜像源，这里选你认为最快的。</p><figure><img src="'+O+'" alt="选择镜像源" tabindex="0" loading="lazy"><figcaption>选择镜像源</figcaption></figure><p>选择需要安装的服务。</p><figure><img src="'+F+'" alt="需要安装的服务" tabindex="0" loading="lazy"><figcaption>需要安装的服务</figcaption></figure><p>最后等安装完成，重启应该就可以进入系统。</p><figure><img src="'+M+'" alt="安装完成" tabindex="0" loading="lazy"><figcaption>安装完成</figcaption></figure><h2 id="创建另一个启动项" tabindex="-1"><a class="header-anchor" href="#创建另一个启动项"><span>创建另一个启动项</span></a></h2><p>这样虽然把系统安装在了 raid1 上，但是引导只安装在了一块硬盘上，如果引导所在的硬盘挂了，那系统照样是会挂的。</p><p>接下来需要安装另一个启动引导。</p><p>登录系统，输入</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ip addr</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看当前 ip。</p><figure><img src="'+V+`" alt="查看ip" tabindex="0" loading="lazy"><figcaption>查看ip</figcaption></figure><p>然后远程登录上去。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh mc@192.168.91.136</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后切换到 root 用户，安装一些必要的软件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>su</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apt update</span></span>
<span class="line"><span>apt install sudo vim net-tools efibootmgr</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 mc 添加进 sudo 用户组</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/sbin/usermod -a -G sudo mc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后关掉 ssh 连接，重新登录一遍。</p><p>输入</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>df -h</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+w+`" alt="查看磁盘" tabindex="0" loading="lazy"><figcaption>查看磁盘</figcaption></figure><p>可以看到 <code>/dev/sda1</code> 是当前的 efi 磁盘，需要克隆到 <code>/dev/sdb1</code> 上（这个需要自行判断实际情况）。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo dd if=/dev/sda1 of=/dev/sdb1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后创建新的引导项（下面的命令需要你根据实际情况自行修改）。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo efibootmgr -c -g -d /dev/sdb -p 1 -L &quot;debian #2&quot; -l &#39;\\EFI\\debian\\shimx64.efi&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><p>然后重启看一下是不是有了一个启动项 <code>debian #2</code>，尝试一下用这个启动项启动系统，然后再尝试分别拔掉两块硬盘，系统能否正常启动。</p><h2 id="安装-omv" tabindex="-1"><a class="header-anchor" href="#安装-omv"><span>安装 OMV</span></a></h2><blockquote><p>建议：安装OMV之前将 <code>security.debian.org</code> 也替换掉</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sed -i &quot;s@http://security.debian.org@https://mirrors.huaweicloud.com@g&quot; /etc/apt/sources.list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></blockquote><p>首先将系统更新到最新</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo apt-get update</span></span>
<span class="line"><span>sudo apt-get dist-upgrade</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加密钥</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo apt-get install --yes gnupg</span></span>
<span class="line"><span>sudo wget -O &quot;/etc/apt/trusted.gpg.d/openmediavault-archive-keyring.asc&quot; https://packages.openmediavault.org/public/archive.key</span></span>
<span class="line"><span>sudo apt-key add &quot;/etc/apt/trusted.gpg.d/openmediavault-archive-keyring.asc&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加软件源</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo vim /etc/apt/sources.list.d/openmediavault.list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>写入内容为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>deb https://packages.openmediavault.org/public usul main</span></span>
<span class="line"><span># deb https://downloads.sourceforge.net/project/openmediavault/packages usul main</span></span>
<span class="line"><span>## Uncomment the following line to add software from the proposed repository.</span></span>
<span class="line"><span>deb https://packages.openmediavault.org/public usul-proposed main</span></span>
<span class="line"><span># deb https://downloads.sourceforge.net/project/openmediavault/packages usul-proposed main</span></span>
<span class="line"><span>## This software is not part of OpenMediaVault, but is offered by third-party</span></span>
<span class="line"><span>## developers as a service to OpenMediaVault users.</span></span>
<span class="line"><span># deb https://packages.openmediavault.org/public usul partner</span></span>
<span class="line"><span># deb https://downloads.sourceforge.net/project/openmediavault/packages usul partner</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后安装</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>export LANG=C.UTF-8</span></span>
<span class="line"><span>export DEBIAN_FRONTEND=noninteractive</span></span>
<span class="line"><span>export APT_LISTCHANGES_FRONTEND=none</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo apt-get update</span></span>
<span class="line"><span>sudo apt-get --yes --auto-remove --show-upgraded \\</span></span>
<span class="line"><span>    --allow-downgrades --allow-change-held-packages \\</span></span>
<span class="line"><span>    --no-install-recommends \\</span></span>
<span class="line"><span>    --option Dpkg::Options::=&quot;--force-confdef&quot; \\</span></span>
<span class="line"><span>    --option DPkg::Options::=&quot;--force-confold&quot; \\</span></span>
<span class="line"><span>    install openmediavault-keyring openmediavault</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo omv-confdbadm populate</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中间遇到什么需要让你手动选择的，全都是默认选项即可。</p><p>然后在浏览器输入机器的ip或者是<code>debian/</code>即可访问后台网络面板。</p><p>至于硬盘坏了怎么恢复，会在以后的文章中讲到。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p><a href="https://www.jianshu.com/p/5557b6172b97" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/5557b6172b97</a><br><a href="https://openmediavault.readthedocs.io/en/5.x/installation/on_debian.html" target="_blank" rel="noopener noreferrer">https://openmediavault.readthedocs.io/en/5.x/installation/on_debian.html</a></p>`,79))])}const N=a(z,[["render",D]]),E=JSON.parse('{"path":"/2020/08261.omv-1.html","title":"OMV安装在raid上","lang":"zh-CN","frontmatter":{"title":"OMV安装在raid上","date":"2020-08-26T20:05:30.000Z","tag":["NAS","OMV"],"keywords":"OMV NAS OpenMediaVault raid1 Linux 安装","comments":true,"redirectFrom":["/2020/omv-1.html"],"description":"这一篇文章讲怎么让 OMV 系统拥有冗余功能。也就是在 raid 上安装 OMV 系统，坏掉任意一块硬盘的情况下，系统照样能启动。","head":[["meta",{"property":"og:url","content":"https://blog.u2sb.com/2020/08261.omv-1.html"}],["meta",{"property":"og:site_name","content":"叉叉白"}],["meta",{"property":"og:title","content":"OMV安装在raid上"}],["meta",{"property":"og:description","content":"这一篇文章讲怎么让 OMV 系统拥有冗余功能。也就是在 raid 上安装 OMV 系统，坏掉任意一块硬盘的情况下，系统照样能启动。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-06T05:10:35.000Z"}],["meta",{"property":"article:tag","content":"NAS"}],["meta",{"property":"article:tag","content":"OMV"}],["meta",{"property":"article:published_time","content":"2020-08-26T20:05:30.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-06T05:10:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OMV安装在raid上\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-26T20:05:30.000Z\\",\\"dateModified\\":\\"2025-04-06T05:10:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MonoLogueChi\\",\\"url\\":\\"https://blog.u2sb.com\\"}]}"]]},"git":{"createdTime":1743916235000,"updatedTime":1743916235000,"contributors":[{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite@foxmail.com","commits":1,"url":"https://github.com/MonoLogueChi"}]},"readingTime":{"minutes":5.21,"words":1563},"filePathRelative":"2020/08261.omv-1.md","localizedDate":"2020年8月27日","excerpt":"<p>这一篇文章讲怎么让 OMV 系统拥有冗余功能。也就是在 raid 上安装 OMV 系统，坏掉任意一块硬盘的情况下，系统照样能启动。</p>\\n","autoDesc":true}');export{N as comp,E as data};
