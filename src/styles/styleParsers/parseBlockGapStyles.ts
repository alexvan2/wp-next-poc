import { WordpressStyle } from '@/types/wordpress.types';
import { CSSProperties } from 'react';
import { SpacingMap } from './presets.contants';

export function parseBlockGapStyles(style: WordpressStyle): CSSProperties {
  const styles: CSSProperties = {};
  const blockGap = style.spacing?.blockGap;

  if (typeof blockGap === 'string') {
    styles.gap = SpacingMap[blockGap] ?? blockGap;
  }

  if (typeof blockGap === 'object') {
    styles.rowGap = SpacingMap[blockGap.top ?? ''] ?? blockGap.top;
    styles.columnGap = SpacingMap[blockGap.left ?? ''] ?? blockGap.left;
  }

  return styles;
}
