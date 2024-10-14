import { WordpressStyle } from '@/types/wordpress.types';
import { CSSProperties } from 'react';

export function parseBorderRadiusStyles(style: WordpressStyle): CSSProperties {
  const styles: CSSProperties = {};
  const borderRadius = style.border?.radius;

  if (typeof borderRadius === 'string') {
    styles.borderRadius = borderRadius;
  }

  if (typeof borderRadius === 'object') {
    styles.borderTopLeftRadius = borderRadius.topLeft;
    styles.borderTopRightRadius = borderRadius.topRight;
    styles.borderBottomLeftRadius = borderRadius.bottomLeft;
    styles.borderBottomRightRadius = borderRadius.bottomRight;
  }

  return styles;
}
