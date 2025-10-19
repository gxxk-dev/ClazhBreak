// 项目类型定义

export interface UrlData {
  panUrl?: string;      // 网盘链接
  directUrl?: string;   // 直链
}

export interface ProjectData {
  title: string[];
  desc: string[];
  type: string[];
}

export interface ProjectIndex {
  [key: string]: ProjectData;
}

export interface UrlIndex {
  [key: string]: UrlData;
}

export type FilterMode = 'any' | 'all' | 'inverse';

export type CategoryType = '反控软件' | '工具' | '游戏' | '网页';
