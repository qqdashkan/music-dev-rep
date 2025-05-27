import Search from "../components/forms/Search";
import Button from "../components/inputs/Button";
import { Link } from "react-router";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 mb-5 flex w-full items-center justify-center bg-linear-65/srgb from-red-200 via-orange-50 via-60% to-teal-200 px-25 py-5">
        <div className="flex size-fit items-center justify-between gap-10">
          <Link to="/">
            <img
              src="https://i.ibb.co/8gsB6sQW/logo-music-1.png"
              alt="logo"
              width="175px"
              className="overflow-hidden object-cover"
            />
          </Link>
          <div className="flex justify-between gap-5">
            <Search />
            <Button className="flex cursor-pointer items-center justify-end gap-1 rounded-full bg-[#008194] px-10 py-2.5 text-center text-lg text-white hover:bg-[#005f75] active:bg-[#003954]">
              <strong>Search</strong>
            </Button>
          </div>
          <Link to="/profile">
            <div className="flex items-center justify-center gap-5">
              <img
                src="https://i.ibb.co/nsKW18Yq/kimson-doan-HD8-Kly-WRYYM-unsplash.jpg"
                alt="avatar"
                width={"50px"}
                className="aspect-square overflow-hidden rounded-full object-cover"
              />

              <div className="flex-1 items-center justify-center">
                <strong className="text-start font-semibold text-nowrap">
                  <p>Daria Neshcheretna</p>
                </strong>
                <p>Basic</p>
              </div>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
