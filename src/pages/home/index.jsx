import React, { Component } from "react";
import AlbumInfo from "../../components/home/AlbumInfo";
import formatParameter from "../../utils/formatParameter";
// import albums from "./albums";

class Home extends Component {
  state = { albums: [], keyword: "" };

  Search = async (e) => {
    e.preventDefault();
    const { keyword } = this.state;
    const { accessToken } = this.props;
    const Authorization = `Bearer ${accessToken}`;
    fetch(
      `https://api.spotify.com/v1/search?${formatParameter({
        q: keyword,
        type: "track",
      })}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        this.setState({ albums: res.tracks.items });
      });
  };

  handleInputChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  render() {
    const { albums } = this.state;
    return (
      <div className="body">
        <h2 className="title-home">
          Home
        </h2>
        <form onSubmit={this.Search} className="ssearch">
          <input
            onChange={this.handleInputChange}
            className="inputt"
            type="text"
          />
          <button className="search-button">
            Search
          </button>
        </form>
        <div className="albuminfos">
          {albums.map((data) => (
            <AlbumInfo key={data.id} data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
