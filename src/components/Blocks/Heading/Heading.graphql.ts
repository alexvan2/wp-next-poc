import { TextAlign, FontSize } from '@/types/graphql.types';
import gql from 'graphql-tag';

export type HeadingFragment = {
  clientId: string;
  name: 'core/heading';
  attributes: {
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
      fontSize
      textAlign
      level
      content
    }
  }
`;
