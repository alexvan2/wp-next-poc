import styles from './Paragraph.module.css';
import classNames from 'classnames';
import { ParagraphFragment } from './Paragraph.graphql';

type ParagraphProps = {
  data: ParagraphFragment;
};

export default function Paragraph({ data }: ParagraphProps) {
  const { content, align, fontSize } = data.attributes;

  return (
    <p
      className={classNames(
        styles['paragraph'],
        styles[`paragraph__font-${fontSize ?? 'medium'}`],
        styles[`paragraph__align-${align ?? 'left'}`]
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
