import { FontSize, TextAlign } from '@/types/graphql.types';
import gql from 'graphql-tag';

export type ButtonFragment = {
  clientId: string;
  name: 'core/button';
  attributes: {
    anchor: string | null;
    url: string | null;
    linkTarget: string | null;
    rel: string | null;
    text: string | null;
    fontSize: FontSize | null;
    textAlign: TextAlign | null;
    className: 'is-style-fill' | 'is-style-outline' | null;
    style: string | null;
    buttonWidth: number | null;
  };
};

export const ButtonFragment = gql`
  fragment ButtonFragment on CoreButton {
    clientId
    name
    attributes {
      anchor
      url
      linkTarget
      rel
      text
      fontSize
      textAlign
      className
      style
      buttonWidth: width
    }
  }
`;
