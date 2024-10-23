import { ContentBlocks } from '@/types/blocks.types';
import gql from 'graphql-tag';

export type TabFragment = {
  clientId: string;
  name: 'doodle/tab-block';
  innerBlocks: (ContentBlocks | null)[];
};

export const TabFragment = gql`
  fragment TabFragment on DoodleTabBlock {
    clientId
    name
    innerBlocks {
      ... on CoreColumns {
        ...ColumnsFragment
      }
      ... on CoreParagraph {
        ...ParagraphFragment
      }
      ... on CoreHeading {
        ...HeadingFragment
      }
      ... on CoreImage {
        ...ImageFragment
      }
      ... on CoreButtons {
        ...ButtonsFragment
      }
    }
  }
`;
