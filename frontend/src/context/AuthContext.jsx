import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedAdmin = JSON.parse(localStorage.getItem('admin'));
    if (storedUser) setUser(storedUser);
    if (storedAdmin) setAdmin(storedAdmin);
  }, []);

  const loginUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const loginAdmin = (adminData) => {
    localStorage.setItem('admin', JSON.stringify(adminData));
    setAdmin(adminData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    setUser(null);
    setAdmin(null);
  };

  const isUserAuthenticated = !!user;
  const isAdminAuthenticated = !!admin;

  return (
    <AuthContext.Provider
      value={{
        user,
        admin,
        loginUser,
        loginAdmin,
        logout,
        isUserAuthenticated,
        isAdminAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
