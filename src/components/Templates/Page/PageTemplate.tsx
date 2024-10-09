import { print } from 'graphql/language/printer';
import { ContentNode, Page } from '@/gql/graphql';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import { PageQuery } from './PageQuery';

// Blocks
import Paragraph, { ParagraphFragment } from '@/components/Blocks/Paragraph';
import Heading, { HeadingFragment } from '@/components/Blocks/Heading';
import Columns, { ColumnsFragment } from '@/components/Blocks/Columns';

import styles from './PageTemplate.module.css';

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  return (
    <>
      {page?.editorBlocks?.map((block) => {
        if (!block) return null;

        switch (block.name) {
          case 'core/paragraph':
            return <Paragraph key={block.clientId} data={block as unknown as ParagraphFragment} />;
          case 'core/heading':
            return <Heading key={block.clientId} data={block as unknown as HeadingFragment} />;
          case 'core/columns':
            return <Columns key={block.clientId} data={block as unknown as ColumnsFragment} />;
          default:
            return null;
        }
      })}
      <div className={styles['raw-content-container']} dangerouslySetInnerHTML={{ __html: page?.content || '' }} />
    </>
  );
}
