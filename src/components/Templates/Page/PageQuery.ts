import gql from 'graphql-tag';

import { ButtonFragment } from '@/components/Blocks/Button/Button.graphql';
import { ButtonsFragment } from '@/components/Blocks/Buttons';
import { ColumnFragment } from '@/components/Blocks/Column';
import { ColumnsFragment } from '@/components/Blocks/Columns';
import { HeadingFragment } from '@/components/Blocks/Heading';
import { ImageFragment } from '@/components/Blocks/Image';
import { ParagraphFragment } from '@/components/Blocks/Paragraph';
import { TabsFragment } from '@/components/Blocks/Tabs';

export const PageQuery = gql`
  ${ParagraphFragment}
  ${HeadingFragment}
  ${ColumnsFragment}
  ${ColumnFragment}
  ${ImageFragment}
  ${ButtonsFragment}
  ${ButtonFragment}
  ${TabsFragment}

  query PageQuery($id: ID!, $preview: Boolean = false) {
    page(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      editorBlocks(flat: false) {
        ... on CoreParagraph {
          ...ParagraphFragment
        }
        ... on CoreHeading {
          ...HeadingFragment
        }
        ... on CoreColumns {
          ...ColumnsFragment
        }
        ... on CoreImage {
          ...ImageFragment
        }
        ... on CoreButtons {
          ...ButtonsFragment
        }
        ... on DoodleTabsBlock {
          ...TabsFragment
        }
      }
    }
  }
`;
