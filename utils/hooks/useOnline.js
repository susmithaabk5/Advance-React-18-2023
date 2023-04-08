import React, { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState(true);
  const handleOnline = () => {
    setOnline(true);
  };
  const handleOffline = () => {
    setOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOnline);
    };
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
