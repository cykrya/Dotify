/* eslint-disable no-unused-vars */
import React, {useEffect, useState } from "react";
import axios from "axios";
import AlbumInfo from "../../components/home/AlbumInfo";
import formatParameter from "../../utils/formatParameter";
import {useSelector } from "react-redux";
<<<<<<< HEAD
<<<<<<< HEAD
import { Box, Button, FormControl, TextField } from "@mui/material";
//import { getAccessToken } from "../../components/core/action";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
=======
=======
>>>>>>> 948f2a5 (minor fixes)
import { Alert, Box, Button, Collapse, FormControl, IconButton, TextField } from "@mui/material";
//import { getAccessToken } from "../../components/core/action";
//import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from "@mui/material/styles";

<<<<<<< HEAD
const theme = createTheme ({
>>>>>>> a8d7d82 (added test for track component)
=======
const theme = createTheme({
>>>>>>> 948f2a5 (minor fixes)
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
<<<<<<< HEAD
  const [Selected, setSelected] = useState([]);
  const [PlaylistsTrack, setPlaylistsTrack] = useState([]);
  const token=((useSelector((state)=>state.accessToken)).accessToken);
=======
=======
>>>>>>> 948f2a5 (minor fixes)
  const [PlaylistsStatus, setPlaylistStatus] = useState(true);
  //const [Open, setOpen] = useState(false);
  const [Selected, setSelected] = useState([]);
  const [PlaylistsTrack, setPlaylistsTrack] = useState([]);
  const token=((useSelector((state)=>state.Spotify)).accessToken);
<<<<<<< HEAD
>>>>>>> a8d7d82 (added test for track component)
=======
>>>>>>> 948f2a5 (minor fixes)
  const Authorization = `Bearer ${token}`;
  useEffect (() => {
    console.log('token: ' +token)
  }, [token])

  
  
  //fitur search
  const Search = (e) => {
    e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log("searching track")
>>>>>>> a8d7d82 (added test for track component)
=======
    console.log("searching track")
>>>>>>> 948f2a5 (minor fixes)
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
<<<<<<< HEAD
  console.log("playlist")
=======
  console.log("getting user id")

>>>>>>> a8d7d82 (added test for track component)
=======
  console.log("getting user id")
>>>>>>> 948f2a5 (minor fixes)
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
<<<<<<< HEAD

  })
  
  //make playlist
=======
=======
>>>>>>> 948f2a5 (minor fixes)
    console.log("got user id")
  })
  
  //make playlist
  console.log("making playlist")
<<<<<<< HEAD
>>>>>>> a8d7d82 (added test for track component)
=======
  
  //make playlist
>>>>>>> 948f2a5 (minor fixes)
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
<<<<<<< HEAD
    console.log("playlist")
=======
    setPlaylistStatus(false);
    console.log("playlist made.")
=======
    console.log("playlist")
    setPlaylistStatus(false);
    console.log("playlist made.")

>>>>>>> 948f2a5 (minor fixes)
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
<<<<<<< HEAD
>>>>>>> a8d7d82 (added test for track component)
=======
>>>>>>> 948f2a5 (minor fixes)
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
<<<<<<< HEAD
              <Button variant="contained" type="input" className="search-button">Search</Button>
=======
              <Button disabled= {PlaylistsStatus} variant="contained" type="input" className="search-button">Search</Button>
>>>>>>> a8d7d82 (added test for track component)
=======
                <Button disabled= {PlaylistsStatus} variant="contained" type="input" className="search-button">Search</Button>
>>>>>>> 948f2a5 (minor fixes)
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
<<<<<<< HEAD
              PlaylistsTrack={PlaylistsTrack}
=======
>>>>>>> a8d7d82 (added test for track component)
=======
>>>>>>> 948f2a5 (minor fixes)
              Playlists={Playlists} />
          ))}
        </div>

        
      </div>
      
    </ThemeProvider>
  );
};
export default Home;
