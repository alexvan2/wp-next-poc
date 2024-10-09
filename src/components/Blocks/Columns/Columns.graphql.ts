import { VerticalAlignment } from '@/types/graphql.types';
import gql from 'graphql-tag';

export type ColumnsFragment = {
  clientId: string;
  name: 'core/columns';
  attributes: {
    verticalAlignment: VerticalAlignment | null;
    isStackedOnMobile: boolean;
    style: string | null;
  };
  innerBlocks: { name: string }[];
};

export const ColumnsFragment = gql(`
  fragment ColumnsFragment on CoreColumns {
    clientId
    name
    attributes {
      verticalAlignment
      isStackedOnMobile
      style
    }
    innerBlocks {
      name
    }
  }
`);
