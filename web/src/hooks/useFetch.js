import useSWR from "swr";

export function useFetch(url) {
  const { data, error } = useSWR(url, async (url) => {
    return await fetch(url).then((response) => response.json());
  });

  return { data, error };
}
