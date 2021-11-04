import React, { useState, useEffect } from "react";
import { getAllPosts } from "./postService";
import useLoadPosts from "./useLoadPosts";

export default function PartFour() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const subscription = getAllPosts().subscribe({
      next: (result) => {
        setData(result);
      },
      error: (error) => {
        setError(error);
      },
      complete: () => setIsLoading(false),
    });

    return () => subscription.unsubscribe();
  }, []);

  //OR
  // const [data, error, isLoading] = useLoadPosts()

  if (isLoading) return <div>...Loading</div>;

  if (!isLoading && error) return <div>...Ops Something went wrong!</div>;

  return <div>{JSON.stringify(data)}</div>;
}
