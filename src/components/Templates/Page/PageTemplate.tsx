import { print } from 'graphql/language/printer';
import { ContentNode, Page } from '@/gql/graphql';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import { PageQuery } from './PageQuery';
import BlocksRenderer from '@/components/Globals/BlocksRenderer/BlocksRenderer';
import { ContentBlocks } from '@/types/blocks.types';
import PageLayout from '@/components/Globals/PageLayout';
import { wpLocaleToNextLocale } from '@/utils/wpLocaleToNextLocale';

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  const alternateLocales = page.translations?.map((translation) => ({
    locale: wpLocaleToNextLocale(translation?.languageCode ?? ''),
    slug: translation?.slug ?? '',
  }));

  return (
    <PageLayout alternateLocales={alternateLocales}>
      <BlocksRenderer blocks={(page?.editorBlocks as unknown as ContentBlocks[]) || []} isRoot />
    </PageLayout>
  );
}
