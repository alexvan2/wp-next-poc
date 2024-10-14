import { SectionWidth } from '@/types/graphql.types';
import gql from 'graphql-tag';

export type ButtonsFragment = {
  clientId: string;
  name: 'core/buttons';
  attributes: {
    align: SectionWidth | null;
    layout: string | null; // This will be parsed to ButtonsLayout
  };
  innerBlocks: { clientId: string; name: 'core/button' }[]; // Replace by ButtonFragment when available
};

export const ButtonsFragment = gql(`
  fragment ButtonsFragment on CoreButtons {
    clientId
    name
    attributes {
      align
      layout
    }
    innerBlocks {
      clientId
      name
    }
  }
`);
