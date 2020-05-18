import React from "react";
import FluidGrid from "../atoms/FluidGrid";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Form from "../molecules/Form";

const Login = () => {
  return (
    <Container>
      <FluidGrid>
        <Grid item>
          <h1>Login</h1>
          <Form />
        </Grid>
      </FluidGrid>
    </Container>
  );
};

export default Login;
