import styled from "styled-components";
import { shade } from "polished";

export const LinkStyle = styled.div` 
  text-align: center;
  margin-top: 45px;  
  color: #19857b;    
  text-decoration: none;
  cursor: pointer;  

  &:hover {
    color: ${shade(0.2, "#19857b")};
  } 
`;