import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";

import { setSeoData } from "@/utils/seoData";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import {
  ContentFindQuery,
  ContentInfoQuery,
} from "@/queries/general/ContentInfoQuery";
import { ContentNode } from "@/gql/graphql";
import PageTemplate from "@/components/Templates/Page/PageTemplate";
import { nextSlugToWpSlug } from "@/utils/nextSlugToWpSlug";
import PostTemplate from "@/components/Templates/Post/PostTemplate";
import { SeoQuery } from "@/queries/general/SeoQuery";
import { nextLocaleToWpLocale } from "@/utils/nextLocaleToWpLocale";

type Props = {
  params: { slug: string | string[]; locale: string };
};

/**
 * Look for the database id of the page in the selected language, since filtering
 * ContentNode by language is not supported by the API.
 */
async function getPageDatabaseId({ params }: Props): Promise<number | null> {
  const slug = nextSlugToWpSlug(params.slug);
  const locale = nextLocaleToWpLocale(params.locale);
  const isPreview = slug.includes("preview");

  if (isPreview) {
    return parseInt(slug.split("preview/")[1]);
  }

  const { contentNodes } = await fetchGraphQL<{
    contentNodes: { nodes: ContentNode[] };
  }>(print(ContentFindQuery), {
    language: locale,
  });
  const page = contentNodes.nodes.find((node) => node.slug === slug);

  return page ? page.databaseId : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = nextSlugToWpSlug(params.slug);
  const pageId: number | null = await getPageDatabaseId({ params });

  if (!pageId) {
    return notFound();
  }

  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(SeoQuery),
    {
      slug: pageId,
      idType: "DATABASE_ID",
    }
  );

  if (!contentNode) {
    return notFound();
  }

  const metadata = setSeoData({ seo: contentNode.seo });

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.VERCEL_URL}${slug}`,
    },
  } as Metadata;
}

export function generateStaticParams() {
  return [];
}

export default async function Page({ params }: Props) {
  const pageId: number | null = await getPageDatabaseId({ params });

  if (!pageId) {
    return notFound();
  }

  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(ContentInfoQuery),
    {
      slug: pageId,
      idType: "DATABASE_ID",
    }
  );

  if (!contentNode) {
    return notFound();
  }

  switch (contentNode.contentTypeName) {
    case "page":
      return <PageTemplate node={contentNode} />;
    case "post":
      return <PostTemplate node={contentNode} />;
    default:
      return <p>{contentNode.contentTypeName} not implemented</p>;
  }
}
