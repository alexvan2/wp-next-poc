import { EditorBlock } from '@/gql/graphql';
import { VerticalAlignment } from '@/types/graphql.types';
import gql from 'graphql-tag';

export type ColumnFragment = {
  clientId: string;
  name: 'core/column';
  attributes: {
    verticalAlignment: VerticalAlignment | null;
    width: string | null;
    style: string | null;
  };
  innerBlocks: (EditorBlock | null)[];
};

export const ColumnFragment = gql(`
  fragment ColumnFragment on CoreColumn {
    clientId
    name
    attributes {
      verticalAlignment
      width
      style
    }
    innerBlocks {
      ...on CoreParagraph {
        ...ParagraphFragment
      }
      ...on CoreHeading {
        ...HeadingFragment
      }
    }
  }
`);
