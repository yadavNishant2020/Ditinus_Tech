import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav
        className={`w-full z-20 ${
          isNavOpen ? "bg-opacity-100" : "bg-opacity-85"
        } `}
      >
        <div className="flex flex-wrap items-center justify-between p-4 sm:mx-14 md:mx-14 lg:mx-32">
          <a className="flex items-center rtl:space-x-reverse">
            <img src="logo.jpg" className="h-16" alt="Logo" />
          </a>

          <button
            type="button"
            onClick={toggleNav}
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-white rounded-lg  md:hidden "
            aria-expanded={isNavOpen ? "true" : "false"}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className={`w-5 h-5 transition-transform transform ${
                isNavOpen ? "rotate-45" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`text-center items-center justify-center ${
              isNavOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 text-sm font-medium md:p-0 text-light-green md:space-x-16 rtl:space-x-reverse md:flex-row md:mt-0 lg:mr-20">
              <li>
                <Link
                  to=""
                  className="block px-3 py-2 rounded md:bg-transparent md:p-0   cursor-pointer"
                  spy={true}
                  offset={-70}
                  activeClass="active"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block px-3 py-2 rounded md:p-0 cursor-pointer"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block px-3 py-2 rounded md:p-0  cursor-pointer"
                >
                  FLEET
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block px-3 py-2 rounded md:p-0   cursor-pointer"
                >
                  REAL TIME TRACKING
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block px-3 py-2 rounded md:p-0   cursor-pointer"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
            <div className="hidden lg:flex gap-5 ml-20">
              <img src="facebook.png" alt="" />
              <img src="insta.png" alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
