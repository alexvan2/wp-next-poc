import { TextAlign } from '@/types/graphql.types';
import gql from 'graphql-tag';

export type ImageFragment = {
  clientId: string;
  name: 'core/image';
  attributes: {
    align: TextAlign | null;
    href: string | null;
    linkTarget: string | null;
    rel: string | null;
    alt: string | null;
    src: string;
  };
};

export const ImageFragment = gql(`
  fragment ImageFragment on CoreImage {
    clientId
    name
    attributes {
      align
      href
      linkTarget
      rel
      alt
      src
    }
  }
`);
