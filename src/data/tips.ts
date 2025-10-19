/**
 * 随机提示信息
 * 每3秒刷新一次
 */
export const TIPS: string[] = [
  'Hint: 本站建议以 宽屏视图 Win/Edge 浏览',
  'Tip:  补药盗刷站长的CDN啊www',
  'Hint: 边按下Ctrl边选中分类可以多选分类',
  'Hint: 在选中分类"所有项目"时 规则"反选"不会起任何作用',
  'Tip:  React!!! 重构!!! 爽!',
  'Hint: 搜索框大小写不敏感 可输入全小写文字匹配大写字母',
  'Tip:  可能宽屏看不出来 但是我给两个搜索框加了毛玻璃和阴影...',
  'Tip:  我在编写此页面时一般默认您具有基本的 互联网/Windows操作系统 知识',
  'Tip:  在DevTools中的 网络侧 勾选"禁用缓存" 可实时看见服务端网页(虽然你可能并不需要)',
  'Tip:  你可以通过在DevTools-Console中执行"tips"以查看所有Tip',
  'Tip:  极域有个分支 叫"联想云教室" 我很需要它 所以如果你有它的安装包 那么请发给我 蟹蟹~',
  'Hint: <a href="https://jiyukiller.github.io/">jiyukiller.github.io</a>针对极域精选了三款反控软件 且提供多线路下载(多为Github镜像)',
  'undefined',
  '你知道吗其实你看见的那条 undefind 是我手打的哈哈哈',
  'Tip:  作业笑传之抄抄本',
  'Hint: Tip多为碎碎念/整活 而Hint则多具备提示性质且跟网页本体有关',
  'Tip:  没有前缀的Tip还是Tip吗？',
  'Hint: 提取码是gxxk!!!',
  'Tip:  WACCA SO LONG.',
  'Hint: 如网盘链接失效 一般是提供商(lanzou)的域名的问题 修改lanzou[x].com中的x为任意可用字母即可',
  'Hint: 此处内容每三秒刷新一次.',
  'Tip:  那个天天在编辑器面前摆弄html/js 写那个机房摸什么盾的死宅肯定觉得自己老nb了',
  'Hint: 为避免下次更换域名所造成的不变 您可以定期向<a href="mailto:gxxk@duck.com">gxxk@duck.com</a>发送邮件询问最新地址',
];

/**
 * 首次访问提示
 */
export const FIRST_VISIT_TIP = "这里随机刷新的文本有时会藏一些好东西，记得多加留意哦~";

/**
 * 获取随机提示
 */
export function getRandomTip(): string {
  const randomIndex = Math.floor(Math.random() * TIPS.length);
  return TIPS[randomIndex];
}
