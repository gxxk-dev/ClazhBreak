import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
  onToggleView: () => void;
  showDetailView: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onSearch,
  onToggleView,
  showDetailView
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="flex-container">
      <input
        type="text"
        id="search-box"
        placeholder="搜索项目... (留空以全部展示)"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div className="button-container">
        <button onClick={onSearch}>搜索</button>
        <button id="toggle-titles" onClick={onToggleView}>
          {showDetailView ? "标题视图" : "详细视图"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
