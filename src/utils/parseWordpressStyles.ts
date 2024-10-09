import { WordpressStyle } from '@/types/wordpress.types';
import { CSSProperties } from 'react';
import { parseBlockGapStyles } from '../styles/styleParsers/parseBlockGapStyles';

export function parseWordpressStyles(style: string | null): CSSProperties {
  if (!style) {
    return {};
  }

  const styleObj = JSON.parse(style) as WordpressStyle;

  return {
    ...parseBlockGapStyles(styleObj),
  };
}
