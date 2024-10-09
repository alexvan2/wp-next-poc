import { WordpressStyle } from '@/types/wordpress.types';
import { CSSProperties } from 'react';

const BlockGapMap: Record<string, string> = {
  'var:preset|spacing|10': '1rem',
  'var:preset|spacing|20': '1.5rem',
  'var:preset|spacing|30': '2.5rem',
  'var:preset|spacing|40': '4rem',
  'var:preset|spacing|50': '6.5rem',
  'var:preset|spacing|60': '10.5rem',
};

export function parseBlockGapStyles(style: WordpressStyle): CSSProperties {
  const styles: CSSProperties = {};

  if (style.spacing?.blockGap?.top) {
    styles.rowGap = BlockGapMap[style.spacing.blockGap.top] ?? style.spacing.blockGap.top;
  }

  if (style.spacing?.blockGap?.left) {
    styles.columnGap = BlockGapMap[style.spacing.blockGap.left] ?? style.spacing.blockGap.left;
  }

  return styles;
}
