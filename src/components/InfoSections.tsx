import React from 'react';

const InfoSections: React.FC = () => {
  return (
    <>
      <details>
        <summary>关于本站的网络线路信息</summary>
        <p>
          本站同时部署了2个可见的静态页面托管服务与一个 境外TencentCDN服务，分别为：
          <ol>
            <li><a href="https://1.ezv.me/">境外TencentCDN(1.ezv.me)</a>（GithubPages回源 速度最快但会有页面更新延迟）</li>
            <li><a href="https://cf.1.ezv.me/">Cloudflare Pages</a>（无页面更新延迟 少几率被墙 概率出现的人机验证会拖慢下载反控软件的时间）</li>
            <li><a href="https://myd.frez79.io/">Cloudflare Pages-别名</a>（与上一项特性/效果均一样 仅作别名使用）</li>
            <li><a href="https://v.1.ezv.me/">Vercel</a>（无页面更新延迟 速度与第一者持平 快但被墙几率大）</li>
          </ol>
          （首选 境外TencentCDN 请根据自己所在学校机房的网络情况选择使用）<br/>
          境外TencentCDN 线路为站长自行购买的腾讯CDN服务 为减少CDN服务带来的经济负担 CDN策略如下：
          <ol>
            <li>浏览器端 站点页面的缓存通常为30min</li>
            <li>浏览器端 直链下载/图片缓存4629天</li>
            <li>每5min CDN可用1GB(超限将关停CDN服务) </li>
            <li>禁止非国内IP访问</li>
          </ol>
        </p>
      </details>

      <details>
        <summary>[碎碎念]关于本站的站点架构信息</summary>
        <p>
          站点架构其实就是纯静态 <del>毕竟你也看得到嘛</del> <br/>
          但本站的 工具内容 展示部分的内容存储在网页JSON内 当页面加载完成后才开始加载这一部分<br/>
          <del>有效防止搜索引擎收录本页面</del><br/>
          不过这么做方便管理，免去了排版的麻烦<br/>
          <del>毕竟这个页面是某人手撸(CSS By Kimi)出来的 并且只是为了炫技而已...</del>
          <br/>
          不过本站起初做的时候，项目内容直接写进了HTML内，
          <del>结果后面看冗余的HTML越看越不顺眼 顺手改成动态加载了</del>
        </p>
      </details>

      <details>
        <summary>关于本站的快速跳转功能</summary>
        <p>
          为了更方便/快速的下载反控软件 本站提供了快速跳转功能 格式如下：<br/>
          <code>[站点URL]?[软件ID]</code><br/>
          例如您正以<code>v.1.ezv.me</code>访问本页面并想快速跳转到<strong>My Computer Class(ID:mcc)</strong>的网盘分流下载页面：<br/>
          &nbsp;&nbsp;<code>v.1.ezv.me?mcc</code><br/>
          或者您正以<code>1.ezv.me</code>访问本页面并想快速跳转到<strong>MythwareToolkit(ID:mt)</strong>的网盘分流下载页面：<br/>
          &nbsp;&nbsp;<code>1.ezv.me?mt</code><br/>
          <br/>
          ID位于标题起始处至字符<code>|</code>处，例如<code>CFWorker HTTP Proxy</code>的标题如下所示：<br/>
          <code>cfwp|CFWorker HTTP Proxy(x86):https://proxy.1.ezv.me/</code><br/>
          则开头的<code>cfwp</code>就是ID

          <details>
            <summary>关于直链下载对快速跳转的影响</summary>
            <p>
              在对应项目含有直链时 快速跳转会默认跳转到直链链接进行下载 以便加快速度 提升体验 <br/>
              您可以通过在原快速下载的URL后加上 <code>?pu</code> 以强制跳转到网盘链接<br/>
              （PU：即PanUrl）<br/>
              直链功能不会影响到其他项目，只有含有直链的项目才会跳转到直链链接<br/>
            </p>
          </details>
        </p>
      </details>

      <details>
        <summary>关于本站的版权信息</summary>
        <p>
          页面由Gxxk(Frez79)编写 页面源码在AGPLv3+许可下开源在<a href="https://github.com/gxxk-dev/gxxk-dev.github.io">个人仓库</a><br/>
          本站仅 分发/收录 某些特定的 可执行文件/项目 名称仅用于表示 不作任何暗示或明示 不对任何事物的完整性作担保.<br/>
          页面编写者不是页面中被收录项目的作者 有关被收录项目的问题请询问原作者. <br/>
          <b>特别注明：本站所有有关Ballance的内容均按照CC BY-NC-SA 4.0进行内容分发/许可</b>
        </p>
      </details>

      <details>
        <summary>关于本站迁移的信息</summary>
        <p>
          由于页面到期 站长没钱续费 故本站迁移至朋友的子域下<br/>
          非常感谢 <strong>Neuroplexus</strong> 提供的 子域 <strong>1.ezv.me</strong><br/>
          之前的 frez79.site 将在250729到期 届时绑定在此域名上的所有服务均无法访问 请知悉.<br/>
          绑定在 frez79.site 上的摸鱼盾现已关停.
        </p>
      </details>
    </>
  );
};

export default InfoSections;
