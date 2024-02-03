import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import { query } from "../queries/fetchSongs";
export class SongList extends Component {
  renderSongs(songs) {
    return songs.map((song) => (
      <li key={song.id}>
        <ul>
          <li>{song.title}</li>
          <i className="material-icons">delete</i>
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

    return (
      <div>
        <ul>{this.renderSongs(songs)}</ul>
        <Link to="/song/new" className="btn-floating btn-large red right" ><i className="material-icons">add</i></Link>
      </div>
    );
  }
}

export default graphql(query)(SongList);
