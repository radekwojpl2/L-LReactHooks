import useLoadPosts from "../../4PartFour/useLoadPosts";
import PartSixClass from "../PartSixClass";

export default function Wrapper() {
  const [data, error, isLoading] = useLoadPosts();

  return !isLoading && <PartSixClass data={data} />;
}
