import React from "react";
import { Container } from "./styles";

const Tooltip: React.FC = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;