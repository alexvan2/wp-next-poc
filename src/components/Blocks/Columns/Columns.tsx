import classNames from 'classnames';
import { ColumnsFragment } from './Columns.graphql';

import styles from './Columns.module.css';
import { parseWordpressStyles } from '@/utils/parseWordpressStyles';
import { getGlobalClassnames } from '@/utils/getGlobalClassnames';

type ColumnsProps = {
  data: ColumnsFragment;
};

export default function Columns({ data }: ColumnsProps) {
  const {
    innerBlocks: columns,
    attributes: { verticalAlignment, isStackedOnMobile, style },
  } = data;

  return (
    <div
      className={classNames(
        styles['columns'],
        {
          [styles['columns__is-stacked']]: isStackedOnMobile,
        },
        getGlobalClassnames({ verticalAlignment })
      )}
      style={parseWordpressStyles(style)}
    >
      {columns.map((column, index) => (
        <p key={index}>
          {column.name} - {index}
        </p>
      ))}
    </div>
  );
}
