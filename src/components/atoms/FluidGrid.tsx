import React from "react";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";

const SGrid = styled(Grid)({ minHeight: "100vh" });

const FluidGrid: React.FC = ({ children, ...rest }) => (
  <SGrid
    container
    direction="row"
    justify="center"
    alignItems="center"
    {...rest}
  >
    {children}
  </SGrid>
);

export default FluidGrid;
