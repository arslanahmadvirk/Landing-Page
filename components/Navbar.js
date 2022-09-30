/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  return (
    <div>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-white fixed w-full z-20 top-0 left-0 dark:border-gray-600">
        <div className=" md:w-11/12 w-4/5 flex flex-wrap justify-between items-center mx-auto">
          <div className="flex gap-5">
            <div className="flex ">
              <a href="#" className="flex items-center">
                <img src="/logo.png" className="mr-3 h-6" alt="Company Logo" />
              </a>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="md:hidden">
              <div
                id="navbar-sticky"
                class="absolute flex flex-col items-center hidden  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-gray-900"
              >
                <a
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="products-dropdown"
                  className="cursor-pointer"
                >
                  Poducts
                </a>
                <a href="#">How it works</a>
                <a href="#">How we are</a>
                <a href="#">News and insights</a>
              </div>
            </div>

            <div className="hidden justify-start items-center w-full md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white">
                <li>
                  <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="products-dropdown"
                    class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded md:w-auto md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                  >
                    Products
                    <svg
                      class="ml-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="works-dropdown"
                    class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded md:w-auto md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                  >
                    How it works
                    <svg
                      class="ml-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="who-dropdown"
                    class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded md:w-auto md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                  >
                    Who we are
                    <svg
                      class="ml-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="news-dropdown"
                    class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded md:w-auto md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                  >
                    News and insights
                    <svg
                      class="ml-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:mx-auto md:m-0 flex md:order-2 gap-3">
            <button
              type="button"
              className="text-dark-blue bg-transparent focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-3 md:mr-0 dark:bg-transparent border border-dark-blue"
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-dark-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-3 md:mr-0 dark:bg-dark-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          </div>
        </div>

        <div
          id="products-dropdown"
          className="absolute sm:mt-10 md:mt-2 mx-auto border-gray-200 shadow-sm hidden bg-white border-y "
        >
          <div className="grid py-5 px-4 mx-auto max-w-screen-lg text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Connect</div>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                    An intelligent online matchmaking platform curated and
                    managed by in-house STEM exports, that simplifies the
                    initial introduction between teams in academia and industry.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Discover</div>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                    A bespoke scouting platform managed by in-house STEM
                    experts, that provides leading industry teams with unique
                    access to the global academic ecosystem.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
