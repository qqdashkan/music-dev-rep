import { useDebounce } from "use-debounce";
import { useState, useEffect } from "react";
import { searchTrackByName } from "../../scripts/backend/backend";

import SearchResultItem from "../containers/SearchResultItem";
import SearchInput from "../inputs/SearchInput";

const Search = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(null);
  const [debouncedText] = useDebounce(text, 500);

  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedText.trim()) {
        setResponse(null);
        return;
      }

      try {
        const data = await searchTrackByName(debouncedText);
        const { results } = data;
        setResponse(results.artistmatches);
        console.log(results.artistmatches);
      } catch (err) {
        console.error("Ошибка при поиске:", err);
      }
    };

    fetchData();
  }, [debouncedText]);

  return (
    <>
      <div className="search-container relative w-xl">
        <form className="flex items-center rounded-full bg-white">
          <SearchInput action={setText}></SearchInput>
        </form>
        {response && (
          <SearchResultItem result={response.artist}></SearchResultItem>
        )}
      </div>
    </>
  );
};

export default Search;
