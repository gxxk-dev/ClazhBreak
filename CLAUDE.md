# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概览

ClazhBreak 是一个基于 React + TypeScript + Vite 的资源展示和筛选平台，用于展示各类软件工具、游戏和网页资源。项目使用静态数据存储，不依赖后端服务。

## 常用命令

```bash
# 开发
npm run dev           # 启动 Vite 开发服务器（端口默认 5173）

# 构建
npm run build         # TypeScript 类型检查 + Vite 构建生产版本
npm run preview       # 预览构建后的生产版本

# 代码质量
npm run lint          # 运行 ESLint 检查
```

## 项目架构

### 核心架构模式

项目采用**数据驱动**的架构模式：
- 所有项目数据集中存储在 `src/data/` 目录
- 使用自定义 Hooks 实现业务逻辑复用
- 组件专注于 UI 渲染，逻辑通过 Hooks 抽离

### 目录结构

```
src/
├── components/       # React 组件
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   ├── CategoryFilter.tsx
│   ├── ProjectList.tsx
│   ├── InfoSections.tsx
│   └── TipDisplay.tsx
├── data/            # 数据层（项目的核心）
│   ├── projects.ts  # 项目索引数据（PROJECTS 对象）
│   ├── urls.ts      # URL 映射数据（网盘/直链）
│   └── tips.ts      # 提示信息数据
├── hooks/           # 自定义 Hooks
│   ├── useProjectFilter.ts   # 项目筛选逻辑
│   └── useAutoRedirect.ts    # URL 快速跳转功能
├── types.ts         # TypeScript 类型定义
├── App.tsx          # 主应用组件
└── main.tsx         # 应用入口
```

### 数据管理

#### 项目数据结构 (src/data/projects.ts)

项目数据存储在 `PROJECTS` 对象中，格式为：

```typescript
{
  "项目ID": {
    title: string[],      // 标题数组（支持多个标题/链接）
    desc: string[],       // 描述数组
    type: CategoryType[]  // 分类标签数组
  }
}
```

添加新项目时：
1. 在 `src/data/projects.ts` 的 `PROJECTS` 对象中添加条目
2. 如有下载链接，在 `src/data/urls.ts` 的 `URL_INDEX` 中添加对应映射
3. 使用辅助函数 `pan()` 和 `Direct()` 生成下载链接 HTML

#### URL 映射 (src/data/urls.ts)

```typescript
{
  "项目ID": {
    panUrl?: string,    // 网盘链接（蓝奏云等）
    directUrl?: string  // 直链下载地址
  }
}
```

### 核心功能实现

#### 1. 项目筛选 (useProjectFilter)

位置：`src/hooks/useProjectFilter.ts:12`

支持三种筛选模式：
- `any`：匹配任意一个选中的分类
- `all`：完全匹配所有选中的分类
- `inverse`：反选，不包含任何选中的分类

同时支持关键词搜索（在项目 title 中匹配）。

#### 2. 快速跳转功能 (useAutoRedirect)

位置：`src/hooks/useAutoRedirect.ts:14`

通过 URL 参数实现快速跳转：
- `[站点URL]?[项目ID]` - 跳转到直链（如果存在），否则跳转到网盘
- `[站点URL]?[项目ID]?pu` - 强制跳转到网盘链接

该功能在 App.tsx:14 优先执行，确保快速响应。

#### 3. 分类系统

支持的分类类型定义在 `src/types.ts:24`：
```typescript
type CategoryType = '反控软件' | '工具' | '游戏' | '网页';
```

每个项目可以有多个分类标签，在渲染时会自动添加"类型："描述。

### 状态管理

项目使用 React 原生状态管理（useState），所有状态集中在 App.tsx 中：
- `searchQuery` - 搜索关键词
- `selectedCategories` - 选中的分类
- `filterMode` - 筛选模式
- `showDetailView` - 视图模式切换

### 样式系统

- 使用传统 CSS 文件（App.css, index.css）
- 支持嵌入 HTML 标签（项目描述中使用 `<del>`, `<b>` 等标签）

## 开发注意事项

1. **添加新资源**：务必在 `src/data/projects.ts` 和 `src/data/urls.ts` 中同步更新
2. **类型安全**：修改数据结构时需同步更新 `src/types.ts` 中的类型定义
3. **筛选逻辑**：已通过 useMemo 优化，修改时注意依赖项
4. **路径分隔符**：Windows 环境下使用 `/` 而非 `\`
