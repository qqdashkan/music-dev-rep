function Dropdown({ id, edit, remove, onCloseMenu }) {
  return (
    <div
      onMouseLeave={() => {
        onCloseMenu((prev) => !prev);
      }}
      id="dropdown"
      className={
        "absolute top-12 z-10 w-40 divide-y divide-gray-100 rounded-2xl bg-white shadow-2xl dark:bg-gray-700"
      }
    >
      <ul
        className="text-base text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li className="block cursor-pointer rounded-t-2xl px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          {edit}
        </li>
        <li className="block cursor-pointer px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          {remove}
        </li>
        <li className="block cursor-pointer px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Go to artist
        </li>
        <li className="block cursor-pointer rounded-b-2xl px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Add to playlist
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
