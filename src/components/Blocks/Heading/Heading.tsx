import { createElement } from 'react';
import { HeadingFragment } from './Heading.graphql';

import classNames from 'classnames';
import { getGlobalClassnames } from '@/utils/getGlobalClassnames';

import styles from './Heading.module.css';
import { parseWordpressStyles } from '@/utils/parseWordpressStyles';

type HeadingProps = {
  data: HeadingFragment;
};

export default function Heading({ data }: HeadingProps) {
  const { fontSize, textAlign, level, content, style } = data.attributes;

  return createElement(`h${level}`, {
    className: classNames(styles['heading'], getGlobalClassnames({ fontSize, textAlign })),
    style: parseWordpressStyles(style),
    dangerouslySetInnerHTML: { __html: content },
  });
}
