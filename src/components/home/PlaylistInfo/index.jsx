/* eslint-disable react/prop-types */
import { React } from "react"

const PlaylistInfo = ({ data,tracks,setTracks }) => {

  if (tracks.includes(data.uri)){
    setTracks((prev) => prev.filter((uri) => uri !== data.uri));
    console.log('track removed');
    return(
    <div className="playlist-body">
      <div className="playlist-bodyy">
        <div className="playlist-info">
          <h3 className="playlist-track">
            <a className="anchor" href={data.external_urls.spotify }>
              {data.name}
            </a>
          </h3>
          <p className="playlist-artist">
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
      </div>
    </div> 
    )
  }
  
  else {
    setTracks((prev) => [...prev, data.uri]);
    console.log('track added');
  }
  console.log(tracks);
  return(
    <div className="playlist-body">  
      <div className="playlist-bodyy">
        <div className="playlist-info">
          <h3 className="playlist-track">
            <a className="anchor" href={data.external_urls.spotify }>
              {data.name}
            </a>
          </h3>
          <p className="playlist-artist">
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
      </div>
    </div>
  )  
};

export default PlaylistInfo;