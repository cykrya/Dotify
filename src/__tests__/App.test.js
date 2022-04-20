import React from 'react'
import { render,screen } from "@testing-library/react";
import App from "../App";

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import userEvent from '@testing-library/user-event';
import AlbumInfo from '../components/home/AlbumInfo';
import Home from '../pages/home';

describe('testing the app launch', () => {
    const initialState = {Spotify:{accessToken:'10000000'}}
    const mockStore = configureStore()

    let store

    it('Start the test on App!"', () => {
      store = mockStore(initialState)
      render(<Provider store={store}><App /></Provider>);
      const login= screen.getByRole('link', {
        name: /Sign using spotify/i
      });
      userEvent.click(login);

      render(<Provider store={store}><Home /></Provider>)

    })
})

describe('Testing the tracks component', () => {
    const initialState = {Spotify:{accessToken:'10000000'}}
    const mockStore = configureStore()
    const data = {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify: "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"
              },
              href: "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
              id: "1dfeR4HaWDbWqFHLkxsg1d",
              name: "Queen",
              type: "artist",
              uri: "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
            }
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6i6folBtxKV28WX3msQ4FE"
          },
          href: "https://api.spotify.com/v1/albums/6i6folBtxKV28WX3msQ4FE",
          id: "6i6folBtxKV28WX3msQ4FE",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851e8b066f70c206551210d902b",
              width: 64
            }
          ],
          name: "Bohemian Rhapsody (The Original Soundtrack)",
          release_date: "2018-10-19",
          release_date_precision: "day",
          total_tracks: 22,
          type: "album",
          uri: "spotify:album:6i6folBtxKV28WX3msQ4FE"
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"
            },
            href: "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
            id: "1dfeR4HaWDbWqFHLkxsg1d",
            name: "Queen",
            type: "artist",
            uri: "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
          }
        ],
        disc_number: 1,
        duration_ms: 354947,
        explicit: false,
        external_ids: {
          isrc: "GBUM71029604"
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb"
        },
        href: "https://api.spotify.com/v1/tracks/3z8h0TU7ReDPLIbEnYhWZb",
        id: "3z8h0TU7ReDPLIbEnYhWZb",
        is_local: false,
        is_playable: true,
        name: "Bohemian Rhapsody",
        popularity: 72,
        preview_url: null,
        track_number: 7,
        type: "track",
        uri: "spotify:track:3z8h0TU7ReDPLIbEnYhWZb"
      };
    const tracks=[]
    let store

    it('Start the test on AlbumInfo!"', () => {
      store = mockStore(initialState)
      render(<Provider store={store}><AlbumInfo data= {data} tracks= {tracks}/></Provider>);
    })
})
