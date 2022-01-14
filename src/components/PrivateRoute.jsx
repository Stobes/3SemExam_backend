import { Route, Redirect, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  const { pathname } = useLocation();
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest}>
      {loggedIn === true ? (
        <Component {...rest} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: pathname } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
