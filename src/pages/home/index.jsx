/* eslint-disable no-unused-vars */
import React, {useEffect, useState } from "react";
import axios from "axios";
import AlbumInfo from "../../components/home/AlbumInfo";
import formatParameter from "../../utils/formatParameter";
import {useSelector } from "react-redux";
import { Button, FormControl, TextField } from "@mui/material";
//import { getAccessToken } from "../../components/core/action";




const Home = () => {
  const [Albums, setAlbums] = useState([]);
  const [userID, setuserID] = useState([]);
  const [searchTrack, setSearchTrack] = useState("");
  const [PlaylistName, setPlaylistName] = useState("");
  const [PlaylistDesc, setPlaylistDesc] = useState("");
  const [Playlists, setPlaylist] = useState([]);
  const [Selected, setSelected] = useState([]);
  const [PlaylistsTrack, setPlaylistsTrack] = useState([]);
  const token=((useSelector((state)=>state.accessToken)).accessToken);
  const Authorization = `Bearer ${token}`;
  useEffect (() => {
    console.log('token: ' +token)
  }, [token])

  
  
  //fitur search
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
      
      {/* <form onSubmit={Search} className="ssearch">
        <input
          onChange={(e) => setSearchTrack(e.target.value)}
          className="inputt"
          type="text"
        />
        <button className="search-button">
          Search
        </button>
      </form> */}
      <form onSubmit={Search} className="ssearch">
        <FormControl onSubmit={Search} className="ssearch">
          <TextField onChange={(e)=>setSearchTrack(e.target.value)} label="track" variant="outlined" className="inputt" type="text"/>
          <Button variant="contained" type="input" className="search-button">Search</Button>
        </FormControl>
      </form>
      
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
