import { FC } from "react";

import { Navigate } from "react-router-dom";

import { useAppSelector } from "@/redux/hooks";

export const PrivateRoute: FC<PrivateRouteProps> = ({
  redirectPath = "/",
  children,
}): JSX.Element => {
  const hasToken = useAppSelector((state) => state.token);

  const isLoggedIn = Boolean(hasToken);

  return !isLoggedIn ? <Navigate to={redirectPath} replace /> : children;
};

interface PrivateRouteProps {
  redirectPath?: string;
  children: JSX.Element;
}
