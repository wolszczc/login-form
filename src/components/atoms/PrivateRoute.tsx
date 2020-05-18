import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuthContainer } from "../../lib/auth";
import React from "react";

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useAuthContainer();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          //@ts-ignore
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
