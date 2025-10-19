# ClazhBreak

一个 针对信息技术课堂场景设计的 用于获取 娱乐/逃避监管项目的 资源整合网页项目。
基于 React / TS / Vite.

## 功能特性

### 核心功能

- **智能筛选系统**：支持多种筛选模式（任意匹配、完全匹配、反选）
- **实时搜索**：快速搜索项目标题，即时显示结果
- **分类管理**：支持反控软件、工具、游戏、网页四大分类
- **视图切换**：简洁视图与详细视图自由切换
- **快速跳转**：通过 URL 参数直达资源下载页面

### 快速跳转功能

通过 URL 参数实现一键跳转：

```
# 跳转到直链（如果存在），否则跳转到网盘
https://yoursite.com/?项目ID

# 强制跳转到网盘链接
https://yoursite.com/?项目ID?pu
```

## 快速开始

### 环境要求

- Node.js 16+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

启动后访问 `http://localhost:5173` 查看应用。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 项目结构

```
src/
├── components/          # React 组件
│   ├── Header.tsx           # 页头组件
│   ├── SearchBar.tsx        # 搜索栏
│   ├── CategoryFilter.tsx   # 分类筛选器
│   ├── ProjectList.tsx      # 项目列表
│   ├── InfoSections.tsx     # 信息展示
│   └── TipDisplay.tsx       # 提示信息
├── data/                # 数据层
│   ├── projects.ts          # 项目索引数据
│   ├── urls.ts              # URL 映射
│   └── tips.ts              # 提示信息
├── hooks/               # 自定义 Hooks
│   ├── useProjectFilter.ts  # 项目筛选逻辑
│   └── useAutoRedirect.ts   # 快速跳转功能
├── types.ts             # TypeScript 类型定义
├── App.tsx              # 主应用组件
└── main.tsx             # 应用入口
```

## 使用指南

### 添加新资源

1. **在 `src/data/projects.ts` 中添加项目信息**：

```typescript
export const PROJECTS: ProjectIndex = {
  // ... 其他项目
  "新项目ID": {
    title: [
      `新项目|项目标题: ${pan("新项目ID")} ${Direct("新项目ID")}`,
    ],
    desc: [
      "项目描述第一行",
      "项目描述第二行",
    ],
    type: ["工具", "反控软件"]  // 可选：反控软件、工具、游戏、网页
  }
};
```

2. **在 `src/data/urls.ts` 中添加下载链接**：

```typescript
export const URL_INDEX: UrlIndex = {
  // ... 其他 URL
  "新项目ID": {
    panUrl: "https://网盘链接",      // 可选
    directUrl: "https://直链地址"    // 可选
  }
};
```

### 筛选模式说明

- **任意匹配**（默认）：项目只要包含任意一个选中的分类即显示
- **完全匹配**：项目必须完全匹配所有选中的分类（且不能有其他分类）
- **反选**：显示不包含任何选中分类的项目

## 开发指南

### 修改分类

在 `src/types.ts` 中修改 `CategoryType` 类型定义：

```typescript
export type CategoryType = '反控软件' | '工具' | '游戏' | '网页' | '新分类';
```

### 自定义样式

主要样式文件：
- `src/App.css` - 应用主体样式
- `src/index.css` - 全局样式

### 添加新功能

建议遵循现有架构模式：
1. 业务逻辑封装在 `src/hooks/` 中
2. UI 组件放在 `src/components/` 中
3. 静态数据存储在 `src/data/` 中

## 许可证

详见 [LICENSE](./LICENSE) 文件。

## 贡献

欢迎提交 Issue 和 Pull Request！

---

**注意**：本项目仅用于资源分享和学习交流，请遵守相关课堂纪律。不当使用此项目导致的后果由您自行承担