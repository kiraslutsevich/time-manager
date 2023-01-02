import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../store';

type PropsType = {
  requiredIsAuthState: boolean;
  redirectTo?: string;
};

const Protector: React.FC<React.PropsWithChildren<PropsType>> = (props) => {
  const isAuth = useAppSelector(({ main }) => Boolean(main.user));

  if (props.requiredIsAuthState !== isAuth) {
    if (props.redirectTo) {
      return <Navigate to={props.redirectTo} />;
    }
    return null;
  }

  return props.children as React.ReactElement;
};

export default Protector;