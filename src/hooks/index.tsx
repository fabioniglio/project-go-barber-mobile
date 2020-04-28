import React from 'react';
import { AuthProvider } from './auth';

const AppPRovider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);
export default AppPRovider;
