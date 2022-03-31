import React, { useState, useEffect } from "react";

const Selectbtn= ({ data }) => {
    // const album = data.album;
    const [isActive, setIsActive] = useState(false);
    const [list,setList]= useState([]);

    return (
        <>
        <button className="btn-select" onClick={() => {setIsActive(!isActive); setList(data); }}>
            {isActive ? 'Deselect' : 'Select'}
        </button>
        {/* if isActive()
            <div className="listsss">
                <ul>
                    <li>
                        <span>
                            <img src={album.images[1].url} alt={data.name} className="list-albumImg"/> 
                        </span>

                        <span>
                            <a className="list-anchor" href={data.external_urls.spotify }>
                            {data.name}
                            </a> 
                        </span>

                        <span>
                            <a className="list-anchor" href={album.external_urls.spotify}>
                                {album.name}
                            </a> 
                        </span>

                        <span>
                        {data.artists.map((artis, index, arr) => (
                            <>
                                <a className="anchor"
                                key={artis.id}
                                href={artis.external_urls.spotify}
                                target="_blank"
                                rel="noopener noreferrer">
                                    {artis.name}
                                </a>
                                {index !== arr.length - 1 && ","}
                            </>
                        ))}
                        </span>
                    </li>

                </ul>
            </div> */}
        </>
    );
}

export default Selectbtn;
