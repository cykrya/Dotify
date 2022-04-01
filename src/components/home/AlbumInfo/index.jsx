import React from "react";



const AlbumInfo = ({ data,tracks,setTracks }) => {
  const album = data.album;
  
  const dataCheck= ()=>{
    if (tracks.includes(data.id))
      setTracks((prev) => prev.filter((id) => id !== data.id));
    else 
    setTracks((prev) => [...prev, data.id]);
  }
  console.log(album);
  return (
    <div className="album-body">
      <div className="album-imgg">
        <img
          src={album.images[1].url}
          alt={data.name}
          className="album-img"
        />
      </div>
      <div className="album-bodyy">
        <div className="album-info">
          <h3 className="album-track">
            <a className="anchor" href={data.external_urls.spotify }>
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
        <button
            onClick={dataCheck}
            className={`${
              !tracks.includes(data.id) ? "btn-normal" : "btn-selected"
            } `}
          >
            {tracks.includes(data.id) ? "Deselect" : "Select"}
          </button>
        
      </div>
    </div>
  );
};

export default AlbumInfo;
