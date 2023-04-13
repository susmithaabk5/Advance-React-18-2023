import { useState } from "react";
import { Title } from "./Title";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  const [isloggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="flex space-x-2 items-center justify-between bg-orange-500 drop-shadow-lg  ">
      <Link to="/">
        <Title />{" "}
      </Link>
      <div className="nav-bar ">
        <ul className="flex py-5 px-14 hover:shadow-lg transition duration-300 ">
          <Link to="/">
            <li className="px-9 transform hover:scale-125 transition duration-300 ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/553/553376.png"
                alt="login"
                className="h-7"
              />
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="px-9 transform hover:scale-125 transition duration-300 ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174188.png"
                alt="login"
                className="h-7"
              />
              Help
            </li>{" "}
          </Link>

          <Link to="/contact">
            <li className="px-9 transform hover:scale-125 transition duration-300 ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/879/879859.png"
                alt="login"
                className="h-7"
              />
              Offer
            </li>
          </Link>
          <Link to="/cart">
            {" "}
            <li className="px-9 transform hover:scale-125 transition duration-300 ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9536/9536886.png"
                alt="login"
                className="h-7"
              />
              Cart
            </li>
          </Link>
          <Link to="/instamart">
            <li className="px-9 transform hover:scale-125 transition duration-300 ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8383/8383035.png"
                alt="login"
                className="h-7"
              />
              InstaMart
            </li>
          </Link>
          <li className="transform hover:scale-125 transition duration-300 px-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/310/310818.png"
              alt="login"
              className="h-7"
            />
            {isloggedIn ? (
              <button
                onClick={() => {
                  setIsLoggedIn(!isloggedIn);
                }}
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(!isloggedIn);
                }}
              >
                LogIn
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
