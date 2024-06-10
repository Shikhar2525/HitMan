import { useState, useEffect } from "react";
import { CustomApiArgs, createUrl } from "./customHooksType";

const useMutation = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const tenantName = sessionStorage.getItem("defaultTenant") || "";

  const updateMutation = async (
    args: CustomApiArgs,
    apiMethod: string = "PATCH"
  ) => {
    const { baseUrl, path, params, initialData } = args;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(createUrl(baseUrl, path, params), {
        method: apiMethod,
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          tenantshortname: tenantName,
        },
        body: initialData,
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    return { data, isLoading, error };
  };

  return updateMutation;
};

export default useMutation;
