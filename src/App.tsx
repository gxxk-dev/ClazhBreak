import { useState } from 'react';
import { useAutoRedirect } from './hooks/useAutoRedirect';
import { useProjectFilter } from './hooks/useProjectFilter';
import type { CategoryType, FilterMode } from './types';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProjectList from './components/ProjectList';
import InfoSections from './components/InfoSections';
import './App.css';

function App() {
  // 快速跳转功能（优先执行）
  useAutoRedirect();

  // 状态管理
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>([]);
  const [filterMode, setFilterMode] = useState<FilterMode>('any');
  const [showDetailView, setShowDetailView] = useState<boolean>(true);

  // 使用筛选Hook
  const filteredProjects = useProjectFilter(searchQuery, selectedCategories, filterMode);

  // 处理搜索
  const handleSearch = () => {
    // 筛选逻辑已经通过useProjectFilter实现
    // 这里可以添加额外的搜索相关逻辑
  };

  // 切换视图
  const handleToggleView = () => {
    setShowDetailView(!showDetailView);
  };

  return (
    <div className="app">
      {/* 搜索栏 */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearch={handleSearch}
        onToggleView={handleToggleView}
        showDetailView={showDetailView}
      />

      {/* 分类筛选器 */}
      <CategoryFilter
        selectedCategories={selectedCategories}
        filterMode={filterMode}
        onCategoryChange={setSelectedCategories}
        onFilterModeChange={setFilterMode}
      />

      {/* 主内容区域 */}
      <div id="centered-content">
        <Header />
        <InfoSections />
        <hr />
        <ProjectList
          projectKeys={filteredProjects}
          showDetailView={showDetailView}
        />
      </div>
    </div>
  );
}

export default App;
