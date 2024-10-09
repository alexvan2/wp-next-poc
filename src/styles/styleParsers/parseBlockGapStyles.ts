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
  const blockGap = style.spacing?.blockGap;

  if (typeof blockGap === 'string') {
    styles.gap = BlockGapMap[blockGap] ?? blockGap;
  }

  if (typeof blockGap === 'object') {
    styles.rowGap = BlockGapMap[blockGap.top ?? ''] ?? blockGap.top;
    styles.columnGap = BlockGapMap[blockGap.left ?? ''] ?? blockGap.left;
  }

  return styles;
}
