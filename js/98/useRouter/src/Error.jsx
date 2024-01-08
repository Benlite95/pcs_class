import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError();

  return (
    <div>Error - {error.statusText || error.message} </div>
  )
}
