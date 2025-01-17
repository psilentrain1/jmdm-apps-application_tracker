import { useParams } from "react-router";

export function Edit() {
  let { appid } = useParams();
  return (
    <>
      <h1>App Id: {appid}</h1>
    </>
  );
}
