export const INITIAL_STATE = {
  tracks: [],
  currentTrack: null,
  selectedTrack: null,
  isOpen: false,
  loading: true,
  sortField: "",
  sortOrder: "",
  currentPage: 1,
  meta: {},
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_TRACKS":
      return { ...state, tracks: action.payload };
    case "SET_CURRENT_TRACK":
      return { ...state, currentTrack: action.payload };
    case "SET_SELECTED_TRACK":
      return { ...state, selectedTrack: action.payload };
    case "SET_MODAL":
      return { ...state, isOpen: !state.isOpen };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_SORT_FIELD":
      return state.sortField === action.payload
        ? {
            ...state,
            sortField: "",
            sortOrder: "",
          }
        : {
            ...state,
            sortField: action.payload,
            sortOrder: "",
          };
    case "SET_SORT_ORDER":
      return {
        ...state,
        sortOrder:
          state.sortOrder === ""
            ? "asc"
            : state.sortOrder === "asc"
              ? "desc"
              : "asc",
      };
    case "SET_PAGE":
      return { ...state, currentPage: Number(action.payload) };
    case "SET_META":
      return {
        ...state,
        meta: {
          ...action.payload,
          page: Number(action.payload.page),
          perPage: Number(action.payload.perPage),
          totalPages: Number(action.payload.totalPages),
          total: Number(action.payload.total),
        },
      };
    case "SET_AUDIO_FILE":
      return {
        ...state,
        tracks: state.tracks.map((track) =>
          track.id === action.payload.id
            ? { ...track, audioFile: action.payload.audioFile }
            : track,
        ),
      };
    default:
      return state;
  }
}
