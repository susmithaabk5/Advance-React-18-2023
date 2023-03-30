import { useState } from "react";
import { Title } from "./Title";

export const HeaderComponent = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
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
