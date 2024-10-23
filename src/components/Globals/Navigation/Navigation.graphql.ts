import { MenuLocationEnum } from '@/gql/graphql';
import { MenuItem } from '@/types/navigation.types';
import gql from 'graphql-tag';

export { default } from './Navigation';

export type NavigationQuery = {
  menuItems: {
    nodes: MenuItem[];
  };
};

export type NavigationQueryVariables = {
  location: MenuLocationEnum;
};

export const NavigationQuery = gql`
  query MenuQuery($location: MenuLocationEnum) {
    menuItems(where: { location: $location }) {
      nodes {
        uri
        target
        label
      }
    }
  }
`;
