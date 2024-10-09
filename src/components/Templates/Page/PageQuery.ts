import { ColumnFragment } from '@/components/Blocks/Column';
import { ColumnsFragment } from '@/components/Blocks/Columns';
import { HeadingFragment } from '@/components/Blocks/Heading';
import { ParagraphFragment } from '@/components/Blocks/Paragraph';
import gql from 'graphql-tag';

export const PageQuery = gql`
  ${ParagraphFragment}
  ${HeadingFragment}
  ${ColumnsFragment}
  ${ColumnFragment}

  query PageQuery($id: ID!, $preview: Boolean = false) {
    page(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      content
      editorBlocks {
        ... on CoreParagraph {
          ...ParagraphFragment
        }
        ... on CoreHeading {
          ...HeadingFragment
        }
        ... on CoreColumns {
          ...ColumnsFragment
        }
      }
    }
  }
`;
