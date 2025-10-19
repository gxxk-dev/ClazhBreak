import type { InfoSection } from '../types';

/**
 * InfoSections 折叠块数据
 * 支持 Markdown 格式和递归嵌套
 */
export const INFO_SECTIONS: InfoSection[] = [
  {
    summary: '关于本站与本项目',
    content: `此项目是 ClazhBreak 的广泛部署.

本项目旨在为用户提供一个 针对信息技术课堂场景设计的 用于获取 娱乐/逃避监管项目的 资源整合平台。

本项目遵循开源精神，所有代码均遵循 AGPLv3+ 许可证发布，用户可以自由地查看、修改和分发代码。

ClazhBreak 前身为 机房摸鱼之盾，经重构后更名为此.

此项目将不在保证官方部署的可用性与稳定性.`,
  },
  {
    summary: '关于本站的快速跳转功能',
    content: `为了更方便/快速的下载反控软件 本站提供了快速跳转功能 格式如下：

\`[站点URL]?[软件ID]\`

例如您正以 \`v.1.ezv.me\` 访问本页面并想快速跳转到**My Computer Class(ID:mcc)**的网盘分流下载页面：
&nbsp;&nbsp;\`v.1.ezv.me?mcc\`

或者您正以 \`1.ezv.me\` 访问本页面并想快速跳转到**MythwareToolkit(ID:mt)**的网盘分流下载页面：
&nbsp;&nbsp;\`1.ezv.me?mt\`

ID位于标题起始处至字符 \`|\` 处，例如 \`CFWorker HTTP Proxy\` 的标题如下所示：
\`cfwp|CFWorker HTTP Proxy(x86):https://proxy.1.ezv.me/\`
则开头的 \`cfwp\` 就是ID`,
    children: [
      {
        summary: '关于直链下载对快速跳转的影响',
        content: `在对应项目含有直链时 快速跳转会默认跳转到直链链接进行下载 以便加快速度 提升体验

您可以通过在原快速下载的URL后加上 \`?pu\` 以强制跳转到网盘链接
（PU：即PanUrl）

直链功能不会影响到其他项目，只有含有直链的项目才会跳转到直链链接`,
      },
    ],
  },
  {
    summary: '关于本站的版权信息',
    content: `页面由Gxxk(Frez79)编写 页面源码在AGPLv3+许可下开源在[Github@gxxk-dev/ClazhBreak](https://github.com/gxxk-dev/clazhbreak)

本站仅 分发/收录 某些特定的 可执行文件/项目 名称仅用于表示 不作任何暗示或明示 不对任何事物的完整性作担保.

页面编写者不是页面中被收录项目的作者 有关被收录项目的问题请询问原作者.

**特别注明：本站所有有关Ballance的内容均按照CC BY-NC-SA 4.0进行内容分发/许可**`,
  },
];
