import Column, { ColumnFragment } from '@/components/Blocks/Column';
import Columns, { ColumnsFragment } from '@/components/Blocks/Columns';
import Heading, { HeadingFragment } from '@/components/Blocks/Heading';
import Paragraph, { ParagraphFragment } from '@/components/Blocks/Paragraph';
import { EditorBlock } from '@/gql/graphql';

type BlocksRendererProps = {
  blocks: (EditorBlock | null)[];
};

export default function BlocksRenderer({ blocks }: BlocksRendererProps) {
  return (
    <>
      {blocks.map((block) => {
        if (!block) return null;

        switch (block.name) {
          case 'core/paragraph':
            return <Paragraph key={block.clientId} data={block as unknown as ParagraphFragment} />;
          case 'core/heading':
            return <Heading key={block.clientId} data={block as unknown as HeadingFragment} />;
          case 'core/columns':
            return <Columns key={block.clientId} data={block as unknown as ColumnsFragment} />;
          case 'core/column':
            return <Column key={block.clientId} data={block as unknown as ColumnFragment} />;
          default:
            return null;
        }
      })}
    </>
  );
}
