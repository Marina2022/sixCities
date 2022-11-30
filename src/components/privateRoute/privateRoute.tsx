import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks";
import {AuthStatus} from "../../consts";

type PrivateRouteProps = {
  children: JSX.Element,
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(state => state.authStatus)
  return (
    authStatus === AuthStatus.Auth ? children : <Navigate to={"/login"}/>
  )
}

export default PrivateRoute
