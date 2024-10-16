import SingleStatement from "./SingleStatement";
import { FilterSVG, SortingSVG } from "./SVG";

const Statement = ({ svg, type, bg }) => {
  return (
    <div className="border rounded-md relative">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div
            className={`h-10 w-10 ${bg} text-white rounded-md text-center object-center place-content-center text-base`}
          >
            {svg}
          </div>

          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              {type}
            </h3>
          </div>
        </div>
        <div>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <SortingSVG />
              </button>
            </div>

            <div
              className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Low to High
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  High to Low
                </a>
              </div>
            </div>
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="filter-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <FilterSVG />
              </button>
            </div>

            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="filter-button"
              tabIndex="-1"
              id="filter-dropdown"
            >
              <div className="py-1" role="none">
                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                    id="filter-option-1"
                  />
                  <span className="ml-2">Salary</span>
                </label>
                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                    id="filter-option-2"
                  />
                  <span className="ml-2">Outsourcing</span>
                </label>
                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                    id="filter-option-3"
                  />
                  <span className="ml-2">Bond</span>
                </label>

                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                    id="filter-option-3"
                  />
                  <span className="ml-2">Dividend</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 divide-y">
        <SingleStatement />
      </div>
    </div>
  );
};
export default Statement;
