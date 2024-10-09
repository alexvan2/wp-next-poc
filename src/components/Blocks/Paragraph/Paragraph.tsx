import classNames from 'classnames';
import { ParagraphFragment } from './Paragraph.graphql';
import { getGlobalStyling } from '@/utils/getGlobalStyling';

type ParagraphProps = {
  data: ParagraphFragment;
};

export default function Paragraph({ data }: ParagraphProps) {
  const { content, align: textAlign, fontSize } = data.attributes;

  return (
    <p
      className={classNames(getGlobalStyling({ fontSize, textAlign }))}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
