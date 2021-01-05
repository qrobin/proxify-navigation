import { useState } from "react";
import { Route, Switch } from "react-router";
import { routing } from "../routing";
import { NavItem } from "./NavItem";
import { RouteWrapper } from "./RouteWrapper";
import { StyledListItem, StyledNavigation } from "./styled";

function Layout() {
  const [transformed, setTransformed] = useState(true);
  const toggleTransformed = () => setTransformed(d => !d)

  return (
    <div className="App">
      <StyledNavigation>
        <h1>Username</h1>
        <ul>
          {routing.map((routingItem) =>
            <NavItem routingItem={routingItem} toggleTransformed={toggleTransformed} />)
          }
          <hr />
          <StyledListItem>Sign Out</StyledListItem>
        </ul>
      </StyledNavigation>

      <Switch>
        {routing.map((routingItem) => {
          return (
            <Route
              path={routingItem.path}
              render={() => <RouteWrapper
                toggleTransformed={toggleTransformed}
                transformed={transformed}
                routingItem={routingItem}
              />
              }
            />
          )
        })}
      </Switch>
    </div >
  );
}

export { Layout }