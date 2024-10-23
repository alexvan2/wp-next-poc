import { EditorBlock } from '@/gql/graphql';
import gql from 'graphql-tag';

export type TabsFragment = {
  clientId: string;
  name: 'doodle/tabs-block';
  attributes: {
    tabs: string; // This will be parsed to Tab[]
  };
  innerBlocks: EditorBlock[]; // @todo: Replace with TabFragment
};

export const TabsFragment = gql`
  fragment TabsFragment on DoodleTabsBlock {
    clientId
    name
    attributes {
      tabs
    }
    innerBlocks {
      clientId
      name
    }
  }
`;
