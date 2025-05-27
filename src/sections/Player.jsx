import { getTrackInfo } from "../scripts/backend/backend";
import { useEffect, useState } from "react";

export function Player({ currentTrack }) {
  const [trackImage, setTrackImage] = useState(null);
  const [track, setTrackInfo] = useState(null);
  const song = !currentTrack ? song : currentTrack.url;

  useEffect(() => {
    const fetchImage = async () => {
      if (currentTrack) {
        const trackInfo = await getTrackInfo(
          currentTrack.artist.name
            ? currentTrack.artist.name
            : currentTrack.artist,
          currentTrack.name,
        );
        const { track } = trackInfo;
        setTrackInfo(track);
        console.log(track);

        setTrackImage(track.album.image[3]);
      }
    };
    fetchImage();
  }, [currentTrack]);

  if (!currentTrack) return <p className="text-black">Loading...</p>;
  return (
    <>
      <div className="w-1/3 rounded-3xl">
        <div className="fixed right-82 m-auto block w-full">
          <div className="float-left w-full">
            {trackImage ? (
              <img
                className="m-auto my-10 block aspect-square w-60 overflow-hidden rounded-2xl object-cover text-center"
                src={trackImage["#text"]}
                alt={track.artist.name}
              />
            ) : (
              <p className="text-black">Loading img...</p>
            )}
          </div>
          {track ? (
            <div className="text-center text-2xl font-normal">
              <strong>{track.name}</strong>
              <p className="text-lg">{track.artist.name}</p>
            </div>
          ) : (
            <p className="text-black">Loading info...</p>
          )}
          <div className="mt-10 flex justify-center gap-0.75">
            <button className="me-[0.25px] cursor-pointer rounded-l-full bg-[#e1f6f7] py-2.5 ps-4.5 pe-4 hover:bg-[#c2ecef]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-player-skip-back"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 5v14l-12 -7z" />
                <path d="M4 5l0 14" />
              </svg>
            </button>
            <button className="cursor-pointer bg-[#e1f6f7] px-3 py-2.5 hover:bg-[#c2ecef]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                height={35}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-player-play"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 4v16l13 -8z" />
              </svg>
            </button>
            <button className="cursor-pointer rounded-r-full bg-[#e1f6f7] py-2.5 ps-4 pe-4.5 hover:bg-[#c2ecef]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-player-skip-forward"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 5v14l12 -7z" />
                <path d="M20 5l0 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
