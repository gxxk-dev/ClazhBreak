import type { UrlIndex } from '../types';

/**
 * 整合的URL数据 - 包含网盘链接和直链
 * 原则上讲，只会给以反控为主的项目提供下载用直链
 */
export const URLS: UrlIndex = {
  // ===== 反控软件 =====
  "mcc": {
    panUrl: "https://ouyhq.lanzouv.com/iiZX529fpxni",  // MyComputerClass v3.4.0
    directUrl: "./files/mcc_v3.4.0.exe"
  },
  "jyt": {
    panUrl: "https://ouyhq.lanzouv.com/iPPqr29fuvra",  // JiYuTrainer v1.7.6
    directUrl: "./files/jyt.exe"
  },
  "jyt4xp": {
    panUrl: "https://ouyhq.lanzouv.com/iCy4829fuvjc",  // JiYuTrainer for XP v1.7.6
    directUrl: "./files/jyt4xp.exe"
  },
  "jytp": {
    panUrl: "https://ouyhq.lanzouv.com/iS0QB29j803c",  // JiTuTrainer Pro
    directUrl: "./files/jytp.exe"
  },
  "mt": {
    panUrl: "https://ouyhq.lanzouv.com/iP8sj29h359g",  // MythwareToolkitv1.2.0
    directUrl: "./files/mt1.2.exe"
  },
  "mtvp": {
    panUrl: "https://ouyhq.lanzouv.com/iN75p29iahmj"   // MythwareToolkitv.1.2.1(preview)
  },
  "sw": {
    panUrl: "https://ouyhq.lanzouv.com/iKQ5Y29h4nfg"   // ScreenWings
  },
  "ntd": {
    panUrl: "https://ouyhq.lanzouv.com/i3JW22apnn0j",  // NoTopDomain
    directUrl: "./files/ntdv3.exe"
  },

  // ===== 工具软件 =====
  "7z": {
    panUrl: "https://ouyhq.lanzouv.com/iFpNS29fvh0f"   // 7-zip(x86)
  },
  "7zx64": {
    panUrl: "https://ouyhq.lanzouv.com/iBKq329fvgyd"   // 7-zip(x64)
  },
  "mlp": {
    panUrl: "https://ouyhq.lanzouv.com/ipKtY29htc9e"   // MoonlightPortable
  },
  "mlpx64": {
    panUrl: "https://ouyhq.lanzouv.com/iJm0z29htbxc"   // MoonlightPortable(x64)
  },
  "zt": {
    panUrl: "https://ouyhq.lanzouv.com/iZZJ429foy6b"   // ZeroTier-One
  },
  "zt4w7": {
    panUrl: "https://ouyhq.lanzouv.com/i0iLN29foxkj"   // ZeroTier-One for win7
  },
  "g2k": {
    panUrl: "https://ouyhq.lanzouv.com/iWTnN29xstjg"   // Glass2K
  },
  "ds_n16": {
    panUrl: "https://ouyhq.lanzouv.com/iMs9P2bc155c"   // DevSideCar v1.8.6 node16
  },
  "ds_n17": {
    panUrl: "https://ouyhq.lanzouv.com/iucXm2bc0j8d"   // DevSideCar v1.8.6 node17
  },
  "ybkey_auth": {
    panUrl: "https://ouyhq.lanzouv.com/itcf72amvoyj"   // Yubikey Authenticator v7.0.0
  },

  // ===== 游戏相关 =====
  "kste06_green": {
    panUrl: "https://ouyhq.lanzouv.com/iCZ6Z29vvofi"   // 金山打字(KingSoft-TypeEazy)2006绿色版
  },
  "kste10_game_gr": {
    directUrl: "http://wdl1.cache.wps.cn/dzt/game/dzt_great_race.exe"  // 金山打字2010之生死时速
  },
  "kste16": {
    directUrl: "https://package.op.wpscdn.cn/wps/download/typeeasy.22059.12012.0.exe"  // 金山打字2016
  },
  "br_gamev1.13_original": {
    panUrl: "https://ouyhq.lanzouv.com/iaCkv2jyexeh"  // Ballance v1.13 英文原版
  },
  "ballance_inflife": {
    directUrl: "https://ballance.jxpxxzj.cn/images/6/6e/%E4%BC%98%E8%B4%A8%E7%9A%84%E6%97%A0%E9%99%90%E7%94%9F%E5%91%BD%E8%A1%A5%E4%B8%81.zip"  // Ballance 无限生命补丁
  },

  // ===== 在线服务/网页 =====
  "cfwp": {
    directUrl: "https://proxy.1.ezv.me/"  // CFWorker-HTTPProxy
  },
  "bms": {
    directUrl: "https://bemuse.ninja/"  // Bemuse
  },
  "imcre_game": {
    directUrl: "https://games.imc.re/"  // IMCRE-游戏
  },
  "thdl": {
    directUrl: "https://cloud.lilywhite.cc/"  // 莉莉云(东方Project资源下载站)
  },
  "ballance_wiki": {
    directUrl: "https://ballance.wiki/"  // Ballance Wiki
  },
  "bcrc": {
    directUrl: "https://bcrc.site/"  // BCRC资源站
  }
};

/**
 * 获取项目的网盘URL
 */
export function getPanUrl(id: string): string | undefined {
  return URLS[id]?.panUrl;
}

/**
 * 获取项目的直链URL
 */
export function getDirectUrl(id: string): string | undefined {
  return URLS[id]?.directUrl;
}

/**
 * 根据快速跳转规则获取跳转URL
 * @param id 项目ID
 * @param forcePan 是否强制跳转到网盘（通过?pu参数）
 * @returns 跳转的URL，如果ID不存在返回undefined
 */
export function getRedirectUrl(id: string, forcePan: boolean = false): string | undefined {
  const urlData = URLS[id];
  if (!urlData) return undefined;

  // 如果有直链且不强制跳转到网盘，优先使用直链
  if (urlData.directUrl && !forcePan) {
    return urlData.directUrl;
  }

  // 否则使用网盘链接
  return urlData.panUrl;
}
