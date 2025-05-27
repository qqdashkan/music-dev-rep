import Pagination from "../components/ui/Pagination";
import Player from "./Player";
import SongsList from "./SongsList";

function Body({
  tracks,
  loading,
  onPaginate,
  setSortField,
  onPlayTrack,
  currentSong,
}) {
  return (
    <div className="m-auto w-5xl">
      <div className="m-auto flex justify-center px-4 pb-6">
        {currentSong ? (
          <Player className="h-1/2 w-2/6" currentTrack={currentSong} />
        ) : (
          <p className="w-2/6 text-center text-black">Player not available</p>
        )}
        {tracks ? (
          <div className="flex w-4/6 flex-col items-center justify-center">
            <SongsList
              tracks={tracks}
              loading={loading}
              onPaginate={onPaginate}
              setSortField={setSortField}
              onPlay={onPlayTrack}
            />
          </div>
        ) : (
          <p className="w-2/6 text-center text-black">Tracks not found</p>
        )}
      </div>
    </div>
  );
}

export default Body;
