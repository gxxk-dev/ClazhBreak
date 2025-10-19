import { useMemo } from 'react';
import { PROJECTS } from '../data/projects';
import type { FilterMode, CategoryType } from '../types';

/**
 * 项目筛选Hook
 * @param searchQuery 搜索关键词
 * @param selectedCategories 选中的分类
 * @param filterMode 筛选模式
 * @returns 筛选后的项目键列表
 */
export function useProjectFilter(
  searchQuery: string,
  selectedCategories: CategoryType[],
  filterMode: FilterMode
): string[] {
  return useMemo(() => {
    let results = Object.keys(PROJECTS);

    // 根据分类筛选
    if (selectedCategories.length > 0) {
      switch (filterMode) {
        case "all":
          // 完全匹配：项目类型必须完全包含所有选中的分类
          results = results.filter(key => {
            const projectTypes = PROJECTS[key]["type"];
            return projectTypes.length === selectedCategories.length &&
                   projectTypes.every(cat => selectedCategories.includes(cat as CategoryType));
          });
          break;

        case "inverse":
          // 反选：项目类型不包含任何一个选中的分类
          results = results.filter(key => {
            const projectTypes = PROJECTS[key]["type"];
            return projectTypes.every(cat => !selectedCategories.includes(cat as CategoryType));
          });
          break;

        case "any":
        default:
          // 至少匹配一个：项目类型至少包含一个选中的分类
          results = results.filter(key => {
            const projectTypes = PROJECTS[key]["type"];
            return projectTypes.some(cat => selectedCategories.includes(cat as CategoryType));
          });
          break;
      }
    }

    // 根据搜索关键词筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(key => {
        return PROJECTS[key]["title"].some(title =>
          title.toLowerCase().includes(query)
        );
      });
    }

    return results;
  }, [searchQuery, selectedCategories, filterMode]);
}
