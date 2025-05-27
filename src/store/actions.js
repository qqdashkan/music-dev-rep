import * as type from "./types";

export function setTracks(tracks) {
  return {
    type: type.SET_TRACKS,
    payload: tracks,
  };
}

export function setCurrentTrack(currentTrack) {
  return {
    type: type.SET_CURRENT_TRACK,
    payload: currentTrack,
  };
}

export function setSelectedTracks(selectedTrack) {
  return {
    type: type.SET_SELECTED_TRACK,
    payload: selectedTrack,
  };
}

export function setModal(isOpen) {
  return {
    type: type.SET_MODAL,
    payload: isOpen,
  };
}

export function setLoading(loading) {
  return {
    type: type.SET_LOADING,
    payload: loading,
  };
}

export function setSortField(sortField) {
  return {
    type: type.SET_SORT_FIELD,
    payload: sortField,
  };
}

export function setSortOrder(order) {
  return {
    type: type.SET_SORT_ORDER,
    payload: order,
  };
}

export function setPage(currentPage) {
  return {
    type: type.SET_PAGE,
    payload: currentPage,
  };
}

export function setMeta(meta) {
  return {
    type: type.SET_META,
    payload: meta,
  };
}

export function setAudioFile(id, file) {
  return {
    type: type.SET_AUDIO_FILE,
    payload: { id, file },
  };
}
