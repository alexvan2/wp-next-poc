import classNames from 'classnames';
import { ButtonFragment } from './Button.graphql';

import styles from './Button.module.css';
import { getGlobalClassnames } from '@/utils/getGlobalClassnames';

type ButtonProps = {
  data: ButtonFragment;
};

export default function Button({ data }: ButtonProps) {
  const { anchor, url, linkTarget, rel, text, fontSize, textAlign, className, buttonWidth } = data.attributes;

  return (
    <a
      className={classNames(styles['button'], {
        [styles['button__outline']]: className === 'is-style-outline',
        [styles[`button__width-${buttonWidth}`]]: buttonWidth,
      })}
      href={anchor || url || '#'}
      target={linkTarget || undefined}
      rel={rel || undefined}
    >
      <span className={getGlobalClassnames({ fontSize, textAlign })} dangerouslySetInnerHTML={{ __html: text || '' }} />
    </a>
  );
}
