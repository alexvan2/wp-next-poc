import { HeadingFragment } from '@/components/Blocks/Heading';
import { ParagraphFragment } from '@/components/Blocks/Paragraph';
import gql from 'graphql-tag';

export const PageQuery = gql`
  ${ParagraphFragment}
  ${HeadingFragment}

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
      }
    }
  }
`;
