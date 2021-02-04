import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  @media (max-width: 1800px) {
    height: 50px;
  }

  @media (max-width: 1600px) {
    height: 50px;
  }

  @media (max-width: 1200px) {
    height: 50px;
  }    
  
  @media (max-width: 900px) {
    height: 48px;
  }

  @media (max-width: 600px) {
    height: 48px;
  }

  &:hover {
    background: ${shade(0.2, "#ff9000")};
  }
`;
