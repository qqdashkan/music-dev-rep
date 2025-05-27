import { playlists } from "../data/playlists";
import { Link } from "react-router";
import { useState } from "react";
import Card from "../components/cards/Card";
import Button from "../components/inputs/Button";

const Trandings = () => {
  const [visibleRows, setVisibleRows] = useState(1);
  const columns = 4;
  const itemsPerRow = columns;
  const visiblePlaylists = playlists.slice(0, visibleRows * itemsPerRow);

  const createNewUser = async () => {
    await fetch("https://my-music-app-ag5l.onrender.com/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Daria Neshcheretna",
        avatar:
          "https://i.ibb.co/nsKW18Yq/kimson-doan-HD8-Kly-WRYYM-unsplash.jpg",
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server error:", errorData);
      return;
    }
  };
  return (
    <>
      <div className="m-auto flex w-5xl gap-4 py-4">
        <div
          onClick={createNewUser}
          className="flex h-[64px] w-[64px] items-center justify-center rounded-lg bg-gradient-to-tr from-red-200 from-5% via-orange-50 to-teal-200 to-80%"
        >
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-music"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M9 17v-13h10v13" />
            <path d="M9 8h10" />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-medium">Trending</h2>
          <p>These music perfectly match your searches and your profile.</p>
        </div>
      </div>
      <section className="m-auto grid w-5xl grid-cols-4 place-items-center gap-5 py-4">
        {visiblePlaylists.map((playlist) => (
          <Link to="/album" key={playlist.id}>
            <Card
              key={playlist.id}
              img={playlist.imgURL}
              name={playlist.title}
            />
          </Link>
        ))}
      </section>
      {visiblePlaylists.length < playlists.length && (
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
    </>
  );
};

export default Trandings;
