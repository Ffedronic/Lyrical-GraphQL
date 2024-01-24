import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
export class SongList extends Component {
  renderSongs(songs) {
    return songs.map((song) => (
      <li key={song.id}>
        <ul>
          <li>{song.title}</li>
          <ul>
            {song.lyrics.map((lyric, index) => (
              <li key={index}>{lyric.content}</li>
            ))}
          </ul>
        </ul>
      </li>
    ));
  }

  render() {
    const { error, loading, songs } = this.props.data;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      console.log(error);
      return <div>Something goes wrong. Try later...</div>;
    }

    return <ul>{this.renderSongs(songs)}</ul>;
  }
}

const query = gql`
  {
    songs {
      id
      title
      lyrics {
        content
      }
    }
  }
`;

export default graphql(query)(SongList);
