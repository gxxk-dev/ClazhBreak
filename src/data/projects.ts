import type { ProjectIndex } from '../types';
import { getPanUrl, getDirectUrl } from './urls';

/**
 * 生成下载链接HTML
 */
function pan(id: string): string {
  const url = getPanUrl(id);
  return url ? `<a href="${url}">蓝奏分流</a>` : '';
}

function Direct(id: string): string {
  const url = getDirectUrl(id);
  return url ? `<a href="${url}">直链下载</a>` : '';
}

function A(url: string): string {
  return `<a href="${url}">${url}</a>`;
}

/**
 * 项目索引数据
 */
export const PROJECTS: ProjectIndex = {
  "mcc": {
    title: [
      `mcc|[反控]MyComputerClass v3.4.0: ${pan("mcc")} ${Direct("mcc")}`,
    ],
    desc: [
      "由以赏大佬开发，支持极域/红蜘蛛",
      "支持学生端关闭/挂起与窗口操作，可自我进程保护（需安装驱动）",
      "可模拟基于UDP的部分极域教师端控制操作",
      "可解除存储/应用限制策略",
      "总结：大小3.7m，是各种情况下的首选，功能强大全面但部分功能对于小白来讲不易用，可误操作空间小"
    ],
    type: ["工具", "反控软件"]
  },
  "jyt": {
    title: [
      `jyt|[反控]JiYuTrainer v1.7.6:${pan("jyt")} ${Direct("jyt")}`,
      `jyt4xp|[反控]JiYuTrainer for XP v1.7.6:${pan("jyt4xp")} ${Direct("jyt4xp")}`,
      `jytp|[反控]JiYuTrainer Pro:${pan("jytp")} ${Direct("jytp")}`
    ],
    desc: [
      "仓库github@imengyu/JiYuTrainer(archive于21.12.03)，针对极域开发",
      "支持学生端启停/卸载与广播窗口化，支持反监视/反控制",
      "可模拟基于UDP的部分极域教师端控制操作 可解除网络访问限制策略",
      "JYTP非原作者所作 但可过360免杀 XP兼容性未知",
      "总结：大小4.5m，新手+极域首选，操作简单，功能较全，可误操作空间大，官方文档很有用",
    ],
    type: ["工具", "反控软件"]
  },
  "7z": {
    title: [
      `7z|7-zip(x86):${pan("7z")}`,
      `7zx64|7-zip(x64):${pan("7zx64")}`
    ],
    desc: [
      "高性能解压缩工具，支持多种压缩格式",
      "轻量级，快速解压，冲浪必备",
    ],
    type: ["工具"]
  },
  "cfwp": {
    title: [
      `cfwp|CFWorker HTTP Proxy:${A("https://proxy.1.ezv.me/")}`,
    ],
    desc: [
      "基于Cloudflare Workers搭建的HTTP代理服务",
      "该Worker处于免费计费额度下 建议自行搭建"
    ],
    type: ["工具", "网页"]
  },
  "mt": {
    title: [
      `mt|[反控]MythwareToolkit v1.2.0: ${pan("mt")} ${Direct("mt")}`,
      `mtvp|[反控]MythwareToolkit v1.2.1(preview): ${pan("mtvp")}`
    ],
    desc: [
      "仓库github@BengbuGuards/MythwareToolkit(仍在持续更新) 针对极域/机房助手开发",
      "支持学生端启停/挂起广播窗口化，程序自身不会被监视",
      "可解除网络访问/存储设备/键盘/鼠标/硬盘限制策略",
      "需要在属性-兼容性内勾选以管理员身份运行此程序",
      "总结：不到1m大小，极域首选，操作简单，可误操作空间中等，涵盖了摸鱼必备的所有功能（除教师端UDP控制模拟）",
      "64bit在文件夹内也有"
    ],
    type: ["工具", "反控软件"]
  },
  "sw": {
    title: [
      `sw|[屏幕防监视]ScreenWings: ${pan("sw")}`
    ],
    desc: [
      "不到1m大小，开启后教师端将展示为全屏黑屏",
      "可和MythwareToolkit搭配使用"
    ],
    type: ["工具", "反控软件"]
  },
  "mlp": {
    title: [
      `mlp|[远程串流]MoonlightPortable(x86): ${pan("mlp")}`,
      `mlpx64|[远程串流]MoonlightPortable(x64): ${pan("mlpx64")}`
    ],
    desc: [
      "知名游戏串流工具，机房远程串流必备",
      "需提前在被控端配置好Sunshine与虚拟显示器(推荐ParsecVDisplay)"
    ],
    type: ["工具"]
  },
  "zt": {
    title: [
      `zt|[虚拟局域网]ZeroTier-One: ${pan("zt")}`,
      `zt4w7|[虚拟局域网]ZeroTier-One for win7: ${pan("zt4w7")}`
    ],
    desc: [
      "虚拟局域网客户端 懂得都懂",
    ],
    type: ["工具"]
  },
  "bms": {
    title: [
      `bms|Bemuse: ${A("https://bemuse.ninja/")}`,
    ],
    desc: [
      "在线BMS播放器，内置大量曲目",
      "<del>那些敲来敲去的人还觉得自己很酷！</del>"
    ],
    type: ["游戏", "网页"]
  },
  "imcre_game": {
    title: [
      `imcre_game|[网页游戏]IMCRE Game: ${A("https://games.imc.re/")}`,
    ],
    desc: [
      "在线小游戏集合 <del>果子大劲道口味正(bushi)</del>",
      "IMC.RE 实力无需多言"
    ],
    type: ["游戏", "网页"]
  },
  "kste": {
    title: [
      `kste06_green|金山打字2006绿色版: ${pan("kste06_green")}`,
      `kste10_game_gr|金山打字2010之生死时速: ${Direct("kste10_game_gr")}`,
      `kste16|金山打字2016: ${Direct("kste16")}`
    ],
    desc: [
      "应同学要求加的键入练习软件 好用就完事了",
      `如"打字游戏"(TypeGame.exe)功能提示缺失DX7 请补全DX7并下载此DLL:${A('https://cn.dll-files.com/dx7vb.dll.html')}`,
      `（或可以尝试下载kste10_game1以补全运行库）`,
      `kste06_green与kste10_game_gr均来源于52破解论坛:${A("https://www.52pojie.cn/thread-1730978-1-1.html")}`
    ],
    type: ["游戏", "工具"]
  },
  "thdl": {
    title: [
      `thdl|莉莉云(东方Project资源下载站): ${A("https://cloud.lilywhite.cc/")}`,
    ],
    desc: [
      `最全面的THProject资源下载站`,
    ],
    type: ["网页", "工具"]
  },
  "g2k": {
    title: [
      `g2k|[窗口透明化]Glass2K: ${pan("g2k")}`,
    ],
    desc: [
      `一个轻量级的窗口透明化工具`, `摸鱼必备`
    ],
    type: ["工具"]
  },
  "ntd": {
    title: [
      `ntd|[反控]NoTopDomain v3: ${pan("ntd")} ${Direct("ntd")}`,
    ],
    desc: [
      "仓库github@BengbuGuards/MythwareToolkit(仍在持续更新) 针对极域开发",
      "融合JiYuTrainer/MythwareToolkit 功能一应俱全 但易被杀",
      "<del>NoTopDomain盒子 贼几把好用(电棍音)</del>"
    ],
    type: ["工具", "反控软件"]
  },
  "ds": {
    title: [
      `ds_n16|Dev-SideCar v1.8.6 (node16): ${pan("ds_n16")}`,
      `ds_n17|Dev-SideCar v1.8.6 (node17): ${pan("ds_n17")}`,
    ],
    desc: [
      "仓库 github@docmirror/dev-sidecar",
      "在不翻越GFW的同时对Github等合法网站 访问加速/绕过封锁",
      "本站部署了基于 CFWorker 的高级模式服务端 dsproxy.1.ezv.me"
    ],
    type: ["工具"]
  },
  "ybkey_auth": {
    title: [
      `ybkey_auth|Yubikey Authenticator v7.0.0: ${pan("ybkey_auth")}`,
    ],
    desc: [
      "<b>需要Yubikey本体配合使用 懂得都懂 不懂勿用</b>",
      "快速在课上登陆你的账号"
    ],
    type: ["工具"]
  },
  "ballance": {
    title: [
      `br_gamev1.13_original|Ballance v1.13英文原版: ${pan('br_gamev1.13_original')}`,
      `br_patch_inflife|Ballance 无限生命补丁: ${Direct("ballance_inflife")}`,
      `ballance_wiki|Ballance Wiki:${A("https://ballance.wiki/")}`,
      `bcrc|BCRC资源站:${A("https://bcrc.site/")}`
    ],
    desc: [
      "很适合在课上随便玩玩的古早游戏.",
      "本处收录的游戏本体仅适合熟悉游戏的玩家 如欲获取更多有关Ballance的资源 请访问BCRC资源站.",
      "收录资源来自于论坛Ballance Wiki 该网站使用CC BY-NC-SA 4.0对站点内容进行许可",
      "本站有关Ballance的内容按照 CC BY-NC-SA 4.0 进行许可"
    ],
    type: ["游戏"]
  }
};

/**
 * 为所有项目添加类型描述
 */
for (const key in PROJECTS) {
  let desc_typeText = "类型：";
  let firstAddText = true;
  PROJECTS[key]["type"].forEach(type => {
    desc_typeText += ((firstAddText ? "" : ",") + type);
    firstAddText = false;
  });
  PROJECTS[key].desc.push(desc_typeText);
}
