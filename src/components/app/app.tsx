import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import Favorites from "../../pages/favorites-page/favorites";
import RoomPage from "../../pages/room-page/room-page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "../../pages/not-found/not-found";
import {RoomType} from "../../types/types";
import Header from "../header/header";
import PrivateRoute from "../privateRoute/privateRoute";


function App(): JSX.Element {
  return (
    <>
      <Header/>
      <BrowserRouter>

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
