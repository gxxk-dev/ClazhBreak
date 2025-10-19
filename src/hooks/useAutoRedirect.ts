import { useEffect } from 'react';
import { getRedirectUrl } from '../data/urls';

/**
 * 自动跳转Hook
 * 根据URL参数自动跳转到对应资源
 * 格式：[站点URL]?[软件ID]或[站点URL]?[软件ID]?pu
 *
 * 逻辑：
 * - 如果有直链且没有?pu参数，跳转到直链
 * - 如果有?pu参数或只有网盘链接，跳转到网盘
 * - 如果ID不存在，弹出提示
 */
export function useAutoRedirect() {
  useEffect(() => {
    try {
      const urlParts = window.location.href.split("?");

      // 没有参数，不跳转
      if (urlParts.length < 2) return;

      const param = urlParts[1]; // 第一个参数是ID
      const forcePan = urlParts[2] === "pu"; // 第二个参数是否为"pu"

      if (!param) return;

      // 获取跳转URL
      const redirectUrl = getRedirectUrl(param, forcePan);

      if (redirectUrl) {
        // 立即跳转
        window.location.href = redirectUrl;
      } else {
        // ID不存在，提示用户
        alert(`未找到此ID对应的URL`);
      }
    } catch (error) {
      console.error('自动跳转失败:', error);
    }
  }, []); // 只在组件挂载时执行一次
}
