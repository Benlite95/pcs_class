import { useRouteError } from "react-router-dom"

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        OOPS - ERROR
        <h3>{error.message}</h3>
      </h1>
    </>
  )
}
