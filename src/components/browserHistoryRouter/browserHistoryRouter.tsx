import {Router} from "react-router-dom";
import {BrowserHistory} from "history";
import {ReactNode, useEffect, useState} from "react";

type BrowserHistoryRouterProps = {
  history: BrowserHistory,
  children: ReactNode
}

function BrowserHistoryRouter({history, children}: BrowserHistoryRouterProps): JSX.Element {

  const [historyState, setHistoryState] = useState({location: history.location, action: history.action})

  useEffect(()=>{
    history.listen(setHistoryState)
  },[])
  return <Router navigator={history}  location={history.location} navigationType={history.action} >
    {children}
  </Router>
}

export default BrowserHistoryRouter
