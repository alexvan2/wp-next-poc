import { SectionWidth, VerticalAlignment } from '@/types/graphql.types';
import gql from 'graphql-tag';
import { ColumnFragment } from '../Column';

export type ColumnsFragment = {
  clientId: string;
  name: 'core/columns';
  attributes: {
    align: SectionWidth | null;
    verticalAlignment: VerticalAlignment | null;
    isStackedOnMobile: boolean;
    style: string | null;
  };
  innerBlocks: ColumnFragment[];
};

export const ColumnsFragment = gql(`
  fragment ColumnsFragment on CoreColumns {
    clientId
    name
    attributes {
      align
      verticalAlignment
      isStackedOnMobile
      style
    }
    innerBlocks {
      name
      ...on CoreColumn {
        ...ColumnFragment
      }
    }
  }
`);
