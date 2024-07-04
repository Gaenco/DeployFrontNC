import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'superadmin' | 'resident' | 'resident-manager' | 'visitor' | 'scanner';

interface AuthContextProps {
  role: UserRole;
  setRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>('scanner'); // Set default role to 'superadmin' for testing

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
