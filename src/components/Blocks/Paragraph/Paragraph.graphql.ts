import { TextAlign, FontSize } from '@/types/graphql.types';
import gql from 'graphql-tag';

export type ParagraphFragment = {
  clientId: string;
  name: 'core/paragraph';
  attributes: {
    content: string;
    align: TextAlign | null;
    fontSize: FontSize | null;
  };
};

export const ParagraphFragment = gql(`
  fragment ParagraphFragment on CoreParagraph {
    clientId
    name
    attributes {
      content
      align
      fontSize
    }
  }
`);
