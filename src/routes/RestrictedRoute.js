import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth'
import searchParser from 'helpers/searchParser';

const RestrictedRoute = ({
  children
}) => {
  const auth = useAuth();
  const location = useLocation();

  const next = location.search ? searchParser(location.search.next) : '/';
  if (auth) {
    return <Navigate to={next} />;
  }

  return children;
};

export default RestrictedRoute;
