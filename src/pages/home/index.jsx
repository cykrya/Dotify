import React, {useState } from "react";
import AlbumInfo from "../../components/home/AlbumInfo";
import formatParameter from "../../utils/formatParameter";
// import albums from "./albums";



const Home = ({ accessToken }) => {
  const [Albums, setAlbums] = useState([]);
  const [searchTrack, setSearchTrack] = useState("");
  const [Selected, setSelected] = useState([]);

  const Search = async (e) => {
    e.preventDefault();
    const Authorization = `Bearer ${accessToken}`;
    fetch(
      `https://api.spotify.com/v1/search?${formatParameter({
        q: searchTrack,
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
        setAlbums(res.tracks.items);
      });
  };

  return (
    <div className="body">
      <h2 className="title-home">
      Home
      </h2>
      <form onSubmit={Search} className="ssearch">
        <input
          onChange={(e) => setSearchTrack(e.target.value)}
          className="inputt"
          type="text"
        />
        <button className="search-button">
          Search
        </button>
      </form>
      <div className="albuminfos">
        {Albums.map((data) => (
          <AlbumInfo
            key={data.id}
            data={data}  
            tracks={Selected}
            setTracks={setSelected}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
