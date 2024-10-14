import { ButtonsFragment } from '@/components/Blocks/Buttons';
import { ColumnFragment } from '@/components/Blocks/Column';
import { ColumnsFragment } from '@/components/Blocks/Columns';
import { HeadingFragment } from '@/components/Blocks/Heading';
import { ImageFragment } from '@/components/Blocks/Image';
import { ParagraphFragment } from '@/components/Blocks/Paragraph';
import gql from 'graphql-tag';

export const PageQuery = gql`
  ${ParagraphFragment}
  ${HeadingFragment}
  ${ColumnsFragment}
  ${ColumnFragment}
  ${ImageFragment}
  ${ButtonsFragment}

  query PageQuery($id: ID!, $preview: Boolean = false) {
    page(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      content
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
      }
    }
  }
`;
