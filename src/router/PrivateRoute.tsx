import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

interface Props {
  children: JSX.Element;
}

function PrivateRoute({ children }: Props) {
  const currentUser = useAppSelector((state) => state.user.user);

  if (!currentUser) {
    return <Navigate to="/sign-in" />;
  }

  return children
}

export default PrivateRoute;
