import { WordpressStyle } from '@/types/wordpress.types';
import { CSSProperties } from 'react';
import { SpacingMap } from './presets.contants';

export function parsePaddingStyles(style: WordpressStyle): CSSProperties {
  const styles: CSSProperties = {};
  const blockPadding = style.spacing?.padding;

  if (typeof blockPadding === 'object') {
    styles.paddingTop = SpacingMap[blockPadding.top ?? ''] ?? blockPadding.top;
    styles.paddingRight = SpacingMap[blockPadding.right ?? ''] ?? blockPadding.right;
    styles.paddingBottom = SpacingMap[blockPadding.bottom ?? ''] ?? blockPadding.bottom;
    styles.paddingLeft = SpacingMap[blockPadding.left ?? ''] ?? blockPadding.left;
  }

  return styles;
}
