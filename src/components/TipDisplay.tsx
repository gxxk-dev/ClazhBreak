import React, { useState, useEffect } from 'react';
import { getRandomTip, FIRST_VISIT_TIP } from '../data/tips';

const TipDisplay: React.FC = () => {
  const [tip, setTip] = useState<string>('');

  useEffect(() => {
    // 检查是否首次访问
    const hasVisited = document.cookie.includes('firstVisit=1');

    if (!hasVisited) {
      setTip(FIRST_VISIT_TIP);
      document.cookie = 'firstVisit=1';
    } else {
      setTip(getRandomTip());
    }

    // 每3秒更新一次提示
    const interval = setInterval(() => {
      setTip(getRandomTip());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="tip" dangerouslySetInnerHTML={{ __html: tip || 'Tip加载中...' }} />
  );
};

export default TipDisplay;
