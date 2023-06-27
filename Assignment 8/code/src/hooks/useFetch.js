import React, { useState, useCallback } from "react";

export default function useFetch(dataHandler) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const fetchHandler = useCallback(
    async (requestobject) => {
      let res;
      if (!requestobject) {
        return;
      }
      setLoading(true);
      try {
        res = await fetch(requestobject?.url, {
          method: requestobject?.method ? requestobject?.method : "GET",
          headers: requestobject?.headers ? requestobject?.headers : {},
          body: requestobject?.body ? requestobject?.body : null,
        });
      } catch (error) {
        if (!res.ok) {
          setLoading(false);
          setError(error.message);
        }
      }
      const data = await res.json();
      setLoading(false);
      dataHandler(data);
    },
    [dataHandler]
  );
  return {
    fetchHandler,
    loading,
    error,
  };
}
