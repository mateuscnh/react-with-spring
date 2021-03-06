import useSWR from "swr";

export function useFetch(url, method) {
  const { data, error } = useSWR(url, async (url) => {
    const header = { method: "GET" };
    if (method) {
      header.method = method;
    }
    return await fetch(url, header).then((response) => response.json());
  });

  return { data, error };
}
