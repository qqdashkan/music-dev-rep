function Pagination({ action }) {
  return (
    <div className="z-10 m-auto flex w-xl justify-center">
      <button
        onClick={() => action(-1)}
        className="flex h-8 cursor-pointer items-center justify-center rounded-lg bg-white px-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Back
      </button>

      <button
        onClick={() => action(1)}
        className="ms-3 flex h-8 cursor-pointer items-center justify-center rounded-lg bg-white px-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
