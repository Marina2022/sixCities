import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import Favorites from "../../pages/favorites-page/favorites";
import RoomPage from "../../pages/room-page/room-page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "../../pages/not-found/not-found";
import {RoomType} from "../../types/types";

type AppProps = {
  offers: RoomType[]
}

function App({offers}: AppProps): JSX.Element {
  const hasAccess = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/offer/:id" element={<RoomPage hasAccess={hasAccess} offers={offers}/>}/>
        <Route path="/favorites" element={<Favorites offers={offers}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
