import React from "react";
import useLoadPosts from "../../4PartFour/useLoadPosts";

export function RenderProp({ render }) {
  const [data, error, isLoading] = useLoadPosts();

  return !isLoading && render(data);
}
