import { useRouteError } from "react-router-dom"

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1 style={{textAlign: 'center', color: 'red'}}>
        OOPS - ERROR
        <h3>{error.status}</h3>
        <h4>{error.statusText}</h4>
        <h5>{error.data}</h5>
      </h1>
    </>
  )
}
