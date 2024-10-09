import { createElement } from 'react';
import { HeadingFragment } from './Heading.graphql';

import classNames from 'classnames';
import { getGlobalClassnames } from '@/utils/getGlobalClassnames';

import styles from './Heading.module.css';

type HeadingProps = {
  data: HeadingFragment;
};

export default function Heading({ data }: HeadingProps) {
  const { fontSize, textAlign, level, content } = data.attributes;

  return createElement(`h${level}`, {
    className: classNames(styles['heading'], getGlobalClassnames({ fontSize, textAlign })),
    dangerouslySetInnerHTML: { __html: content },
  });
}
