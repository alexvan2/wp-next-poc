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
  query MenuQuery($location: MenuLocationEnum, $language: String!) {
    menuItems(where: { location: $location, language: $language }) {
      nodes {
        uri
        target
        label
      }
    }
  }
`;
