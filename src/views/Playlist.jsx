import { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { INITIAL_STATE, reducer } from "../store/reducer";
import Body from "../sections/Body";

const Playlist = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const params = useParams();

  const getTracksFromPlaylist = async () => {
    try {
      const response = await fetch(
        `https://my-music-app-ag5l.onrender.com/api/playlists/${params.playlistId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        return;
      }

      const data = await response.json();
      dispatch({ type: "SET_TRACKS", payload: data });
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
      dispatch({ type: "SET_CURRENT_TRACK", payload: data[0] });
      dispatch({
        type: "SET_META",
        payload: {
          page: 1,
          perPage: 10,
          totalPages: Math.ceil(data.length / 10),
          total: data.length,
        },
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getTracksFromPlaylist();
  }, []);

  return (
    <>
      <div className="w-screen">
        <Body
          tracks={state.tracks}
          loading={state.loading}
          sortField={state.sortField}
          currentSong={state.currentTrack}
          onPlayTrack={(track) =>
            dispatch({ type: "SET_CURRENT_TRACK", payload: track })
          }
          setSortField={(value) =>
            dispatch({ type: "SET_SORT_FIELD", payload: value })
          }
        ></Body>
      </div>
    </>
  );
};

export default Playlist;
