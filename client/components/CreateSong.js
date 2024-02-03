import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import { mutationAddSong, query } from "../queries/fetchSongs";
class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query }],
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h2>Create a song</h2>
        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <label>Song Title</label>
          <input
            type="text"
            onChange={(event) => this.setState({ title: event.target.value })}
            value={this.state.title}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default graphql(mutationAddSong)(CreateSong);
