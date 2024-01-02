import React, { useState, useRef, useEffect } from "react";

const compare = () => {
  const [selectedCompareOption, setSelectedCompareOption] =
    useState("2 Months");
  const [isCompareDropdownVisible, setIsCompareDropdownVisible] =
    useState(false);
  const compareOptions = ["3 Months", "4 Months", "5 Months", "6 Months"];
  const compareDropdownTimeout = useRef(null);

  const handleCompareSelect = (option) => {
    setSelectedCompareOption(option);
    closeCompareDropdown();
  };

  const openCompareDropdown = () => {
    clearTimeout(compareDropdownTimeout.current);
    setIsCompareDropdownVisible(true);
  };

  const closeCompareDropdown = () => {
    compareDropdownTimeout.current = setTimeout(() => {
      setIsCompareDropdownVisible(false);
    }, 500); // Set the delay time in milliseconds (1000ms = 1 second)
  };

  useEffect(() => {
    return () => {
      // Cleanup the timeout on component unmount
      clearTimeout(compareDropdownTimeout.current);
    };
  }, []);

  const [selectedTagOption, setSelectedTagOption] = useState("SIPs");
  const [isTagDropdownVisible, setIsTagDropdownVisible] = useState(false);
  const tagOptions = ["SIPs", "Travel", "Shopping", "Food", "Bills"];
  const tagDropdownTimeout = useRef(null);

  const handleTagSelect = (option) => {
    setSelectedTagOption(option);
    closeTagDropdown();
  };

  const openTagDropdown = () => {
    clearTimeout(tagDropdownTimeout.current);
    setIsTagDropdownVisible(true);
  };

  const closeTagDropdown = () => {
    tagDropdownTimeout.current = setTimeout(() => {
      setIsTagDropdownVisible(false);
    }, 500); // Set the delay time in milliseconds (1000ms = 1 second)
  };

  useEffect(() => {
    return () => {
      // Cleanup the timeout on component unmount
      clearTimeout(tagDropdownTimeout.current);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="container flex items-center justify-center">
          <h1 className="mt-6 mb-6 text-4xl font-bold">Track your Finance</h1>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h2 className="mt-6 mb-6 text-2xl font-semibold text-gray-600">
            Compare to your previous records
          </h2>
          <div className="flex space-x-4">
            {/* Compare Dropdown */}
            <div className="relative inline-block pl-10 text-left group">
              <button
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm pl-7 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="compare-options-menu"
                onMouseEnter={openCompareDropdown}
                onMouseLeave={closeCompareDropdown}
                aria-haspopup="true"
                aria-expanded={isCompareDropdownVisible}
              >
                {selectedCompareOption}
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  isCompareDropdownVisible ? "block" : "hidden"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="compare-options-menu"
                onMouseEnter={openCompareDropdown}
                onMouseLeave={closeCompareDropdown}
              >
                <div className="py-1" role="none">
                  {compareOptions.map((option, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCompareSelect(option);
                      }}
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Tag Dropdown */}
            <div className="relative inline-block pl-10 text-left group">
              <button
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm pl-7 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="tag-options-menu"
                onMouseEnter={openTagDropdown}
                onMouseLeave={closeTagDropdown}
                aria-haspopup="true"
                aria-expanded={isTagDropdownVisible}
              >
                {selectedTagOption}
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  isTagDropdownVisible ? "block" : "hidden"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="tag-options-menu"
                onMouseEnter={openTagDropdown}
                onMouseLeave={closeTagDropdown}
              >
                <div className="py-1" role="none">
                  {tagOptions.map((option, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTagSelect(option);
                      }}
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative inline-block pl-10 text-left group">
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Report</button>

            </div>
          </div>
          <div className="pt-12">
  <section className="text-gray-600 bg-black border-4 rounded-xl body-font" style={{ height: '30rem' }}>
    <div className="container flex items-center justify-center h-full">
      <h1 className="text-4xl">chart</h1>
    </div>
  </section>
</div>


        </div>
      </div>
    </div>
  );
};

export default compare;
