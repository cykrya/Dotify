/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import formatParameter from "../../../utils/formatParameter";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";


const AlbumInfo = ({ data,tracks,setTracks,setPlaylistsTrack,PlaylistsTrack,Playlists}) => {
  const album = data.album;
  const Authorization = `Bearer ${((useSelector((state)=>state.accessToken)).accessToken)}`;
  console.log((useSelector((state)=>state.accessToken)).accessToken);
  const dataCheck= ()=>{
    if (tracks.includes(data.uri)){
      setTracks((prev) => prev.filter((uri) => uri !== data.uri));
      console.log('track removed');
      
    }
    else {
      setTracks((prev) => [...prev, data.uri]);
   
      //adding track
      axios.post(
        `https://api.spotify.com/v1/playlists/${Playlists.id}/tracks?${formatParameter({
          uris: data.uri,
        })}`,{},
        
        {  
          headers: {
            "Content-Type": "application/json",
            Authorization,
          },
        }
      )
    
      .then((response3) => {
        setPlaylistsTrack(response3.data);
        console.log("tracks added");
        
      });
    }

    
  }
  
  return (
    <>
    
    <div className="album-body">
      <div className="album-imgg">
        <img
          src={album.images[1].url}
          alt={data.name}
          className="album-img" />
      </div>
      <div className="album-bodyy">
        <div className="album-info">
          <h3 className="album-track">
            <a className="anchor" href={data.external_urls.spotify}>
              {data.name}
            </a>
          </h3>
          <h6 className="album-name">
            <a className="anchor" href={album.external_urls.spotify}>
              {album.name}
            </a>
          </h6>
          <p className="album-artist">
            {data.artists.map((artis, index, arr) => (
              <>
                <a className="anchor"
                  key={artis.id}
                  href={artis.external_urls.spotify}
                  target="_blank"

                  rel="noopener noreferrer"
                >
                  {artis.name}
                </a>
                {index !== arr.length - 1 && ","}
              </>
            ))}
          </p>
        </div>
        <Box mb={0.8}>  
          <Button variant="contained" type="input"
            onClick={dataCheck}
            className={`${tracks.includes(data.uri) ? "btn-selected" : "btn-default"} `}
          >
            {tracks.includes(data.uri) ? "Deselect" : "Select"}
          </Button>
        </Box>
      </div>
      <div className="playlist">
      </div>
    </div>
  
      </>  
  );
  
};


export default AlbumInfo;
