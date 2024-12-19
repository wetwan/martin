import { NavLink, useNavigate } from "react-router";
import { adminNav, assets, navLink } from "../../assets";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/20/solid";
import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";

type Props = {
  isTopOfPage: boolean;
};

const Nav = ({ isTopOfPage }: Props) => {
  const { user, logout } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState<boolean>(false);
  const navigate = useNavigate();
  const navbarBg = isTopOfPage ? "" : "bg-primary-100 shadow-md";

  return (
    <nav className={`${navbarBg} w-full p-2.5 z-50 fixed top-0`}>
      <div className=" flex items-center justify-between w-5/6 mx-auto ">
        <img
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          src={assets.Logo}
          alt="logo"
          className="w-12"
        />
        {user ? (
          <ul className=" md:flex items-center gap-10 hidden ">
            {adminNav.map((nav, i) => (
              <li key={i}>
                <NavLink
                  to={nav.link}
                  onClick={() => scrollTo(0, 0)}
                  className={({ isActive }) =>
                    `py-2 capitalize text-xl cursor-pointer transition-colors ease-in duration-300 ${
                      isActive
                        ? "text-secondary-200 font-extrabold"
                        : "hover:text-secondary-200 font-bold text-primary-300"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <ul className=" md:flex items-center gap-10 hidden ">
            {navLink.map((nav, i) => (
              <li key={i}>
                <NavLink
                  to={nav.link}
                  onClick={() => scrollTo(0, 0)}
                  className={({ isActive }) =>
                    `py-2 capitalize text-xl cursor-pointer transition-colors ease-in duration-300 ${
                      isActive
                        ? "text-secondary-200 font-extrabold"
                        : "hover:text-secondary-200 font-bold text-primary-300"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        {user ? (
          <button
            className="hidden sm:block sm:ml-[50%] md:ml-0 bg-primary-200 text-secondary-200 py-2 font-bold rounded-full hover:bg-secondary-200 hover:text-primary-200 transition-all duration-200 shadow-md text-xl px-12"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            logout
          </button>
        ) : (
          <button
            className="hidden sm:block sm:ml-[50%] md:ml-0 bg-primary-200 text-secondary-200 py-2 font-bold rounded-full hover:bg-secondary-200 hover:text-primary-200 transition-all duration-200 shadow-md text-xl px-12"
            onClick={() => navigate("/login")}
          >
            {" "}
            Login
          </button>
        )}

        <div className="md:hidden">
          <Bars3Icon
            className="w-10 text-secondary-200 hover:text-primary-300 transition-colors"
            onClick={() => setOpenNav(!openNav)}
          />
        </div>
      </div>
      {openNav && (
        <div className="md:block flex flex-col items-start fixed w-3/5 bg-gray-300 text-white top-0 right-0 py-5 bottom-0 px-3 shadow-md">
          <div className="flex justify-end w-full px-5 mb-20">
            <XCircleIcon
              className="w-10 text-secondary-200 hover:text-primary-300 transition-colors"
              onClick={() => setOpenNav(!openNav)}
            />
          </div>
          {user ? (
            <ul className="w-full px-4 py-5 flex items-center gap-5 flex-col ">
              {adminNav.map((nav, i) => (
                <li key={i} className="w-full border py-4 ">
                  <NavLink
                    className={({ isActive }) =>
                      `py-3 block text-center w-11/12 mx-auto capitalize text-xl cursor-pointer transition-colors ease-in duration-300 ${
                        isActive
                          ? "text-secondary-200 font-extrabold"
                          : "hover:text-secondary-200 font-bold text-primary-300"
                      }`
                    }
                    to={nav.link}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {nav.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="w-full px-4 py-5 flex items-center gap-5 flex-col ">
              {navLink.map((nav, i) => (
                <li key={i} className="w-full border py-4 ">
                  <NavLink
                    className={({ isActive }) =>
                      `py-3 block text-center w-11/12 mx-auto capitalize text-xl cursor-pointer transition-colors ease-in duration-300 ${
                        isActive
                          ? "text-secondary-200 font-extrabold"
                          : "hover:text-secondary-200 font-bold text-primary-300"
                      }`
                    }
                    to={nav.link}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {nav.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          {user ? (
            <button
              onClick={() => {
                logout();
                navigate("/");
                scrollTo(0, 0);
                setOpenNav(!openNav);
              }}
              className="absolute px-3 py-5 rounded-md bottom-3 border w-full text-2xl sm:hidden hover:text-secondary-200 font-bold text-primary-300"
            >
              {" "}
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                scrollTo(0, 0);
                setOpenNav(!openNav);
              }}
              className="absolute px-3 py-5 rounded-md bottom-3 border w-full text-2xl sm:hidden hover:text-secondary-200 font-bold text-primary-300"
            >
              {" "}
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
