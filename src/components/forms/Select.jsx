import Select from "react-select";
import { useEffect, useMemo, useState } from "react";

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "transparent",
    border: "none",
    borderBottom: `2px solid ${state.isFocused ? "#3b82f6" : "#d1d5db"}`,
    borderRadius: 0,
    boxShadow: "none",
    fontSize: "14px",
    color: "#111827",
    padding: "2px 0",
    "&:hover": {
      borderBottomColor: "#3b82f6",
    },
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#3b82f6",
    padding: 4,
    "&:hover": {
      color: "#2563eb",
    },
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  valueContainer: (base) => ({
    ...base,
    padding: 0,
  }),

  multiValue: (base) => ({
    ...base,
    backgroundColor: "#dbeafe",
    fontWeight: 500,
    borderRadius: "4px",
  }),

  multiValueLabel: (base) => ({
    ...base,
    color: "#1e3a8a",
    fontWeight: 500,
    padding: "2px 6px",
  }),

  multiValueRemove: (base) => ({
    ...base,
    color: "#1e3a8a",
    ":hover": {
      backgroundColor: "#bfdbfe",
      color: "#1e40af",
    },
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused
      ? "#e0f2fe"
      : state.isSelected
        ? "#93c5fd"
        : "#fff",
    color: "#000",
    fontWeight: 500,
    fontSize: "0.875rem",
    cursor: "pointer",
  }),

  menu: (base) => ({
    ...base,
    backgroundColor: "#fff",
    color: "#000",
    zIndex: 20,
    borderRadius: "0.375rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    marginTop: "4px",
  }),

  singleValue: (base) => ({
    ...base,
    color: "#111827",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
    fontStyle: "italic",
  }),
};

function SelectComponent({ value, onChange }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/genres")
      .then((res) => res.json())
      .then((data) => {
        setGenres(data);
      })
      .catch((err) => {
        console.error("Ошибка при получении жанров:", err);
      });
  }, []);

  const options = useMemo(() => {
    return genres.map((genre) => ({
      value: genre,
      label: genre,
    }));
  }, [genres]);

  return (
    <Select
      styles={customStyles}
      isMulti={true}
      name="genres"
      value={value}
      placeholder=""
      onChange={onChange}
      options={options}
      classNamePrefix="select"
    />
  );
}

export default SelectComponent;
