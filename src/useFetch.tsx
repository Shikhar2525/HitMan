import { useState, useEffect } from "react";
import { CustomApiArgs, CustomApiUtil, createUrl } from "./customHooksType";

const useFetch = (args: CustomApiArgs, utils?: CustomApiUtil) => {
  const { baseUrl, path, params, initialData } = args;
  const { skip = false } = utils || {};
  const convertedParams = JSON.stringify(params);

  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [refetchValue, setRefetchValue] = useState(false);

  const tenantName = sessionStorage.getItem("defaultTenant") || "";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(createUrl(baseUrl, path, params), {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            tenantshortname: tenantName,
          },
        });
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const responseData = await response.json();
        setData(responseData);
        setIsError(false);
      } catch (error: any) {
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!skip) {
      fetchData();
    }
  }, [baseUrl, path, skip, tenantName, refetchValue, convertedParams]); // Dependency array ensures fetch only runs on URL change

  const refetch = () => {
    setRefetchValue(!refetchValue);
  };

  return { data, isLoading, error, isError, refetch };
};

export default useFetch;
