function SearchResultItem({ result }) {
  return (
    <div className="absolute top-13 rounded-2xl border-1 border-neutral-200 bg-white py-2 text-blue-950 shadow-xl">
      {result &&
        result
          .map((item) => (
            <div
              className="flex w-xl cursor-pointer justify-start py-2 ps-5 text-left text-base font-normal hover:bg-stone-100"
              key={item.listeners}
            >
              <p>{item.name}</p>
              <br />
              {/* {item.title} */}
            </div>
          ))
          .slice(0, 5)}
    </div>
  );
}

export default SearchResultItem;
