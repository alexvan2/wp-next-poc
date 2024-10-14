import { TextAlign, FontSize, VerticalAlignment, SectionWidth } from '@/types/graphql.types';
import classNames from 'classnames';

import fontSizeStyles from '@/styles/styleModules/fontSize.module.css';
import textAlignmentStyles from '@/styles/styleModules/textAlignment.module.css';
import verticalAlignmentStyles from '@/styles/styleModules/verticalAlignment.module.css';
import sectionWidthStyles from '@/styles/styleModules/sectionWidth.module.css';

type GlobalStylesProperties = {
  fontSize?: FontSize | null;
  textAlign?: TextAlign | null;
  verticalAlignment?: VerticalAlignment | null;
  sectionWidth?: SectionWidth | null;
};

export const getGlobalClassnames = ({ fontSize, textAlign, verticalAlignment, sectionWidth }: GlobalStylesProperties) =>
  classNames({
    [fontSizeStyles[fontSize ?? '']]: fontSize,
    [textAlignmentStyles[textAlign ?? '']]: textAlign,
    [verticalAlignmentStyles[verticalAlignment ?? '']]: verticalAlignment,
    [sectionWidthStyles[sectionWidth ?? '']]: sectionWidth,
  });
