import styled from "styled-components";
import { colors } from "./colors";

export const StyledListItem = styled.li`
  background-color: ${p => p.active ? colors.primary + '20' : 'transparent'};
  color: ${p => p.active ? colors.primary : 'white'};
`;

export const StyledNavigation = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${colors.main};
  padding: 27px;
  /* border-top-left-radius: 48px; */

  h1 {
    color: #FFFFFF;
    font-size: 28px;
    margin: ${122 - 27}px 0 57px 31px;
  }

  ul {
    list-style: none;
    font-size: 20px;
    width: 60%;
    padding: 0;
    
    ${StyledListItem} {
      margin-bottom: 6px;
      border-radius: 15.5px;
      padding: 18px 30px 19px;
    }
  }
`;

export const StyledRoute = styled.div`
  will-change: transform;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  transform: ${p => p.transformed ? 'translate3d(60%, 0, 0) rotate3d(0,0,-1, 7deg)' : 'translate3d(0%, 0, 0) rotate3d(0,0,0, 7deg)'};
  transform-origin: top right;
  border-top-left-radius: ${p => p.transformed ? "48px" : "0"};
  transition: transform .2s cubic-bezier(.37,.02,.27,.98), border-top-left-radius .2s cubic-bezier(.37,.02,.27,.98);
`;
