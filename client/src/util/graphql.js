import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
query {
  getPosts {
    id
    body
    createdAt
    username
    likeCount
    likes {
      createdAt
      id
      username
    }
    commentCount
    comments {
      username
      createdAt
      id
    }
  }
}
`;