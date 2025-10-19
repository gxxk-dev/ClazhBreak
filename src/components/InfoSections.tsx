import React from 'react';

const InfoSections: React.FC = () => {
  return (
    <>
      <details>
        <summary>关于本站与本项目</summary>
        <p>
          此项目是 ClazhBreak 的广泛部署.
          本项目旨在为用户提供一个方便、快速、稳定的下载平台，同时确保用户的数据安全和隐私保护。
          本项目遵循开源精神，所有代码均遵循 AGPLv3+ 许可证发布，用户可以自由地查看、修改和分发代码。
          ClazhBreak 前身为 机房摸鱼之盾，经重构后更名为此.
          与此同时 此项目将不在保证官方部署的可用性与稳定性.
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
          页面由Gxxk(Frez79)编写 页面源码在AGPLv3+许可下开源在<a href="https://github.com/gxxk-dev/gxxk-dev.github.io">Github@gxxk-dev/ClazhBreak</a><br/>
          本站仅 分发/收录 某些特定的 可执行文件/项目 名称仅用于表示 不作任何暗示或明示 不对任何事物的完整性作担保.<br/>
          页面编写者不是页面中被收录项目的作者 有关被收录项目的问题请询问原作者. <br/>
          <b>特别注明：本站所有有关Ballance的内容均按照CC BY-NC-SA 4.0进行内容分发/许可</b>
        </p>
      </details>
    </>
  );
};

export default InfoSections;
