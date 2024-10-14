import { print } from 'graphql/language/printer';
import { ContentNode, Page } from '@/gql/graphql';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import { PageQuery } from './PageQuery';

import styles from './PageTemplate.module.css';
import BlocksRenderer from '@/components/Globals/BlocksRenderer/BlocksRenderer';
import { ContentBlocks } from '@/types/blocks.types';

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  return (
    <>
      <BlocksRenderer blocks={(page?.editorBlocks as unknown as ContentBlocks[]) || []} isRoot />
      {/* <div className={styles['raw-content-container']} dangerouslySetInnerHTML={{ __html: page?.content || '' }} /> */}
    </>
  );
}
