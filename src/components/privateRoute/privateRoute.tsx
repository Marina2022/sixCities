import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks";

type PrivateRouteProps = {
  children: JSX.Element,
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isAuth = useAppSelector(state => state.isAuth)
  return (
    isAuth ? children : <Navigate to={"/login"}/>
  )
}

export default PrivateRoute