import { useContext, useEffect, useRef, useState } from "react";
import { DownArrowSVG } from "../../assets/svg/SVG";
import { ShopContext } from "../../context";

export default function ProductSort() {
  const { dispatch } = useContext(ShopContext);

  const [showSort, setShowSort] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSort(false);
      }
    }

    // Add event listener when dropdown is open
    if (showSort) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSort]);

  const handleSort = (option) => {
    dispatch({ type: "SET_SORT", payload: option });
    setShowSort(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-expanded={showSort}
          aria-haspopup="true"
          onClick={() => setShowSort(!showSort)}
        >
          Sort
          <DownArrowSVG className={showSort ? "rotate-180 transform" : ""} />
        </button>
      </div>

      {showSort && (
        <div
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <span
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              onClick={() => handleSort("asc")}
              id="menu-item-0"
            >
              Low to High
            </span>
            <span
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              onClick={() => handleSort("desc")}
              id="menu-item-1"
            >
              High to Low
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
