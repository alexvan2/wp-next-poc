import classNames from 'classnames';
import { ColumnFragment } from './Column.graphql';

import styles from './Column.module.css';
import { getGlobalClassnames } from '@/utils/getGlobalClassnames';
import { parseWordpressStyles } from '@/utils/parseWordpressStyles';
import BlocksRenderer from '@/components/Globals/BlocksRenderer/BlocksRenderer';

type ColumnProps = {
  data: ColumnFragment;
};

export default function Column({ data }: ColumnProps) {
  const {
    attributes: { verticalAlignment, width, style },
    innerBlocks,
  } = data;

  return (
    <div
      className={classNames(styles['column'], getGlobalClassnames({ verticalAlignment }))}
      style={{ ...parseWordpressStyles(style), width: width || undefined }}
    >
      <BlocksRenderer blocks={innerBlocks} />
    </div>
  );
}
