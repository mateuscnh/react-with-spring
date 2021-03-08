import useSWR from "swr";
import api from "../services/api";

export function useFetch(url) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const { data } = await api.get(url);

    return data.reverse();
  });

  return { data, error, mutate };
}
