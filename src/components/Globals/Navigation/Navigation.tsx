import Link from 'next/link';
import { print } from 'graphql/language/printer';

import styles from './Navigation.module.css';

import { MenuLocationEnum } from '@/gql/graphql';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import { NavigationQuery } from './Navigation.graphql';
import { MenuItem } from '@/types/navigation.types';

async function getData(location: MenuLocationEnum) {
  const { menuItems } = await fetchGraphQL<NavigationQuery>(print(NavigationQuery), { location });

  if (menuItems === null) {
    throw new Error('Failed to fetch data');
  }

  return menuItems;
}

type NavigationProps = {
  location: MenuLocationEnum;
};

export default async function Navigation({ location }: NavigationProps) {
  const menuItems = await getData(location);

  return (
    <nav
      className={styles['navigation']}
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      {menuItems.nodes.map((item: MenuItem, index: number) => {
        if (!item.uri) return null;

        return (
          <Link itemProp="url" href={item.uri} key={index} target={item.target || '_self'}>
            <span itemProp="name">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
