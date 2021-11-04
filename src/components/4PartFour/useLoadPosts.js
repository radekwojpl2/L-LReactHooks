import React, { useState, useEffect } from "react";
import { getAllPosts } from "./postService";

export default function useLoadPosts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const subscription = getAllPosts().subscribe(({
      next: (result) => {
        setData(result);
      },
      error: (error) => {
        setError(error);
      },
      complete: () => setIsLoading(false),
    }));

    return () => subscription.unsubscribe();
  }, []);

  return [data, error, isLoading];
}
