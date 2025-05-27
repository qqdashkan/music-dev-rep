function SearchInput({ action }) {
  return (
    <input
      required
      id="search"
      type="search"
      name="search"
      placeholder="Search.."
      onChange={(event) => {
        action(event.target.value);
      }}
      className="flex-wrap: nowrap; flex w-3xl cursor-text justify-between rounded-full border-0 border-none bg-transparent px-4 py-2.5 outline-0 placeholder-shown:font-extralight placeholder-shown:text-gray-300"
    />
  );
}

export default SearchInput;
