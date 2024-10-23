import gql from 'graphql-tag';
import { TabFragment } from '../Tab/Tab.graphql';

export type TabsFragment = {
  clientId: string;
  name: 'doodle/tabs-block';
  attributes: {
    tabs: string; // This will be parsed to Tab[]
  };
  innerBlocks: TabFragment[]; // @todo: Replace with TabFragment
};

export const TabsFragment = gql`
  fragment TabsFragment on DoodleTabsBlock {
    clientId
    name
    attributes {
      tabs
    }
    innerBlocks {
      ... on DoodleTabBlock {
        ...TabFragment
      }
    }
  }
`;
