import { StyledBurger, StyledRoute } from "./styled"

function RouteWrapper({ routingItem, transformed, toggleTransformed }) {
  return (
    <StyledRoute path={routingItem.path} transformed={transformed}>
      <div>
        <StyledBurger onClick={toggleTransformed}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <h2>{routingItem.title}</h2>
      </div>
    </StyledRoute>
  )
}

export { RouteWrapper }