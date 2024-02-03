import gql from "graphql-tag";

export const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export const mutationAddSong = gql`
mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
}
`;