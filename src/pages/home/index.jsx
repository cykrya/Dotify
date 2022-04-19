/* eslint-disable no-unused-vars */
import React, {useEffect, useState } from "react";
import axios from "axios";
import AlbumInfo from "../../components/home/AlbumInfo";
import formatParameter from "../../utils/formatParameter";
import {useSelector } from "react-redux";
<<<<<<< HEAD
import { Box, Button, FormControl, TextField } from "@mui/material";
//import { getAccessToken } from "../../components/core/action";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
=======
import { Alert, Box, Button, Collapse, FormControl, IconButton, TextField } from "@mui/material";
//import { getAccessToken } from "../../components/core/action";
//import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme ({
>>>>>>> a8d7d82 (added test for track component)
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
<<<<<<< HEAD
  const [Selected, setSelected] = useState([]);
  const [PlaylistsTrack, setPlaylistsTrack] = useState([]);
  const token=((useSelector((state)=>state.accessToken)).accessToken);
=======
  const [PlaylistsStatus, setPlaylistStatus] = useState(true);
  //const [Open, setOpen] = useState(false);
  const [Selected, setSelected] = useState([]);
  const [PlaylistsTrack, setPlaylistsTrack] = useState([]);
  const token=((useSelector((state)=>state.Spotify)).accessToken);
>>>>>>> a8d7d82 (added test for track component)
  const Authorization = `Bearer ${token}`;
  useEffect (() => {
    console.log('token: ' +token)
  }, [token])

  
  
  //fitur search
  const Search = (e) => {
    e.preventDefault();
<<<<<<< HEAD
=======
    console.log("searching track")
>>>>>>> a8d7d82 (added test for track component)
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
<<<<<<< HEAD
  console.log("playlist")
=======
  console.log("getting user id")

>>>>>>> a8d7d82 (added test for track component)
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
<<<<<<< HEAD

  })
  
  //make playlist
=======
    console.log("got user id")
  })
  
  //make playlist
  console.log("making playlist")
>>>>>>> a8d7d82 (added test for track component)
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
<<<<<<< HEAD
    console.log("playlist")
=======
    setPlaylistStatus(false);
    console.log("playlist made.")
    // return(
    //   <Box sx={{width:'100%'}}>
    //     <Collapse in={Open}>
    //       <Alert
    //         action={
    //           <IconButton 
    //             aria-label="close"
    //             color="inherit"
    //             size="small"
    //             onClick={()=>{
    //               setOpen(false);
    //             }}
    //           >
    //             <CloseIcon fontSize="inherit" />
    //           </IconButton>
    //         }
    //         sx= {{mb:2}}>
    //           Playlist Created!
    //         </Alert>
    //     </Collapse>
    //   </Box>
    // )
>>>>>>> a8d7d82 (added test for track component)
  });
  
};
  

  return (
    <ThemeProvider theme={theme}>
      <div className="body">
        <h2 className="title-home">
          Home
        </h2>
        <div className={`${searchTrack ? "playlistcreation" : "notrackselected"} `}>
          <h1>ADD PLAYLIST</h1>
          <form onSubmit={addPlaylist} className="playlistForm">
            <input
              onChange={(e) => setPlaylistName(e.target.value)}
              className="playlist-name"
              placeholder="name"
              type="text" />
            <input
              onChange={(e) => setPlaylistDesc(e.target.value)}
              className="playlist-description"
              placeholder="description"
              type="text" />
            
            <Button variant="contained" type="input" style={{ fontSize: '10px' }} className="playlist-button">Add Playlist</Button>
          </form>
        </div>

    
        <form onSubmit={Search} className="ssearch">
          <FormControl onSubmit={Search} className="ssearch">
            <TextField onChange={(e) => setSearchTrack(e.target.value)} label="track" variant="outlined" className="inputt" type="text" />
            <Box mt={0.5}>
<<<<<<< HEAD
              <Button variant="contained" type="input" className="search-button">Search</Button>
=======
              <Button disabled= {PlaylistsStatus} variant="contained" type="input" className="search-button">Search</Button>
>>>>>>> a8d7d82 (added test for track component)
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
<<<<<<< HEAD
              PlaylistsTrack={PlaylistsTrack}
=======
>>>>>>> a8d7d82 (added test for track component)
              Playlists={Playlists} />
          ))}
        </div>

        
      </div>
      
    </ThemeProvider>
  );
};
export default Home;
