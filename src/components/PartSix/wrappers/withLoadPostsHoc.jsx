import React, { Component } from "react";
import useLoadPosts from "../../4PartFour/useLoadPosts";

export function withLoadPostsHoc(Component) {
  return function WrappedComponent(props) {
    const [data, error, isLoading] = useLoadPosts();
    return !isLoading && <Component {...props} data={data} />;
  };
}
