import React, { useState,useEffect } from "react";

export default function useInternet() {
  const [IsOnline, setIsOnline] = useState(true);
  useEffect(() => {
    // window.addEventListener('online',()=>{
    //   setIsOnline(true);
    // })

    // window.addEventListener('offline',()=>{
    //   setIsOnline(false);
    // })
    if (window.navigator.onLine) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [])
  


  return {
    IsOnline,
  };
}
