import React from 'react';
import type { FilterMode, CategoryType } from '../types';

interface CategoryFilterProps {
  selectedCategories: CategoryType[];
  filterMode: FilterMode;
  onCategoryChange: (categories: CategoryType[]) => void;
  onFilterModeChange: (mode: FilterMode) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategories,
  filterMode,
  onCategoryChange,
  onFilterModeChange
}) => {
  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions)
      .map(option => option.value)
      .filter(value => value !== 'all') as CategoryType[];
    onCategoryChange(selected);
  };

  return (
    <div className="flex-container" id="rule-container">
      <div className="search-group">
        <label>分类选择：</label><br/>
        <select
          id="category-select"
          multiple
          value={selectedCategories}
          onChange={handleCategorySelect}
        >
          <option value="all">所有项目</option>
          <option value="反控软件">反控软件</option>
          <option value="工具">工具</option>
          <option value="游戏">游戏</option>
          <option value="网页">网页</option>
        </select><br/>
        <label>分类匹配规则：</label><br/>
        <select
          id="filter-mode"
          value={filterMode}
          onChange={(e) => onFilterModeChange(e.target.value as FilterMode)}
        >
          <option value="any">至少匹配一个</option>
          <option value="all">完全匹配</option>
          <option value="inverse">反选</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;
