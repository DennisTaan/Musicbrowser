import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? `active-library` : ""}`}>
      <h2>library</h2>
      <div className='library-songs'></div>
      {songs.map((song) => (
        <LibrarySong
          songs={songs}
          setCurrentSong={setCurrentSong}
          song={song}
          id={song.id}
          key={song.id}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
        />
      ))}
    </div>
  );
};
export default Library;
