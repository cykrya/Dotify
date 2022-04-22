/* eslint-disable no-unused-vars */
import  { useEffect, useState } from "react";
import axios from "axios";
import AlbumInfo from "../../components/home/AlbumInfo";
import formatParameter from "../../utils/formatParameter";
import {useSelector } from "react-redux";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PlaylistCreated from "../../components/home/alerts/PlaylistCreated";
import PlaylistNotCreated from "../../components/home/alerts/PlaylistNotCreated";


const theme = createTheme({
  palette: {
    primary: {
      main: '#857864',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});


const Home = () => {
  const [Albums, setAlbums] = useState([]);
  const [userID, setuserID] = useState([]);
  const [searchTrack, setSearchTrack] = useState("");
  const [PlaylistName, setPlaylistName] = useState("");
  const [PlaylistDesc, setPlaylistDesc] = useState("");
  const [Playlists, setPlaylist] = useState([]);
  const [PlaylistsStatus, setPlaylistStatus] = useState(true);
  const [Open, setOpen] = useState(false);
  const [Selected, setSelected] = useState([]);
  const [PlaylistsTrack, setPlaylistsTrack] = useState([]);
  const token=((useSelector((state)=>state.Spotify)).accessToken);
  const Authorization = `Bearer ${token}`;
  
  useEffect (()=>{
    console.log("getting user id")
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
      console.log("got user id")
    })
  },[Authorization]);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }, [Open]);

  //fitur search
  const Search = (e) => {
    e.preventDefault();
    console.log("searching track")
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
  setPlaylistStatus(false);
  console.log(PlaylistsStatus)
  //make playlist
  console.log("making playlist")
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
    console.log("playlist made.")
  });
};
  

  return (
    <ThemeProvider theme={theme}>
      <div className="body">
      <PlaylistCreated Open={Open}/>
      <PlaylistNotCreated PlaylistsStatus={PlaylistsStatus}/>
        <h1 className="title-home">
          Search
        </h1>
        <div className="playlistcreation">
          <h2>ADD PLAYLIST</h2>
          <form onSubmit={addPlaylist} className="playlistForm">
          <FormControl onSubmit={Search} className="ssearch">
            <TextField onChange={(e) => setPlaylistName(e.target.value)} label="Playlist Name" variant="outlined" className="playlist-name" type="text" />
            <span><TextField onChange={(e) => setPlaylistDesc(e.target.value)} label="Playlist description" variant="outlined" className="playlist-description" type="text" /></span>
            <Box mt={0.5}>
                <Button onClick={() => {
                    setOpen(true);
                  }} disabled= {!Boolean(PlaylistName.length>9)}  variant="contained" type="input"  className="playlist-button">Create</Button>
            </Box>
          </FormControl>
          </form>
        </div>

        <form onSubmit={Search} className="ssearch">
          <FormControl onSubmit={Search} className="ssearch">
            <TextField onChange={(e) => setSearchTrack(e.target.value)} label="track" variant="outlined" className="inputt" type="text" />
            <Box mt={0.5}>
                <Button disabled= {PlaylistsStatus}  variant="contained" type="input" className="search-button">Search</Button>
            </Box>
          </FormControl>
        </form>

        <div className="albuminfos">
          {Albums.map((data) => (
            <AlbumInfo
              key={data.id}
              data={data}
              tracks={Selected}
              setTracks={setSelected}
              searchTrack={searchTrack}
              setPlaylistsTrack={setPlaylistsTrack}
              Playlists={Playlists} />
          ))}
        </div>

      </div>
    </ThemeProvider>
  );
};
export default Home;
