import classNames from 'classnames';
import { ImageFragment } from './Image.graphql';

import styles from './Image.module.css';
import { getGlobalClassnames } from '@/utils/getGlobalClassnames';

type ImageProps = {
  data: ImageFragment;
};

export default function Image({ data }: ImageProps) {
  const { align: textAlign, href, linkTarget, rel, alt, src } = data.attributes;

  return (
    <div className={classNames(styles['image'], getGlobalClassnames({ textAlign }))}>
      {href ? (
        <a href={href} target={linkTarget || undefined} rel={rel || undefined}>
          <img src={src} alt={alt || undefined} />
        </a>
      ) : (
        <img src={src} alt={alt || undefined} />
      )}
    </div>
  );
}
