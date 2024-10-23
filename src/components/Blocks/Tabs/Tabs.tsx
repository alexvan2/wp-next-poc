'use client';

import { useMemo, useState } from 'react';
import styles from './Tabs.module.css';
import classNames from 'classnames';
import { TabsFragment } from './Tabs.graphql';

type Tab = {
  title: string;
  backgroundColor: string;
};

type TabsProps = {
  data: TabsFragment;
};

export default function Tabs({ data }: TabsProps) {
  const { attributes, innerBlocks: tabsContent } = data;
  const tabs: Tab[] = useMemo(() => JSON.parse(attributes.tabs), [attributes.tabs]);

  const [activeTab, setActiveTab] = useState(0);

  const handleClickTab = (index: number) => () => {
    setActiveTab(index);
  };

  return (
    <div className={styles['tabs']}>
      <ul className={styles['tabs--header']}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={classNames(styles['tabs--header-item'], {
              [styles['tabs--header-item__active']]: index === activeTab,
            })}
            onClick={handleClickTab(index)}
            style={index === activeTab ? { backgroundColor: tab.backgroundColor } : undefined}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className={styles['tabs--content']} style={{ backgroundColor: tabs[activeTab].backgroundColor }}>
        {tabsContent[activeTab].name} - {tabsContent[activeTab].clientId}
      </div>
    </div>
  );
}
