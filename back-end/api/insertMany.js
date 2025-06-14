import { artistArray } from "../../src/assets/database/artists.js"
import { songsArray } from "../../src/assets/database/songs.js"
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObg) => {
  const newArtistObj = { ...currentArtistObg };
  delete newArtistObj.id

  return newArtistObj;
});


const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id

  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db.collection("artists").insertMany(newArtistArray);

//console.log(responseSongs);
//console.log(responseArtists);
//console.log(songsArray);
