import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="">
      <h1>{err.status}</h1>
    </div>
  );
};

export default Error;
