import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import Favorites from "../../pages/favorites-page/favorites";
import RoomPage from "../../pages/room-page/room-page";
import {Route, Routes} from "react-router-dom";
import NotFound from "../../pages/not-found/not-found";
import Header from "../header/header";
import PrivateRoute from "../privateRoute/privateRoute";

import BrowserRouter from '../browserHistoryRouter/browserHistoryRouter'
import history from '../../browserHistory'


function App(): JSX.Element {


  return (
    <>
      <BrowserRouter history={history}>

        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/offer/:id" element={<RoomPage/>}/>
          <Route path="/favorites" element={
            <PrivateRoute>
              <Favorites/>
            </PrivateRoute>
          }/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
