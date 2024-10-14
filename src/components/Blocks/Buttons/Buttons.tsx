import { ButtonsFragment } from './Buttons.graphql';
import { ButtonsLayout } from './Buttons.type';

import styles from './Buttons.module.css';
import classNames from 'classnames';
import { getGlobalClassnames } from '@/utils/getGlobalClassnames';
import Button from '../Button/Button';
import { parseWordpressStyles } from '@/utils/parseWordpressStyles';

type ButtonsProps = {
  data: ButtonsFragment;
};

export default function Buttons({ data }: ButtonsProps) {
  const {
    attributes: { layout, style },
    innerBlocks,
  } = data;

  const parsedLayout: ButtonsLayout | null = layout ? JSON.parse(layout) : null;

  return (
    <div
      className={classNames(
        styles['buttons'],
        {
          [styles['buttons__orientation-vertical']]: parsedLayout?.orientation === 'vertical',
          [styles['buttons__wrap']]: parsedLayout?.flexWrap !== 'nowrap',
          [styles[`buttons__justify-content-${parsedLayout?.justifyContent}`]]: parsedLayout?.justifyContent,
        },
        getGlobalClassnames({ verticalAlignment: parsedLayout?.verticalAlignment })
      )}
      style={parseWordpressStyles(style)}
    >
      {innerBlocks.map((button) => {
        return <Button key={button.clientId} data={button} />;
      })}
    </div>
  );
}
