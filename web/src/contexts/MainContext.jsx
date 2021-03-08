import { createContext, useCallback, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const MainContext = createContext({
  posts: [],
  handleUpdatePosts: () => {},
});

export function MainProvider({ children }) {
  const { data, mutate } = useFetch("http://localhost:8080/posts");

  const [posts, setPosts] = useState(data);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleUpdatePosts = useCallback(
    (postToAdd) => {
      const newPosts = [...posts, postToAdd];
      setPosts(newPosts);
      mutate(newPosts, false);
    },
    [posts, mutate]
  );

  return (
    <MainContext.Provider value={{ posts, handleUpdatePosts }}>
      {children}
    </MainContext.Provider>
  );
}
