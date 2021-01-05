import { useHistory, useRouteMatch } from "react-router";
import { StyledListItem } from "./styled";

function NavItem({ routingItem, toggleTransformed }) {
  const match = useRouteMatch(routingItem.path);
  const history = useHistory()

  return (
    <StyledListItem
      onClick={() => {
        history.push(routingItem.path)
        toggleTransformed()
      }}
      active={!!match}
    >
      {routingItem.title}
    </StyledListItem>
  )
}

export { NavItem }