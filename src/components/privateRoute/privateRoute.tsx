import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks";
import {AuthStatus} from "../../consts";
import {selectAuthStatus} from "../../store/reducers/userReducer";

type PrivateRouteProps = {
  children: JSX.Element,
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(selectAuthStatus)
  return (
    authStatus === AuthStatus.Auth ? children : <Navigate to={"/login"}/>
  )
}

export default PrivateRoute
