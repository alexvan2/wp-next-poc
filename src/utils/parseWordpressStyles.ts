import { WordpressStyle } from '@/types/wordpress.types';
import { CSSProperties } from 'react';
import { parseBlockGapStyles } from '../styles/styleParsers/parseBlockGapStyles';
import { parsePaddingStyles } from '@/styles/styleParsers/parsePaddingStyles';
import { parseBorderRadiusStyles } from '@/styles/styleParsers/parseBorderRadiusStyles';

export function parseWordpressStyles(style: string | null): CSSProperties {
  if (!style) {
    return {};
  }

  const styleObj = JSON.parse(style) as WordpressStyle;

  return {
    ...parseBlockGapStyles(styleObj),
    ...parsePaddingStyles(styleObj),
    ...parseBorderRadiusStyles(styleObj),
  };
}
