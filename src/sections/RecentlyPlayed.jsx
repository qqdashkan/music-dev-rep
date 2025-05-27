import SongItem from "../components/containers/SongItem";
import { fetchTopTracksByTag } from "../scripts/backend/backend";
import { useEffect, useState } from "react";
import Button from "../components/inputs/Button";

const RecentlySearch = () => {
  const columns = 2;
  const itemsPerRow = columns;
  const [tracks, setTracks] = useState(null);
  const [visibleRows, setVisibleRows] = useState(2);
  const [visibleTracks, setVisibleTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      const tracksList = await fetchTopTracksByTag(1, "electronic");
      const { tracks } = tracksList;
      setTracks(tracks.track);
      setVisibleTracks(tracks.track.slice(0, visibleRows * itemsPerRow));
    };
    fetchTopTracks();
  }, []);

  useEffect(() => {
    if (tracks) {
      setVisibleTracks(tracks.slice(0, visibleRows * itemsPerRow));
    } else return;
  }, [visibleRows]);

  return (
    <>
      <div className="m-auto flex w-5xl gap-5 py-5">
        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-lg bg-gradient-to-tr from-red-200 from-5% via-orange-50 to-teal-200 to-80%">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={35}
            height={35}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-history"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 8l0 4l2 2" />
            <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-medium">Recently Played</h2>
          <p>Music from your latest search.</p>
        </div>
      </div>
      <section className="m-auto w-5xl flex-1 justify-between">
        {tracks ? (
          <div className="grid w-5xl grid-cols-2 gap-x-4 py-4">
            {visibleTracks.map((track) => (
              <SongItem track={track} key={track.mbid}></SongItem>
            ))}
          </div>
        ) : (
          <p className="text-black">Loading...</p>
        )}

        {tracks && visibleTracks.length < tracks.length && (
          <div className="flex justify-center py-4">
            <Button
              onClick={() => setVisibleRows((prev) => prev + 1)}
              className="flex cursor-pointer items-center justify-center rounded-full bg-[#e1f6f7] px-5 py-2.5 text-base font-medium hover:bg-[#c2ecef] active:bg-[#86dde1]"
            >
              See more +
            </Button>
          </div>
        )}
        <hr className="border-0.5 m-auto mt-6 w-5xl border-neutral-200 py-2" />
      </section>
    </>
  );
};

export default RecentlySearch;
