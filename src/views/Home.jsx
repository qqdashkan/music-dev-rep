import { useEffect, useReducer } from "react";
import { fetchTracks } from "../scripts/backend/backend";

import Modal from "../popups/Modal";
import Body from "../sections/Body";
import FormContent from "../components/forms/FormContent";
import { INITIAL_STATE, reducer } from "../store/reducer";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const paginate = (step) => {
    const nextPage = state.currentPage + step;
    if (nextPage < 1) return dispatch({ type: "SET_PAGE", payload: 1 });
    if (nextPage > state.meta.totalPages)
      return dispatch({ type: "SET_PAGE", payload: state.meta.totalPages });
    dispatch({ type: "SET_PAGE", payload: nextPage });
  };

  function updatePlayer() {
    !state.currentTrack
      ? dispatch({ type: "SET_CURRENT_TRACK", payload: state.tracks[0] })
      : dispatch({ type: "SET_CURRENT_TRACK", payload: state.currentTrack });
  }

  const loadTracks = async () => {
    try {
      const { tracks } = await fetchTracks(state.currentPage);

      dispatch({ type: "SET_TRACKS", payload: tracks.track });
      dispatch({ type: "SET_META", payload: tracks["@attr"] });
      dispatch({ type: "SET_CURRENT_TRACK", payload: tracks.track[0] });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      console.error("Ошибка при загрузке треков:", err);
    }
  };

  const sortTracksByTitle = () => {
    const sortedTracks = [...state.tracks].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    console.log(sortedTracks);
    dispatch({ type: "SET_TRACKS", payload: sortedTracks });
  };

  const sortTracksByArtist = () => {
    const sortedTracks = [...state.tracks].sort((a, b) => {
      const nameA = a.artist.name.toLowerCase();
      const nameB = b.artist.name.toLowerCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    console.log(sortedTracks);
    dispatch({ type: "SET_TRACKS", payload: sortedTracks });
  };

  const sortTracksByShuffle = () => {
    let tracksArray = state.tracks;
    const shuffleTracks = () => {
      for (let i = 0; i < tracksArray.length; i++) {
        const j = Math.floor(Math.random() * tracksArray.length);
        [tracksArray[i], tracksArray[j]] = [tracksArray[j], tracksArray[i]];
      }
      return tracksArray;
    };

    const tracksList = shuffleTracks();
    dispatch({ type: "SET_TRACKS", payload: tracksList });
  };

  useEffect(() => {
    state.sortField === "title"
      ? sortTracksByTitle()
      : state.sortField === "artist"
        ? sortTracksByArtist()
        : sortTracksByShuffle();
  }, [state.sortField]);

  useEffect(() => {
    loadTracks();
  }, [state.sortOrder, state.currentPage]);

  return (
    <>
      <div className="w-screen">
        <Body
          tracks={state.tracks}
          loading={state.loading}
          currentSong={state.currentTrack}
          onPaginate={paginate}
          onDeleted={loadTracks}
          sortField={state.sortField}
          onPlayTrack={(track) =>
            dispatch({ type: "SET_CURRENT_TRACK", payload: track })
          }
          onEdit={(track) => {
            dispatch({ type: "SET_SELECTED_TRACK", payload: track });
            dispatch({ type: "SET_MODAL" });
          }}
          setSortField={(value) =>
            dispatch({ type: "SET_SORT_FIELD", payload: value })
          }
        />
        <Modal
          isModalOpen={state.isOpen}
          onClick={() => dispatch({ type: "SET_MODAL" })}
          dataForm={state.selectedTrack}
          updateList={loadTracks}
          updatePlayer={updatePlayer}
        >
          <FormContent />
        </Modal>
      </div>
    </>
  );
};

export default Home;
