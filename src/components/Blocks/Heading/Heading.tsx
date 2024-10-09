import { createElement } from 'react';
import { HeadingFragment } from './Heading.graphql';

import classNames from 'classnames';
import { getGlobalStyling } from '@/utils/getGlobalStyling';

import styles from './Heading.module.css';

type HeadingProps = {
  data: HeadingFragment;
};

export default function Heading({ data }: HeadingProps) {
  const { fontSize, textAlign, level, content } = data.attributes;

  return createElement(`h${level}`, {
    className: classNames(styles['heading'], getGlobalStyling({ fontSize, textAlign })),
    dangerouslySetInnerHTML: { __html: content },
  });
}
