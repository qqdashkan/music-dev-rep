import SongItem from "../components/containers/SongItem";
import Pagination from "../components/ui/Pagination";
import { useState, useEffect } from "react";

const SongsList = ({ tracks, loading, setSortField, onPlay }) => {
  const [field, setField] = useState("Sort by");
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    setSortField(field);
  }, [field]);

  return (
    <>
      <div className="custom-select relative flex w-xl items-center justify-end">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex cursor-pointer items-center justify-center gap-1 rounded-full bg-[#e1f6f7] px-5 py-1 text-base hover:bg-[#c2ecef] active:bg-[#86dde1]"
        >
          <p className="font-medium capitalize">{field}</p>
          <svg
            className="mt-0.5 h-[16px] w-[16px] dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            id="dropdown"
            onMouseLeave={() => {
              setIsOpen((prev) => !prev);
            }}
            className="absolute top-9 left-116 z-10 w-30 divide-y divide-gray-100 rounded-2xl bg-white shadow-2xl dark:bg-gray-700"
          >
            <ul
              className="text-base text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li
                onClick={() => {
                  setField("title");
                }}
                className="block cursor-pointer rounded-t-2xl px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Title
              </li>
              <li
                onClick={() => {
                  setField("artist");
                }}
                className="block cursor-pointer px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Artist
              </li>
              <li
                onClick={() => {
                  setField((prev) =>
                    prev === "shuffle" ? "Shuffle" : "shuffle",
                  );
                }}
                className="block cursor-pointer rounded-b-2xl px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Shuffle
              </li>
            </ul>
          </div>
        )}
      </div>
      {loading ? (
        <p className="mt-8 text-center text-white">Loading...</p>
      ) : tracks.length > 0 ? (
        <div className="mb-5 w-xl">
          {tracks.map((track) => (
            <SongItem
              track={track}
              key={track.listeners ? track.listeners : track.id}
              setPlayerTrack={onPlay}
            ></SongItem>
          ))}
        </div>
      ) : (
        <p className="mt-8 text-center text-white">Not found</p>
      )}
    </>
  );
};

export default SongsList;
