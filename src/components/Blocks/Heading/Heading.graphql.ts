import { TextAlign, FontSize, SectionWidth } from '@/types/graphql.types';
import gql from 'graphql-tag';

export type HeadingFragment = {
  clientId: string;
  name: 'core/heading';
  attributes: {
    align: SectionWidth | null;
    fontSize: FontSize | null;
    textAlign: TextAlign | null;
    level: number;
    content: string;
  };
};

export const HeadingFragment = gql`
  fragment HeadingFragment on CoreHeading {
    clientId
    name
    attributes {
      align
      fontSize
      textAlign
      level
      content
    }
  }
`;
