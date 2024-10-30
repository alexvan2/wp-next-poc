import gql from 'graphql-tag';

export const ContentInfoQuery = gql`
  query ContentInfo($slug: ID!, $idType: ContentNodeIdTypeEnum!) {
    contentNode(id: $slug, idType: $idType) {
      contentTypeName
      databaseId
      status
      uri
    }
  }
`;

export const ContentFindQuery = gql`
  query ContentFind($language: String!) {
    contentNodes(where: { language: $language }) {
      nodes {
        contentTypeName
        databaseId
        status
        slug
      }
    }
  }
`;
