import { useSelector } from "react-redux";
import {
  checkUserAuth,
  checkUserAuthLoading,
  selectUser,
} from "../../services/user/reducer";
import { Navigate, useLocation } from "react-router-dom";
import { START } from "../../utils/constants";

const ProtectedRoute = ({ onlyUnAuth = false, component }) => {
  const isAuthChecked = useSelector(checkUserAuth);
  const isAuthCheckedLoading = useSelector(checkUserAuthLoading);

  const user = useSelector(selectUser);
  const location = useLocation();

  if (!isAuthChecked) {
    // return isAuthCheckedLoading;
    return;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to={START} state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = ProtectedRoute;
export const OnlyUnAuth = ({ component }) => (
  <ProtectedRoute onlyUnAuth={true} component={component} />
);
