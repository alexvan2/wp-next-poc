import { Align, FontSize } from '@/app/types/graphql.types';
import gql from 'graphql-tag';

export type ParagraphFragment = {
  clientId: string;
  name: string;
  attributes: {
    content: string;
    align: Align | null;
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
