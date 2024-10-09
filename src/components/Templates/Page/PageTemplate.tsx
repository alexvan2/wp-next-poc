import { print } from 'graphql/language/printer';
import { ContentNode, Page } from '@/gql/graphql';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import { PageQuery } from './PageQuery';

import styles from './PageTemplate.module.css';
import Paragraph from '@/components/Blocks/Paragraph';
import { ParagraphFragment } from '@/components/Blocks/Paragraph/Paragraph.graphql';

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
          default:
            return null;
        }
      })}
      <div className={styles['raw-content-container']} dangerouslySetInnerHTML={{ __html: page?.content || '' }} />
    </>
  );
}
