import React, {useEffect, useState } from "react";
import axios from "axios";
import AlbumInfo from "../../components/home/AlbumInfo";
import formatParameter from "../../utils/formatParameter";
import {useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../components/core/action";




const Home = (accessToken) => {
  const [Albums, setAlbums] = useState([]);
  const [userID, setuserID] = useState([]);
  const [searchTrack, setSearchTrack] = useState("");
  const [PlaylistName, setPlaylistName] = useState("");
  const [PlaylistDesc, setPlaylistDesc] = useState("");
  const [Playlists, setPlaylist] = useState([]);
  const [Selected, setSelected] = useState([]);
  const [PlaylistsTrack, setPlaylistsTrack] = useState([]);
  const dispatch=useDispatch();

  useEffect (() => {
    dispatch(getAccessToken (accessToken));
  }, [])
  
  const Authorization = `Bearer ${((useSelector((state)=>state.accessToken)).accessToken).accessToken}`;
  const Search = (e) => {
    e.preventDefault();
    axios.get(
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
    
    .then((response) => {
      setAlbums(response.data.tracks.items);
    });
};

  
const addPlaylist = (e) => {
  e.preventDefault();
  
  //get userID
  axios.get(
    `https://api.spotify.com/v1/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization,
      },
    }
  )

  .then((response1) => {
    setuserID(response1.data.id);

  })
  
  //make playlist
  axios.post(
    `https://api.spotify.com/v1/users/${userID}/playlists`,{
      "name": `${PlaylistName}`,
      "description": `${PlaylistDesc}`,
      "public": false
    },
    {  
      headers: {
        "Content-Type": "application/json",
        Authorization,
      },
    }
  )

  .then((response2) => {
    setPlaylist(response2.data);

  });

};
  

  return (
    <div className="body">
      <h2 className="title-home">
      Home
      </h2>
      <div className="playlistcreation">
        <h1>ADD PLAYLIST</h1>
        <form onSubmit={addPlaylist} className="playlistForm">
          <input
            onChange={(e) => setPlaylistName(e.target.value)}
            className="playlist-name"
            placeholder="name"
            type="text"
          />
          <input
            onChange={(e) => setPlaylistDesc(e.target.value)}
            className="playlist-description"
            placeholder="description"
            type="text"
          />
          <button className="playlist-button">
            Add Playlist
          </button>
        </form>
      </div>
      
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
      
      {/* <div className="playlistinfos">
        <h1> Playlist</h1>
        {Playlists.map((tracks) => (
          <AlbumInfo
            key={tracks.uri}
            data={tracks.data}  
            tracks={Selected}
            setTracks={setSelected}
          />
        ))}
      </div> */}
      
      <div className="albuminfos">
        {Albums.map((data) => (
          <AlbumInfo
            key={data.id}
            data={data}  
            tracks={Selected}
            setTracks={setSelected}
            searchTrack= {searchTrack}
            setPlaylistsTrack= {setPlaylistsTrack}
            PlaylistsTrack= {PlaylistsTrack}
            Playlists={Playlists}
          />
        ))}
      </div>
      
      
    </div>
  );
};
export default Home;
