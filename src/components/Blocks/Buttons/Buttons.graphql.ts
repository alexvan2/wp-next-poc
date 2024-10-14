import { SectionWidth } from '@/types/graphql.types';
import gql from 'graphql-tag';
import { ButtonFragment } from '../Button/Button.graphql';

export type ButtonsFragment = {
  clientId: string;
  name: 'core/buttons';
  attributes: {
    align: SectionWidth | null;
    layout: string | null; // This will be parsed to ButtonsLayout
    style: string | null;
  };
  innerBlocks: ButtonFragment[];
};

export const ButtonsFragment = gql`
  fragment ButtonsFragment on CoreButtons {
    clientId
    name
    attributes {
      align
      layout
      style
    }
    innerBlocks {
      ... on CoreButton {
        ...ButtonFragment
      }
    }
  }
`;
