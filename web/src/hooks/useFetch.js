import useSWR from "swr";
import api from "../services/api";

export function useFetch(url, method) {
  const { data, error } = useSWR(url, async (url) => {
    const header = { method: "GET" };
    if (method) {
      header.method = method;
    }

    const { data } = await api({ url, ...header });

    return data;
  });

  return { data, error };
}
