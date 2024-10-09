import { TextAlign, FontSize, VerticalAlignment } from '@/types/graphql.types';
import classNames from 'classnames';

import fontSizeStyles from '@/styles/fontSize.module.css';
import textAlignmentStyles from '@/styles/textAlignment.module.css';
import verticalAlignmentStyles from '@/styles/verticalAlignment.module.css';

type GlobalStylesProperties = {
  fontSize?: FontSize | null;
  textAlign?: TextAlign | null;
  verticalAlignment?: VerticalAlignment | null;
};

export const getGlobalClassnames = ({ fontSize, textAlign, verticalAlignment }: GlobalStylesProperties) =>
  classNames({
    [fontSizeStyles[fontSize ?? '']]: fontSize,
    [textAlignmentStyles[textAlign ?? '']]: textAlign,
    [verticalAlignmentStyles[verticalAlignment ?? '']]: verticalAlignment,
  });
