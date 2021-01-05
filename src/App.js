import { useState } from "react";
import { StyledNavigation, StyledRoute, StyledListItem } from "./styled";
import './common.css';

function App() {
  const [transformed, setTransformed] = useState(true);

  const toggleTransformed = () => {
    setTransformed(d => !d)
  }

  return (
    <div className="App" onClick={toggleTransformed}>
      <StyledNavigation>
        <h1>Viktor</h1>
        <ul>
          <StyledListItem active>Start</StyledListItem>
          <StyledListItem>Your Cart</StyledListItem>
          <StyledListItem>Favourites</StyledListItem>
          <StyledListItem>Your Orders</StyledListItem>

          <hr />
          <StyledListItem>Sign Out</StyledListItem>
        </ul>

      </StyledNavigation>
      <StyledRoute transformed={transformed} />
    </div>
  );
}

export default App;
