import { useState } from "react";
import { StyledNavigation, StyledRoute, StyledListItem } from "./styled";
import './common.css';
import { routing } from "./routing";
import { createHistory, LocationProvider, Router, useLocation } from '@reach/router'

function App() {
  const [transformed, setTransformed] = useState(true);
  const { pathname } = useLocation()

  const toggleTransformed = () => {
    setTransformed(d => !d)
  }

  const checkActiveRoute = (routingItem) => {
    return pathname.split('/').includes(routingItem.path)
  }
  
  return (
    <div className="App" onClick={toggleTransformed}>

      <StyledNavigation>
        <h1>Viktor</h1>
        <ul>
          {routing.map((routingItem) => {
            console.log('pathname', pathname);
            console.log('routingItem.path', routingItem.path);
            return (
              <StyledListItem active={checkActiveRoute(routingItem)}>{routingItem.title}</StyledListItem>
            )
          })}

          <hr />
          <StyledListItem>Sign Out</StyledListItem>
        </ul>

      </StyledNavigation>
      <Router>

        {routing.map((routingItem) => {
          return (
            <StyledRoute path={routingItem.path} transformed={transformed} />
          )
        })}

      </Router>
    </div >
  );
}

function AppMain() {
  let history = createHistory(window)
  return (
    <LocationProvider history={history}>
      <App />
    </LocationProvider>
  )
}

export default AppMain;
