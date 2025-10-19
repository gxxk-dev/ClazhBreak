import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { INFO_SECTIONS } from '../data/infoSections';
import type { InfoSection } from '../types';

/**
 * 递归渲染折叠块组件
 */
const InfoBlock: React.FC<{ section: InfoSection }> = ({ section }) => {
  return (
    <details>
      <summary>{section.summary}</summary>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {section.content}
      </ReactMarkdown>

      {/* 递归渲染嵌套的子折叠块 */}
      {section.children && section.children.map((child, index) => (
        <InfoBlock key={index} section={child} />
      ))}
    </details>
  );
};

/**
 * InfoSections 组件 - 数据驱动 + Markdown 渲染
 */
const InfoSections: React.FC = () => {
  return (
    <>
      {INFO_SECTIONS.map((section, index) => (
        <InfoBlock key={index} section={section} />
      ))}
    </>
  );
};

export default InfoSections;
