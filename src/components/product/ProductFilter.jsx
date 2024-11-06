import { useContext, useEffect, useRef, useState } from "react";
import { DownArrowSVG } from "../../assets/svg/SVG";
import { CategoryContext, ShopContext } from "../../context";

export default function ProductFilter() {
  const { state, dispatch } = useContext(ShopContext);
  const { categories, loading, error } = useContext(CategoryContext);
  const [showFilter, setShowFilter] = useState(false);
  const filterDropDownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterDropDownRef.current &&
        !filterDropDownRef.current.contains(event.target)
      ) {
        setShowFilter(false);
      }
    }

    // Add event listener when dropdown is open
    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  const handleFilter = (category) => {
    dispatch({ type: "SET_FILTER", payload: category });
  };

  return (
    <div className="relative inline-block text-left" ref={filterDropDownRef}>
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="filter-button"
          aria-expanded={showFilter}
          aria-haspopup="true"
          onClick={() => {
            setShowFilter(!showFilter);
          }}
        >
          Filter
          <DownArrowSVG className={showFilter ? "rotate-180 transform" : ""} />
        </button>
      </div>
      {showFilter && (
        <div
          className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          id="filter-dropdown"
        >
          <div className="py-1" role="none">
            {loading.state ? (
              <span className="block px-4 py-2 text-sm text-gray-700">
                {loading.message}
              </span>
            ) : error ? (
              <span className="block px-4 py-2 text-sm text-gray-700">
                {error}
              </span>
            ) : (
              categories.map((category, idx) => (
                <label
                  key={idx}
                  className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    id="filter-option-1"
                    checked={state.filter === category}
                    onChange={() => {
                      if (state.filter === category) {
                        dispatch({ type: "SET_FILTER", payload: "" });
                      } else {
                        handleFilter(category);
                      }
                    }}
                  />
                  <span className="ml-2">{category}</span>
                </label>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
