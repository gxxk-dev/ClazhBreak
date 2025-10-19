import React from 'react';
import TipDisplay from './TipDisplay';

const Header: React.FC = () => {
  return (
    <>
      <h1>
        <a href="./">Clazh Break</a>
      </h1>
      <hr />
      资源收录/纠错联系：<a href="mailto:gxxk@duck.com">gxxk@duck.com</a> <br/>
      网盘主页面：<a href="https://ouyhq.lanzouv.com/b0w84ycpg">https://ouyhq.lanzouv.com/b0w84ycpg</a> 提取码：gxxk<br/>
      点击名称可以访问此项目官网 冒号后的内容一般为 网盘分流下载页面/对应资源<br />
      <TipDisplay />
      <div style={{color: '#1e1e1e', fontSize:'50%'}} title="不是哥们，你这都发现了？">
        Gxxk暗地里加了一堆奇怪的跳转规则，不妨打开Dev工具，仔细看看&lt;script&gt;标签内的内容吧
      </div>
    </>
  );
};

export default Header;
