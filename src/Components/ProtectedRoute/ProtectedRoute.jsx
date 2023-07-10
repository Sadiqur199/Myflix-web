import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../AuthContext/AuthProvider';

const ProtectedRoute = ({children}) => {
  const {user} = UserAuth()
  if(!user){
    return <Navigate to='/'/>
  }
  else{
    return children
  }
  return (
    <div>
      
    </div>
  );
};

export default ProtectedRoute;