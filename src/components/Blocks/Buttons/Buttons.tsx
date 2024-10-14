import { ButtonsFragment } from './Buttons.graphql';
import { ButtonsLayout } from './Buttons.type';

import styles from './Buttons.module.css';
import classNames from 'classnames';
import { getGlobalClassnames } from '@/utils/getGlobalClassnames';

type ButtonsProps = {
  data: ButtonsFragment;
};

export default function Buttons({ data }: ButtonsProps) {
  const {
    attributes: { layout },
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
    >
      {innerBlocks.map((button) => {
        return (
          <button key={button.clientId} className="button">
            {button.name} - {button.clientId}
          </button>
        );
      })}
    </div>
  );
}
