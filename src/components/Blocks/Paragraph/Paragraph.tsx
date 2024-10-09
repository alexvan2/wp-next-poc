import classNames from 'classnames';
import { ParagraphFragment } from './Paragraph.graphql';
import { getGlobalClassnames } from '@/utils/getGlobalClassnames';

type ParagraphProps = {
  data: ParagraphFragment;
};

export default function Paragraph({ data }: ParagraphProps) {
  const { content, align: textAlign, fontSize } = data.attributes;

  return (
    <p
      className={classNames(getGlobalClassnames({ fontSize, textAlign }))}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
