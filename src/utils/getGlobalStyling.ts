import { TextAlign, FontSize } from '@/types/graphql.types';
import classNames from 'classnames';

import fontSizeStyles from '@/styles/fontSize.module.css';
import textAlignmentStyles from '@/styles/textAlignment.module.css';

type GlobalStylesProperties = {
  fontSize?: FontSize | null;
  textAlign?: TextAlign | null;
};

export const getGlobalStyling = ({ fontSize, textAlign }: GlobalStylesProperties) =>
  classNames({
    [fontSizeStyles[fontSize ?? '']]: fontSize,
    [textAlignmentStyles[textAlign ?? '']]: textAlign,
  });
